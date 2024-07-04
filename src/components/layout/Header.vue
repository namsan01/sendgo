<template>
  <div>
    <!-- 모달 -->
    <transition name="modal-slide">
      <div v-if="isOpen && !isWideScreen" :class="['fixed right-0 top-20 duration-300 w-screen h-[10vh] px-[80px] opacity-100 z-30', !isRootPath ? 'bg-white' : (isScrolled ? 'bg-white/95' : 'bg-black border-y')]">
        <div class="w-full h-full flex justify-center items-center">
          <div :class="['flex text-2xl gap-20 p-8 rounded-lg', !isRootPath ? 'text-black' : (isScrolled ? 'text-black' : 'text-white')]">
            <router-link to="/message" :class="isScrolled ? 'hover:text-[#d9d9d9]' : 'hover:text-[#4F44F0]'">
              <span>메시지</span>
            </router-link>
            <router-link to="/credit" :class="isScrolled ? 'hover:text-[#d9d9d9]' : 'hover:text-[#4F44F0]'">
              <span>크레딧</span>
            </router-link>
          </div>
        </div>
      </div>
    </transition>

    <!-- 헤더 섹션 -->
    <header>
      <div v-if="isRootPath" :class="['black-header', { 'fixed-header': isScrolled }]" class="flex-center items-center w-full">
        <div class="wrapper flex gap-[16.6rem] lg:justify-between">
          <router-link to="/">
            <img class="w-[142px] h-44px" src="/public/images/logo/logo_gray.svg" alt="로고">
          </router-link>
          <div class="flex items-center gap-[8.56rem] lg:hidden">
            <router-link to="/message">
              <span>메시지</span>
            </router-link>
            <router-link to="/credit">
              <span>크레딧</span>
            </router-link>
          </div>
          <nav class="hidden lg:block">
            <button class="w-10 h-10 relative focus:outline-none" @click="toggleMenu">
              <span class="sr-only">메인 메뉴 열기</span>
              <div class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
                  :class="{ 'rotate-45': isOpen, ' -translate-y-1.5': !isOpen }"></span>
                <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
                  :class="{ 'opacity-0': isOpen }"></span>
                <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
                  :class="{ '-rotate-45': isOpen, ' translate-y-1.5': !isOpen }"></span>
              </div>
            </button>
          </nav>
        </div>
      </div>
      <div v-if="!isRootPath || isScrolled" :class="['fixed-header', 'white-header', { 'bg-white/95': !isRootPath }] " class="flex-center items-center w-full">
        <div class="wrapper flex w-full items-center gap-[16.6rem] lg:justify-between ">
          <router-link to="/">
            <img class="w-[142px] h-44px" src="/public/images/logo/logo.svg" alt="로고" />
          </router-link>
          <div class="flex items-center gap-[8.56rem] lg:hidden">
            <router-link to="/message">
              <span>메시지</span>
            </router-link>
            <router-link to="/credit">
              <span>크레딧</span>
            </router-link>
          </div>
          <nav class="hidden lg:block">
            <button class="w-10 h-10 relative focus:outline-none" @click="toggleMenu">
              <span class="sr-only">메인 메뉴 열기</span>
              <div class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
                  :class="{ 'rotate-45': isOpen, ' -translate-y-1.5': !isOpen }"></span>
                <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
                  :class="{ 'opacity-0': isOpen }"></span>
                <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
                  :class="{ '-rotate-45': isOpen, ' translate-y-1.5': !isOpen }"></span>
              </div>
            </button>
          </nav>
        </div>
      </div>
    </header>

    <div :class="{ blur: !isRootPath }" class="content">
      <!-- 메인 컨텐츠 -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isOpen: false,
      isScrolled: false,
      isWideScreen: window.innerWidth >= 1024,
    };
  },
  computed: {
    isRootPath() {
      return this.$route.path === "/";
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
    this.handleResize(); // 초기 화면 크기에 따라 설정
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
    handleResize() {
      this.isWideScreen = window.innerWidth >= 1024;
      if (this.isWideScreen && this.isOpen) {
        this.isOpen = false;
      }
    },
  },
};
</script>

<style>
.wrapper span {
  font-size: 20px;
}

.modal-slide-enter-active, .modal-slide-leave-active {
  transition: transform 0.3s ease-out;
}

.modal-slide-enter {
  transform: translateY(100%);
}

.modal-slide-leave-to {
  transform: translateY(-100%);
}

.fixed-header {
  width: 100%;
  z-index: 1;
  transition: all 0.5s ease-in-out;
}

.black-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: black;
  color: white;
  z-index: 2;
  border-bottom: 1px solid #343434;
  transform: translateY(0);
  transition: transform 0.5s ease-in-out;
}

.black-header.scrolled {
  transform: translateY(-100%);
}

.white-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: white;
  color: black;
  z-index: 1;
  border-bottom: solid 1px #f6f8fa;
}

.content {
  margin-top: 5rem;
}

.content.blur {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.router-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  width: 186px;
}
</style>
