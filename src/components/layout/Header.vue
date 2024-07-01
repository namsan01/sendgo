<template>
  <div>
    <header>
      <div
        v-if="isRootPath"
        class="fixed-header black-header flex-center items-center w-full"
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
              <span>메시지</span>
            </router-link>

            <router-link to="/credit">
              <span>크레딧</span>
            </router-link>
          </div>
        </div>
      </div>

      <div
        :class="['fixed-header', 'white-header']"
        class="flex-center items-center w-full"
      >
        <div class="wrapper flex items-center gap-[201px]">
          <router-link to="/">
            <img
              class="w-[142px] h-44px"
              src="/public/images/logo/logo.svg"
              alt="Logo"
            />
          </router-link>

          <div class="flex items-center">
            <router-link to="/message">
              <div class="router-box">
                <span>메시지</span>
              </div>
            </router-link>

            <router-link to="/credit">
              <div class="router-box">
                <span>크레딧</span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </header>
    <div :class="{ blur: !isRootPath }" class="content">
      <!-- 페이지 컨텐츠 -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isScrolled: false,
    };
  },

  computed: {
    isRootPath() {
      return this.$route.path === "/";
    },
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
  },
};
</script>

<style>
.wrapper span {
  font-size: 20px;
}

.fixed-header {
  max-width: 100%;
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
