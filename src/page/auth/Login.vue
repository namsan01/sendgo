<template>
  <div class="flex flex-col min-h-screen bg-gray-100 py-16 items-center">
    <img class="w-36 h-10 mb-8 md:mb-10" src="/images/logo/logo.svg" alt="로고" />
    <div class="w-full max-w-xl px-4 md:px-6 lg:px-8">
      <form @submit.prevent="handleSubmit" class="bg-white p-6 md:p-8 rounded-lg shadow-lg space-y-6">
        <h1 class="text-center text-2xl md:text-3xl font-bold text-gray-700">로그인</h1>
        <div>
          <label class="block text-gray-800 font-semibold text-base md:text-lg mb-2" for="email">이메일</label>
          <input v-model="email" type="email" id="email" class="w-full bg-gray-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="example@gmail.com" autocomplete="username"/>
        </div>
        <div>
          <label class="block text-gray-800 font-semibold text-base md:text-lg mb-2" for="password">비밀번호</label>
          <input v-model="password" type="password" id="password" class="w-full bg-gray-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="비밀번호" autocomplete="current-password"/>
        </div>
        <button type="submit" class="w-full mt-8 bg-indigo-600 rounded-lg px-4 py-3 text-base md:text-lg text-white font-semibold tracking-wide hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">로그인</button>
        <div class="w-full flex justify-center mt-2 p-1 gap-4">
      <KakaoLoginButton/>
      <GoogleLoginButton/>
    </div>
        <div v-if="emailError || passwordError" class="flex flex-col items-center">
          <p v-if="emailError" class="text-red-500 text-md mt-2 text-center">{{ emailError }}</p> 
          <p v-if="passwordError" class="text-red-500 text-md mt-2 text-center">{{ passwordError }}</p>
        </div>
        <div class="mt-0">
            <div class="flex justify-around sm:text-left whitespace-nowrap">
              <button @click="goRegister" class="transition duration-200 mx-3 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500">
                <span class="inline-block ml-1 text-xl md:text-lg"><span class="text-blue-600 cursor-pointer decoration-2 hover:underline font-medium">회원가입</span></span>
              </button>
              <button @click="goResetPassword" class="transition duration-200 mx-3 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500">
                <span class="inline-block ml-1 text-xl md:text-lg"><span class="text-blue-600 cursor-pointer decoration-2 hover:underline font-medium">비밀번호 찾기</span></span>
              </button>
            </div>
        </div>
      </form>
    </div>
    
    
  </div>
</template>

<script>
import { login } from '@/api/auth/loginApi.js';
import GoogleLoginButton from '@/components/google/GoogleLoginButton.vue';
import KakaoLoginButton from "@/components/kakao/KakaoLoginButton.vue";

export default {
  data() {
    return {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
    };
  },
  components: {
    KakaoLoginButton,
    GoogleLoginButton,
  },
  methods: {
    goRegister() {
      this.$router.push('/register');
    },
    goResetPassword() {
      this.$router.push('/reset/mail'); 
    },
    async handleSubmit() {
      this.emailError = '';
      this.passwordError = '';

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.email)) {
        this.emailError = '유효한 이메일 주소를 입력하세요.';
        return;
      }

      try {
        const response = await login(this.email, this.password);
        console.log('로그인 성공:', response);
        localStorage.setItem('access_token', response.data.access_token);
        this.$router.push('/'); 
      } catch (error) {
        console.error('로그인 실패:', error.response ? error.response.data.message : error.message);

        if (error.response && error.response.status === 401) {
          if (error.response.data.message.includes('이메일')) {
            this.emailError = error.response.data.message;
          } else if (error.response.data.message.includes('비밀번호')) {
            this.passwordError = error.response.data.message;
          } else {
            this.emailError = '로그인 정보가 잘못되었습니다.';
            this.passwordError = '로그인 정보가 잘못되었습니다.';
          }
        } else {
          this.emailError = '이메일과 비밀번호를 다시 확인해주세요.';
        }
      }
    }
  }
}
</script>

<style scoped>
/* 추가적인 스타일이 필요하다면 여기에 작성하세요 */
</style>
