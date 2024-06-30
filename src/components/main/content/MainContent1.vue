<template>
  <div class="flex h-[996px] bg-black">
    <div class="flex-center flex-col items-center bg-black flex-1 gap-[32.5px]">
      <span class="text-2xl mr-[6.3rem] text-white font-bold"
        >인터넷 문자 메시지 전송의 모든 것</span
      >
      <div class="text1">
        <span>가장 빠르고 안정적인</span>
        <span>문자 서비스 SENDGO</span>
      </div>
      <div class="flex gap-[21px] mr-[3.5rem]">
        <ButtonBox text="회원가입" />
        <ButtonBox text="로그인" :style="{ background: '#242424' }" />
      </div>
    </div>
    <div class="flex-1 flex gap-8">
      <div class="col justify-end gap-8">
        <MainBox1 url="main1x2" />
        <MainBox1 url="main2x2" />
      </div>
      <div class="col justify-center">
        <MainBox1 url="main4x2" :style="{ background: '#37383e' }" />
        <MainBox1 url="main3x2" />
      </div>
      <div class="col transform translate-y-[-90px]">
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
  color: #608efe;
}
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
.col {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>
