<template>
  <div class="flex h-[996px] bg-black">
    <div class="flex-center flex-col items-center bg-black flex-1 gap-[32.5px]">
      <span class="text-2xl mr-[6.3rem] text-white"
        >인터넷 문자 메시지 전송의 모든 것</span
      >
      <div class="text1">
        <span>가장 빠르고 안정적인</span>
        <span>문자 서비스 SENDGO</span>
      </div>
      <div class="flex gap-[21px]">
        <div class="box">회원가입</div>
        <div class="box" :style="{ background: '#242424' }">
          <span>로그인</span>
        </div>
      </div>
    </div>
    <div class="flex-1 flex gap-8">
      <div class="col justify-end gap-8">
        <MainContent1 url="main1x2" />
        <MainContent1 url="main2x2" />
      </div>
      <div class="col justify-center">
        <MainContent1 url="main4x2" style="background: #37383e" />
        <MainContent1 url="main3x2" />
      </div>
      <div class="col transform translate-y-[-90px]">
        <MainContent1 url="main5x2" />
        <MainContent2 url="main6x2" />
      </div>
    </div>
  </div>
</template>

<script>
import MainContent1 from "@/components/main/MainContent1.vue";
import MainContent2 from "@/components/main/MainContent2.vue";

export default {
  name: "Main",
  data() {},
  components: {
    MainContent1: MainContent1,
    MainContent2: MainContent2,
  },
};
</script>

<style scoped>
.text1 {
  display: flex;
  flex-direction: column;
  font-size: 50px;
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
