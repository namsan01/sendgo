<template>
  <div class="w-full px-4 md:px-6 lg:px-8">
  <button @click="handleLogin">
    <img class="" src="/Users/dong-eui/sendgo/sendgoVue/src/assets/images/kakao_login_large_wide.png" alt="로고" />
  </button>
</div>
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
