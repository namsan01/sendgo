<template>
  <div class="box">
    <h2>{{ text }}</h2>
  </div>
</template>

<script>
export default {
  name: "ButtonBox",
  props: {
    text: String,
  },
};
</script>

<style>
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 206px;
  height: 65px;
  background: #6250ff;
  border-radius: 44px;
  color: white;
  font-size: 25px;
}

@media (max-width: 1440px) {
.box {
  width: 162px;
  height: 50px;
  font-size: 20px;
}  
}
</style>
