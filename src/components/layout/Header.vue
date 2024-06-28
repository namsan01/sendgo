<template>
  <div>
    <!-- 상단 헤더 -->
    <div class="realtive flex h-[5rem] justify-center items-center w-full bg-black z-10 border-b"  
    >
    >
      <div class="wrapper flex gap-[16.6rem]">
        <router-link to="/">
          <img
            class="w-[142px] h-44px"
            src="/public/images/logo/logo_gray.svg"
            alt="Logo"
          />
        </router-link>
        <div class="flex items-center gap-[8.56rem]">
          <router-link to="/message">
            <span :class="textClass">메시지</span>
          </router-link>
          <router-link to="/credit">
            <span :class="textClass">크레딧</span>
          </router-link>
        </div>
      </div>
    </div>
    
    <!-- 하단 헤더 -->
    
    <div class="fixed top-0 left-0 w-full flex h-[5rem] items-center justify-center z-1 border-b bg-white"
    >
      <div class="wrapper flex gap-[16.6rem]">
        <router-link to="/">
          <img
            class="w-[142px] h-44px"
            src="/public/images/logo/logo.svg"
            alt="Logo"
          />
        </router-link>
        <div class="flex items-center gap-[8.56rem]">
          <router-link to="/message">
            <span>메시지</span>
          </router-link>
          <router-link to="/credit">
            <span>크레딧</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      textClass: "text-white" ,
      isScrolled: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    }
  }
};
</script>

<style scoped>

.wrapper span {
  font-size: 20px;
}
</style>
