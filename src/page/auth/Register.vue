<template>
    <div class="flex flex-col min-h-screen bg-gray-100 py-16 items-center">
      <img class="w-36 h-10 mb-8 md:mb-10" src="/images/logo/logo.svg" alt="로고" />
      <div class="w-full max-w-xl px-4 md:px-6 lg:px-8">
        <form @submit.prevent="handleRegister" class="bg-white p-6 md:p-8 rounded-lg shadow-lg space-y-6">
          <h1 class="text-center text-2xl md:text-3xl font-bold text-gray-700">회원가입</h1>
  
          <div>
            <label class="block text-gray-800 font-semibold text-base md:text-lg mb-2" for="username">이름</label>
            <input
              v-model="name"
              class="w-full bg-gray-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              id="username"
              placeholder="이름"
            />
          </div>
  
          <div>
            <label class="block text-gray-800 font-semibold text-base md:text-lg mb-2" for="email">이메일</label>
            <input
              v-model="email"
              class="w-full bg-gray-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="email"
              id="email"
              placeholder="example@gmail.com"
              :class="{ 'border-red-500': emailError }"
            />
            <p v-if="emailError" class="text-red-500 text-sm mt-1">{{ emailError }}</p>
          </div>
  
          <div>
            <label class="block text-gray-800 font-semibold text-base md:text-lg mb-2" for="password">비밀번호</label>
            <input
              v-model="password"
              class="w-full bg-gray-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="password"
              id="password"
              placeholder="비밀번호는 8글자 이상 입력해야 합니다"
            />
          </div>
  
          <div>
            <label class="block text-gray-800 font-semibold text-base md:text-lg mb-2" for="confirm">비밀번호 확인</label>
            <input
              v-model="confirmPassword"
              class="w-full bg-gray-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="password"
              id="confirm"
              placeholder="비밀번호 확인"
            />
          </div>
  
          <button
            type="submit"
            class="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-3 text-base md:text-lg text-white font-semibold tracking-wide hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            회원가입
          </button>
  
          <div class="py-5">
            <div class="flex-center">
              <div class="sm:text-left whitespace-nowrap">
                <button
                  type="button"
                  @click="goLogin"
                  class="transition duration-200 mx-3 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500"
                >
                  <span class="inline-block ml-1 text-xl md:text-base">계정이 있으신가요? <span class="text-[#5146F0] underline cursor-pointer">로그인</span></span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { register } from '@/api/registerApi.js';
  
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        emailError: ''
      };
    },
    methods: {
      goLogin() {
        this.$router.push('/login');
      },
      async handleRegister() {
        this.emailError = '';
  
        // 이메일 검증
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(this.email)) {
          this.emailError = '유효한 이메일 주소를 입력하세요.';
          return;
        }
  
        if (this.password !== this.confirmPassword) {
          alert('비밀번호가 일치하지 않습니다.');
          return;
        }
  
        try {
          const response = await register(this.name, this.email, this.password);
          console.log('회원가입 성공:', response);
          this.$router.push('/');
          alert("회원가입에 성공하셨습니다.")
        } catch (error) {
          console.error('회원가입 실패:', error.message);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* 추가적인 스타일이 필요할 경우 여기에 작성 */
  </style>
  