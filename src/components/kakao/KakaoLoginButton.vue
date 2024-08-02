<template>
    <button @click="handleLogin">카카오 로그인</button>
  </template>
  
  <script>
  export default {
    methods: {
      getKakaoLoginLink() {
        const restApiKey = "e0311076f7cd9506e6e99ad76e577afb"; 
        const redirectUri = "http://localhost:5173/kakaologin";
        const authCodePath = "https://kauth.kakao.com/oauth/authorize";
        
        return `${authCodePath}?client_id=${restApiKey}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code`;
      },
      handleLogin() {
        window.location.href = this.getKakaoLoginLink();
      }
    }
  }
  </script>
  
  <style scoped>
  </style>
  