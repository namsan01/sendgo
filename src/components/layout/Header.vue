<template class="body">
  <div>
    <!-- 모달 -->
    <transition name="modal-slide">
      <div
        v-if="isOpen && !isWideScreen"
        :class="[
          'fixed right-0 top-20 duration-300 w-screen h-[10vh] px-[80px] opacity-100 z-30',
          !isRootPath
            ? 'bg-white/95'
            : isScrolled
            ? 'bg-white/95'
            : 'bg-black border-y',
        ]"
      >
        <div class="w-full h-full flex justify-center items-center">
          <div
            :class="[
              'flex text-2xl gap-20 p-8 rounded-lg md:p-4',
              !isRootPath
                ? 'text-black'
                : isScrolled
                ? 'text-black'
                : 'text-white',
            ]"
          >
            <router-link
              to="/message"
              :class="{
                'text-[#4E43ED]': isCurrentRoute('/message'),
              }"
            >
              <span class="md:text-xl sm:text-[1.24rem]">메시지</span>
            </router-link>
            <router-link
              to="/credit"
              :class="{
                'text-[#4E43ED]': isCurrentRoute('/credit'),
              }"
            >
              <span class="md:text-xl sm:text-[1.24rem]">크레딧</span>
            </router-link>
          </div>
        </div>
      </div>
    </transition>

    <!-- 헤더 섹션 -->
    <header>
      <div
        v-if="isRootPath"
        :class="['black-header']"
        class="flex-center items-center w-full"
      >
        <div class="wrapper flex gap-[201px] items-center lg:justify-between lg:p-4">
          <router-link to="/">
            <img
              class="w-[142px] h-44px"
              src="/images/logo/logo_gray.svg"
              alt="로고"
            />
          </router-link>
          <div class="flex items-cente lg:hidden">
            <router-link
              to="/message"
              :class="{
                'text-[#4E43ED] border-b-2 border-[#4E43ED]':
                  isCurrentRoute('/message'),
              }"
            >
              <div class="router-box">메시지</div>
            </router-link>
            <router-link
              to="/credit"
              :class="{
                'text-[#4E43ED] border-b-2 border-[#4E43ED]':
                  isCurrentRoute('/credit'),
              }"
            >
              <div class="router-box">크레딧</div>
            </router-link>
          </div>
          <nav class="hidden lg:block">
            <button
              class="w-10 h-10 relative focus:outline-none"
              @click="toggleMenu"
            >
              <span class="sr-only">메인 메뉴 열기</span>
              <div
                class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <span
                  aria-hidden="true"
                  class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
                  :class="{ 'rotate-45': isOpen, ' -translate-y-1.5': !isOpen }"
                ></span>
                <span
                  aria-hidden="true"
                  class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
                  :class="{ 'opacity-0': isOpen }"
                ></span>
                <span
                  aria-hidden="true"
                  class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
                  :class="{ '-rotate-45': isOpen, ' translate-y-1.5': !isOpen }"
                ></span>
              </div>
            </button>
          </nav>
        </div>
      </div>
      <div
        v-if="!isRootPath || isScrolled"
        :class="[
          'white-header',
          { 'bg-white/95': !isRootPath },
        ]"
        class="flex-center items-center w-full"
      >
        <div
          class="wrapper flex w-full items-center gap-[201px] lg:justify-between lg:p-4"
        >
          <router-link to="/">
            <img
              class="w-[142px] h-44px"
              src="/images/logo/logo.svg"
              alt="로고"
            />
          </router-link>
          <div class="flex items-center lg:hidden">
            <router-link
              to="/message"
              :class="{
                'text-[#4E43ED] border-b-2 border-[#4E43ED]':
                  isCurrentRoute('/message'),
              }"
            >
              <div class="router-box">메시지</div>
            </router-link>
            <router-link
              to="/credit"
              :class="{
                'text-[#4E43ED] border-b-2 border-[#4E43ED]':
                  isCurrentRoute('/credit'),
              }"
            >
              <div class="router-box">크레딧</div>
            </router-link>
          </div>
          <nav class="hidden lg:block">
            <button
              class="w-10 h-10 relative focus:outline-none"
              @click="toggleMenu"
            >
              <span class="sr-only">메인 메뉴 열기</span>
              <div
                class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <span
                  aria-hidden="true"
                  class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
                  :class="{ 'rotate-45': isOpen, ' -translate-y-1.5': !isOpen }"
                ></span>
                <span
                  aria-hidden="true"
                  class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
                  :class="{ 'opacity-0': isOpen }"
                ></span>
                <span
                  aria-hidden="true"
                  class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
                  :class="{ '-rotate-45': isOpen, ' translate-y-1.5': !isOpen }"
                ></span>
              </div>
            </button>
          </nav>
        </div>
      </div>
    </header>
    <div class="mb-20"></div>
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
    this.handleResize();
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
    isCurrentRoute(route) {
      return this.$route.path.startsWith(route);
    },
  },
};
</script>

<style scoped>
.body {
  overflow-x: hidden;
}

.wrapper div {
  font-size: 20px;
}

.router-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  width: 186px;
}

.modal-slide-enter-active,
.modal-slide-leave-active {
  transition: transform 0.3s ease-out;
}

.modal-slide-enter {
  transform: translateY(100%);
}

.modal-slide-leave-to {
  transform: translateY(-100%);
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
</style>
