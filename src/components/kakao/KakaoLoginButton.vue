<template>
  <button @click="handleLogin">카카오 로그인</button>
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
