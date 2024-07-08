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
  border-radius: 2rem;
  overflow: visible;
  background-color: #37383e;
}

.img-wrap img {
  width: 130%;
  height: auto;
  max-width: none;
}
</style>
