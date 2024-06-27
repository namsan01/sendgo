<template>
  <div
    class="sticky flex h-[5rem] justify-center items-center max-w-full bg-black border-b border-gray-800 border-solid border-b-1"
  >
    <div class="wrapper flex gap-[16.6rem]">
      <router-link to="/">
        <img
          class="w-[142px] h-44px"
          src="/public/images/logo/Logo.svg"
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
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.wrapper span {
font-size: 20px;
color: #d9d9d9;
}

</style>
