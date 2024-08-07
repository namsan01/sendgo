<template>
    <div>
      <p>로그인 처리 중...</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    async created() {
      const code = new URLSearchParams(window.location.search).get('code');
      if (code) {
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/auth/google/callback', {
            code
          });
  
  
          const { access_token } = response.data;
  
          if (access_token) {
            localStorage.setItem('access_token', access_token);
            window.location.href = '/';
          } else {
            console.error('Access token이 없습니다.');
            // window.location.href = '/login';
          }
        } catch (error) {
          console.error('로그인 실패', error.response ? error.response.data.message : error.message);
        //   window.location.href = '/login';
        }
      } else {
        console.error('Authorization code가 없습니다.');
        // window.location.href = '/login';
  
      }
    }
  }
  </script>
  