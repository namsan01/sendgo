<template>
  <main class="w-full mx-auto p-6 min-h-screen flex flex-col items-center justify-center bg-gray-100">
  <div class="w-full max-w-[544px] mx-auto min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <div class="w-full bg-white p-8 rounded-xl shadow-md">
      <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">비밀번호 재설정</h2>
      <form @submit.prevent="resetPassword" class="space-y-4">
        <div>
          <label for="email" class="block text-sm font-semibold text-gray-700 mb-1">이메일:</label>
          <input 
            type="email" 
            id="email"
            v-model="email" 
            required 
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <h3 class=" pt-2 text-indigo-600">이메일 확인을 위해 한번 더 적어주세요.</h3>
        </div>

        <div>
          <label for="password" class="block text-sm font-semibold text-gray-700 mb-1">새 비밀번호:</label>
          <input 
            type="password" 
            id="password"
            v-model="password" 
            required 
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label for="password_confirmation" class="block text-sm font-semibold text-gray-700 mb-1">비밀번호 확인:</label>
          <input 
            type="password" 
            id="password_confirmation"
            v-model="password_confirmation" 
            required 
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <input type="hidden" :value="token" />

        <button 
          type="submit" 
          class="w-full py-3 px-4 font-semibold bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          비밀번호 재설정
        </button>
      </form>

      <p v-if="message" :class="{ 'text-green-500': isSuccess, 'text-red-500': !isSuccess }" class="mt-4">
        {{ message }}
      </p>
    </div>
  </div>
</main>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      password_confirmation: '',
      token: new URLSearchParams(window.location.search).get('token'),
      message: '',
      isSuccess: false
    };
  },
  methods: {
    async resetPassword() {
      if (this.password !== this.password_confirmation) {
        this.message = '비밀번호와 비밀번호 확인이 일치하지 않습니다.';
        this.isSuccess = false;
        return;
      }

      try {
        await axios.post('/api/password/reset', {
          token: this.token,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        });
        this.message = '비밀번호가 성공적으로 재설정되었습니다.';
        this.isSuccess = true;
      } catch (error) {
        this.message = error.response?.data?.message || '비밀번호 재설정에 실패했습니다.';
        this.isSuccess = false;
      }
    }
  }
};
</script>

<style scoped>
/* No additional styles needed; Tailwind CSS classes handle the styling */
</style>
