<template>
  <div class="img-wrap">
      <img :src="`/images/main/${url}.png`" :alt="url" />
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
  width: 100%;
  max-width: 254px;
  height: auto;
  background: #6250ff;
  overflow: hidden;
  border-radius: 2rem;
  background-position: center;
}

</style>
