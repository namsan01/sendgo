<template>
    
      <button @click="handleLogin">
        <img class="w-full max-h-[40px]" src="/Users/dong-eui/sendgo/sendgoVue/src/assets/images/auth/web_light_sq_ctn.svg" alt="구글 로그인" />
      </button>
    
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
  