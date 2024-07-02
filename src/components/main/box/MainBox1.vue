<template>
  <div class="img-wrap">
    <div>
      <img :src="`/public/images/main/${url}.png`" :alt="url" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MainContent",
  props: {
    url: String,
  },
};
</script>

<style scoped>
.img-wrap {
  width: 254px;
  height: auto;
  background: #6250ff;
  overflow: hidden;
  border-radius: 2rem;
}


</style>
