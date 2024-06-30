<template>
  <div class="flex-center h-[67.5rem] bg-black">
    <div class="wrapper flex-center items-center">
      <div class="text1 flex-col">
        <h2>비즈니스 광고의 시작,</h2>
        <h2>이제 샌드고와 함께 하세요</h2>
        <ButtonBox
          text="메시지 바로가기"
          :style="{ fontSize: '21px', marginTop: '66px', color: '#fff' }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonBox from "@/components/main/box/ButtonBox.vue";

export default {
  name: "MainContent3",
  components: {
    ButtonBox: ButtonBox,
  },
};
</script>

<style scoped>
.text1 {
  display: flex;
  flex-direction: column;
  font-size: 60px;
  font-weight: 700;
  background: linear-gradient(90deg, #b6b7f7 0%, #7fb2fe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: white;
}
</style>
