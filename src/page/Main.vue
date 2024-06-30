<template>
  <MainContent1 />
  <MainContent2 />
  <MainContent3 />
</template>

<script>
import MainContent1 from "@/components/main/content/MainContent1.vue";
import MainContent2 from "@/components/main/content/MainContent2.vue";
import MainContent3 from "@/components/main/content/MainContent3.vue";

export default {
  name: "Main",
  components: {
    MainContent1: MainContent1,
    MainContent2: MainContent2,
    MainContent3: MainContent3,
  },
};
</script>

<style scoped></style>
