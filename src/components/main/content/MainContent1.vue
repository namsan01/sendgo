<template>
  <div class="flex w-full h-[995px] bg-black duration-500 transition-all base:h-[1280px] base:flex-col base:items-center overflow-hidden base:gap-20">
    <div class="flex-center flex-col items-center bg-black flex-1 gap-[32.5px] base:pt-24 md:items-center md:gap-4">
      <span class="text-2xl mr-[6.3rem] text-white font-bold md:mr-0 md:text-xl"
        >인터넷 문자 메시지 전송의 모든 것</span
      >
      <div class="flex-col font-bold text-[50px]">
        <span class="gradient-text">가장 빠르고 안정적인</span>
        <span class="gradient-text">문자 서비스 SENDGO</span>
      </div>
      <div class="flex gap-[21px]">
        <ButtonBox text="회원가입" url="" />
        <ButtonBox text="로그인" url="" :style="{ background: '#242424' }" />
      </div>
    </div>
    <div class="flex-1 flex gap-8 items-end base:items-start base:pt-20 lg:flex-wrap lg:justify-center">
    <div class="flex-col justify-end gap-8 base:justify-start ">
      <MainBox1 url="main1x2" />
      <div class="w-[254px]">
      <img class="xl:rounded-[2rem]" :src="`/images/main/main2x2.png`" alt="main2" />
  </div>
    </div>
    <div class="flex-col justify-center gap-8 base:mt-10" >
      <div class="w-[254px] bg-[#37383e] rounded-b-[2rem] xl:rounded-[2rem]">
      <img class="xl:rounded-[2rem]" :src="`/images/main/main4x2.png`" alt="main4" />
  </div>
  <div class="w-[254px] bg-[#6250ff] rounded-t-[2rem] xl:rounded-[2rem]">
      <img class="xl:rounded-[2rem]" :src="`/images/main/main3x2.png`" alt="main3" />
  </div>
    </div>
    <div class="flex-col mb-[139px] gap-8">
      <div class="w-[254px] bg-[#6250ff] rounded-b-[2rem] xl:rounded-[2rem]">
      <img class="xl:rounded-[2rem]" :src="`/images/main/main5x2.png`" alt="main5" />
      </div>
      <MainBox2 url="main6x2" />
    </div>
  </div>
</div>
</template>

<script>
import MainBox1 from "@/components/main/box/MainBox1.vue";
import MainBox2 from "@/components/main/box/MainBox2.vue";
import ButtonBox from "@/components/main/box/ButtonBox.vue";

export default {
  name: "MainContent1",
  data() {},
  components: {
    MainBox1: MainBox1,
    MainBox2: MainBox2,
    ButtonBox: ButtonBox,
  },
};
</script>

<style scoped>

.gradient-text {
  background: linear-gradient(90deg, #9fbafd 0%, #4e81ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (max-width: 768px) {
.gradient-text {
  font-size: 40px;
}
}

</style>
