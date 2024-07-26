<template>
  <div class="flex-center h-auto bg-white">
    <div class="wrapper">
      <MainSection1 />
      <MainSection2 />
      <MainSection3 />
    </div>
  </div>
</template>

<script>
import MainSection1 from "@/components/main/section/MainSection1.vue";
import MainSection2 from "@/components/main/section/MainSection2.vue";
import MainSection3 from "@/components/main/section/MainSection3.vue";

export default {
  name: "MainContent2",
  components: {
    MainSection1: MainSection1,
    MainSection2: MainSection2,
    MainSection3: MainSection3,
  },
};
</script>

<style scoped></style>
