<template>
  <div>
    <h1>비밀번호 재설정</h1>
    <form @submit.prevent="sendResetLink">
      <label for="email">이메일 주소:</label>
      <input v-model="email" type="email" id="email" placeholder="이메일 주소 입력" required>
      <button type="submit">비밀번호 재설정 링크 보내기</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      message: ''
    };
  },
  methods: {
    async sendResetLink() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/password/email', {
          email: this.email
        });
        this.message = '비밀번호 재설정 링크가 이메일로 전송되었습니다.';
      } catch (error) {
        this.message = '문제가 발생했습니다. 다시 시도해 주세요.';
        console.error(error);
      }
    }
  }
};
</script>
