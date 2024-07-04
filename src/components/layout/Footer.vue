<template>
  <div
    class="flex flex-col h-[19.8rem] items-center max-w-full bg-black border-t border-gray-500"
  >
    <div class="footer w-[80rem] h-[9rem] xl:max-w-[60rem] lg:max-w-[40rem] md:max-w-[30rem]" >
      <div class="mt-14 flex gap-[30.2rem] xl:gap-0 justify-between"  >
          <img
            class="w-[142px] h-[44px]"
            src="/public/images/logo/logo_gray.svg"
            alt="Logo"
          />
        <div class="flex items-center gap-[5rem]">
          <router-link to="/message">
            <span>메시지</span>
          </router-link>
          <router-link to="/credit">
            <span>크레딧</span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="flex-center w-full h-[10.8rem] border-gray-500 border-t">
      <div class=" w-[80rem] xl:max-w-[60rem] lg:max-w-[40rem] md:max-w-[30rem]">
        <div class=" mt-8 flex flex-col gap-4">
          <span class="text1">문의 사항이 있으신가요? 텔레그램을 통해 고객센터로 문의해주세요.</span>
          <span class="text2">Telegram : @shdevelope</span>
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

.text1{
  color:#d6d6d6
}
.text2 {
  color: #f0f0f0
}

.footer span {
  font-size: 16px;
  color: #ededed;
}


</style>
