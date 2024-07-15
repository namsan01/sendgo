<template>
    <div class="flex-center items-center w-full h-[100px] gap-2 bg-white">
      <div  class="flex justify-end w-[1223px] gap-2 base:w-[960px] lg:w-[760px] md:w-[360px] md:justify-center">
  <router-link
    v-for="link in links"
    :key="link.to"
    class="text-center content-center w-[155px] h-[56px] rounded-[13px] text-[#555555] text-base lg:w-[116px] lg:text-[14px]"
    :class="{ 'active-link': $route.path === link.to }"
    :to="link.to"
  >{{ link.text }}</router-link>
</div>
    </div>
</template>

<script>
  export default {
  name:"CreditLink",
      data() {
  return {
    links: [
      { to: '/credit', text: '크레딧 구매' },
      { to: '/credit/history', text: '크레딧 내역' },
    ]
  };
}
};
</script>

<style scoped>
.active-link {
background-color: #e1e7fd;
color: #4F44F0;
}
</style>