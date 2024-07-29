<template>
    <div class="flex-col items-center justify-center min-h-screen bg-[#f2f4f8]">
        <img class="w-60 md:w-40 mb-6" src="/images/logo/logo.svg" alt="로고" />
      <h1 class="text-4xl mb-10 base:text-2xl base:mb-5 md:text-base ">404 - 페이지를 찾을 수 없습니다.</h1>
      <router-link
      to="/"
      class="w-1/2 h-[100px] bg-gray-200 flex-center items-center text-3xl border  md:text-xl md:h-[75px]"
      >
      홈으로 돌아가기
    </router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound'
  };
  </script>
  
  <style scoped>
  </style>
  