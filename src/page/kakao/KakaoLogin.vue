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
        const response = await axios.get('http://127.0.0.1:8000/api/auth/kakao/callback', {
          params: { code }
        });

        const { access_token } = response.data;
        

        if (access_token) {
          localStorage.setItem('access_token', access_token);
          this.$router.push('/');
        } else {
          console.error('Access token이 없습니다.');
          this.$router.push('/login');
        }
      } catch (error) {
        console.error('로그인 실패', error.response ? error.response.data.message : error.message);
        // this.$router.push('/login');
      }
    } else {
      console.error('Authorization code가 없습니다.');
      // this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
/* 스타일 추가 가능 */
</style>
