<template>
  <div class="flex w-full h-[996px] bg-black xl:h-auto lg:flex-col gap-20">
    <div class="flex-center flex-col items-center bg-black flex-1 gap-[32.5px] xl:gap-6 lg:mt-36">
      <span class="text-2xl mr-[6.3rem] text-white font-bold xl:mr-[1rem] text-xl lg:text-2xl"
        >인터넷 문자 메시지 전송의 모든 것</span
      >
      <div class="flex-col font-bold text-[50px] xl:text-[40px] lg:text-[50px]">
        <span class="gradient-text">가장 빠르고 안정적인</span>
        <span class="gradient-text">문자 서비스 SENDGO</span>
      </div>
      <div class="flex gap-[21px] xl:">
        <ButtonBox text="회원가입" />
        <ButtonBox text="로그인" :style="{ background: '#242424' }" />
      </div>
    </div>
    <div class="flex-1 xl:flex-1 flex gap-8 lg:justify-center ">
    <div class="col justify-end gap-8 base:justify-start ">
      <MainBox1 url="main1x2" />
      <MainBox1 url="main2x2" />
    </div>
    <div class="col justify-center " >
      <MainBox1 url="main4x2" :style="{ background: '#37383e' }" />
      <MainBox1 url="main3x2" />
    </div>
    <div class="col transform translate-y-[-90px] lg:translate-y-[0px]">
      <MainBox1 url="main5x2" />
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
.text1 {
  display: flex;
  flex-direction: column;
  font-size: 50px;
  font-weight: 700;
  
}
.col {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.gradient-text {
  background: linear-gradient(90deg, #9fbafd 0%, #4e81ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}


</style>
