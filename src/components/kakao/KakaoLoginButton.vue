<template>
  
  <button @click="handleLogin">
    <img class="max-h-[40px] border border-gray-500 rounded-md" src="/Users/dong-eui/sendgo/sendgoVue/src/assets/images/auth/kakao_login_large_narrow.png" alt="로고" />
  </button>

</template>

<script>
import { getKakaoLoginLink } from "@/api/kakao/kakaoApi";

export default {
  methods: {
    handleLogin() {
      window.location.href = getKakaoLoginLink();
    }
  }
}
</script>

<style scoped>
</style>
