<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  name: "Layout",
  components: {
    Header: Header,
    Footer: Footer,
  },
};
</script>
