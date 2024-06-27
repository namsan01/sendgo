<template>
  <div
    class="flex h-[19.8rem] justify-center max-w-full bg-black border border-gray-800 border-solid border-1"
  >
    <div class="footer w-[80rem] mb-24">
      <div class="mt-14 flex gap-[30.2rem]"  >
        <router-link to="/">
          <img
            class="w-[142px] h-44px"
            src="/public/images/logo/Logo.svg"
            alt="Logo"
          />
        </router-link>
        <div class="flex items-center gap-[5rem]">
          <router-link to="/message">
            <span>메시지</span>
          </router-link>
          <router-link to="/credit">
            <span>크레딧</span>
          </router-link>
        </div>
      </div>

      <div class="footer !max-w-[1920px] bg-slate-400 border-gray-800 border-solid border-1">
        <div class=" bg-white flex flex-col">
          <span class="text1">문의 사항이 있으신가요? 텔레그램을 통해 고객센터로 문의 해 보세요.</span>
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
