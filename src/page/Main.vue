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
    <div class=" flex-1">
<div class="grid grid-cols-6 gap-4">
  <!-- Main Content 1 -->
  <MainContent class="col-span-2 row-span-3 bg-gray-200 p-4 text-center row-start-2" url="main1x2" />
  <!-- Main Content 2 -->
  <MainContent class="col-span-2 row-span-4 bg-gray-200 p-4 text-center" url="main4x2" />
  <!-- Main Content 3 -->
  <MainContent class="col-span-2 row-span-3 bg-gray-200 p-4 text-center" url="main5x2" />
  <!-- Main Content 4 -->
  <MainContent class="col-span-2 row-span-3 bg-gray-200 p-4 text-center" url="main6x2" />
  <!-- Main Content 5 -->
  <MainContent class="col-span-2 row-span-2 bg-gray-200 p-4 text-center row-start-5" url="main2x2" />
  <!-- Main Content 6 -->
  <MainContent class="col-span-2 row-span-2 bg-gray-200 p-4 text-center row-start-5" url="main3x2" />
</div>

    </div>
  </div>
</template>

<script>
import MainContent from "@/components/main/MainContent.vue";

export default {
  name: "Main",
  data() {
    url: "";
  },
  components: {
    MainContent: MainContent,
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

</style>
