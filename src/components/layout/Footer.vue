<template>
  <div
    class="flex flex-col h-[19.8rem] items-center max-w-full bg-black border-t border-gray-500"
  >
    <div class="footer w-[80rem] h-[9rem] xl:max-w-[60rem] lg:max-w-[40rem] md:max-w-full px-4 flex md:justify-center md:w-full" >
      <div class="w-full flex gap-[30.2rem] lg:gap-32 md:gap-0 md:justify-between md:mt-0 items-center"  >
          <img
            class="w-[142px] h-[44px] md:w-[120px]"
            src="/images/logo/logo_gray.svg"
            alt="Logo"
          />
        <div class="flex items-center gap-[5rem] md:gap-[3rem]">
          <router-link to="/message">
            <span class="text-base text-[#ededed]">메시지</span>
          </router-link>
          <router-link to="/credit">
            <span class="text-base text-[#ededed]">크레딧</span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="flex-center w-full h-[10.8rem] border-gray-500 border-t ">
      <div class=" w-[80rem] xl:max-w-[60rem] lg:max-w-[40rem] md:max-w-[30rem] text-sm ">
        <div class=" mt-8 flex flex-col gap-4 ">
          <span class="text-[#d6d6d6] text-base">문의 사항이 있으신가요? 텔레그램을 통해 고객센터로 문의해주세요.</span>
          <span class="text-[#f0f0f0] text-base" >Telegram : @shdevelope</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
</style>
