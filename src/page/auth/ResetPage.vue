<template>
    <div>
      <h2>비밀번호 재설정</h2>
      <form @submit.prevent="resetPassword">
        <div>
          <label for="token">토큰:</label>
          <input type="text" v-model="token" required>
        </div>
        <div>
          <label for="email">이메일:</label>
          <input type="email" v-model="email" required>
        </div>
        <div>
          <label for="password">새 비밀번호:</label>
          <input type="password" v-model="password" required>
        </div>
        <div>
          <label for="password_confirmation">비밀번호 확인:</label>
          <input type="password" v-model="password_confirmation" required>
        </div>
        <button type="submit">비밀번호 재설정</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        token: '',
        email: '',
        password: '',
        password_confirmation: '',
      };
    },
    methods: {
      async resetPassword() {
        try {
          await axios.post('/api/password/reset', {
            token: this.token,
            email: this.email,
            password: this.password,
            password_confirmation: this.password_confirmation,
          });
          alert('비밀번호가 성공적으로 재설정되었습니다.');
        } catch (error) {
          console.error('오류 발생:', error.response.data);
          alert('비밀번호 재설정에 실패했습니다.');
        }
      }
    }
  };
  </script>
  