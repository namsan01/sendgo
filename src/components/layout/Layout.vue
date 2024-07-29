<template>
  <div :class="{ 'overflow-x-hidden': isRootPath }" :style="{ minWidth: '375px' }">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  name: "Layout",
  components: {
    Header,
    Footer,
  },
  computed: {
    isRootPath() {
      return this.$route.path === "/";
    },
  },
};
</script>

<style>
.overflow-x-hidden {
  overflow-x: hidden;
}
</style>
