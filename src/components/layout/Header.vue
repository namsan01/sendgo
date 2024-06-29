<template>
  <div>
    <div class="fixed-header black-header flex-center items-center w-full">
      <div class="wrapper flex gap-[16.6rem]">
        <router-link to="/">
          <img
            class="w-[142px] h-44px"
            src="../../../public/images/logo/logo_gray.svg"
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
      class="fixed-header white-header flex-center items-center w-full"
      :class="{ scrolled: isScrolled }"
    >
      <div class="wrapper flex gap-[16.6rem]">
        <router-link to="/">
          <img
            class="w-[142px] h-44px"
            src="../../../public/images/logo/logo.svg"
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

isScrolled: false,

};

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
  position: fixed;

  top: 0;

  left: 0;

  height: 5rem;

  background-color: black;

  color: white;

  z-index: 2;

  border-bottom: 1px;

  border-color: #e5e7eb;
}

.white-header {
  position: fixed;

  top: 0;

  left: 0;

  height: 5rem;

  background-color: white;

  color: black;

  z-index: 1;

  transform: translateY(-100%);

  border-bottom: 1px;

  border-color: #e5e7eb;
}

.white-header.scrolled {
  transform: translateY(0);

  z-index: 3;
}
</style>
