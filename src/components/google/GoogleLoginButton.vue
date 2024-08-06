<template>
    <div class="w-full px-4 md:px-6 lg:px-8">
      <button @click="handleLogin">
        <img class="w-full" src="/assets/images/google_login_button.png" alt="구글 로그인" />
      </button>
    </div>
  </template>
  
  <script>
  import { getGoogleLoginLink } from '@/api/google/googleApi.js';
  
  export default {
    methods: {
      handleLogin() {
        window.location.href = getGoogleLoginLink();
      }
    }
  };
  </script>
  
  <style scoped>
  /* 추가 스타일이 필요하면 여기에 작성하세요 */
  </style>
  