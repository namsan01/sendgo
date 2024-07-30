<template>
  <main id="content" role="main" class="w-full mx-auto p-6 h-screen flex flex-col items-center justify-center bg-gray-100">
    <div class="w-full max-w-[544px] bg-white rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 ">
      <div class="p-4 sm:p-7">
        <div class="text-center">
          <div class="flex-center mb-4">
      <img class="w-50 mb-2" src="/images/logo/logo.svg" alt="로고" />
      </div>
          <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">비밀번호를 잊으셨나요?</h1>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            비밀번호를 기억나셨나요?
            <button @click="goLogin" class="text-blue-600 decoration-2 hover:underline font-medium" href="/login">
              로그인 하러가기
            </button>
          </p>
        </div>
        <div class="mt-5">
          <form @submit.prevent="sendResetLink">
            <div class="grid gap-y-4">
              <div>
                <label for="email" class="block text-sm font-bold ml-1 mb-2 dark:text-white">이메일 주소</label>
                <div class="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    v-model="email"
                    class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                    required
                    aria-describedby="email-error"
                  />
                  <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                </div>
              </div>
              <button
                type="submit"
                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-indigo-600 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              >
                비밀번호 재설정
              </button>
            </div>
          </form>
        </div>
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
      message: ''
    };
  },
  methods: {
    async sendResetLink() {
      try {
        await axios.post('/api/password/email', { email: this.email });
        this.message = '비밀번호 재설정 링크가 이메일로 전송되었습니다.';
      } catch (error) {
        this.message = '비밀번호 재설정 링크 전송에 실패했습니다.';
      }
    },
    goLogin() {
      this.$router.push('/login');
    },
  }
};
</script>

<style scoped>
/* Add any custom styles if needed */
</style>
