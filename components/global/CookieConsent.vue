<template>
    <div v-if="showConsentBar" class="cookie-consent-bar">
      <div class="cookie-bar-content">
        <div>
          <h3 class="text-white">Cookies</h3>
          <p class="text-white mt-2">
            This website uses cookies to ensure you get the best experience on our website. Find out <NuxtLink
              to="/privacy-policy/">more.</NuxtLink>
          </p>
        </div>
        <div class="cookie-bar-buttons">
          <button class="btn btn-accept" @click="acceptCookies">Accept</button>
          <button class="btn btn-reject" @click="rejectCookies">Reject</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showConsentBar: false,
      };
    },
    mounted() {
      const userConsent = this.getCookie('cookie-consent'); // Check for user's consent
      if (!userConsent) {
        // Show the consent bar only if consent is not set
        this.showConsentBar = true;
      }
    },
    methods: {
      acceptCookies() {
        this.setCookie('cookie-consent', 'accepted', 365); // Set cookie for 1 year
        this.showConsentBar = false; // Hide the consent bar
      },
      rejectCookies() {
        this.setCookie('cookie-consent', 'rejected', 365); // Set cookie for 1 year
        this.showConsentBar = false; // Hide the consent bar
      },
      setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
      },
      getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
      },
    },
  };
  </script>
  
  <style>
  .cookie-consent-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #000;
    color: #fff;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
  }
  
  .cookie-bar-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 92%;
    margin: 0 auto;
  
    p {
      a {
        color: var(--color_prim_red);
        -webkit-text-decoration: underline;
        text-decoration: underline;
      }
    }
  }
  
  .cookie-bar-buttons button {
    margin-right: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: .375rem;
  }
  
  .btn-accept {
    background-color: #28a745;
    color: #fff;
  }
  
  .btn-reject {
    background-color: #dc3545;
    color: #fff;
  }
  </style>
  