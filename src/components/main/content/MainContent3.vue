<template>
  <div class="flex-center h-[67.5rem] bg-black lg:h-[50rem] px-4">
    <div class="wrapper flex-center items-center">
      <div class="flex-col items-center gap-[66px] text-[60px] font-bold">
        <div class="flex-col items-center">
          <h2 class="gradient-text">비즈니스 광고의 시작,</h2>
          <h2 class="gradient-text">이제 샌드고와 함께 하세요</h2>
        </div>
        <ButtonBox text="메시지 바로가기" url="/message" :style="{ fontSize: '17px' }" />
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
.gradient-text {
  background: linear-gradient(90deg, #b6b7f7 0%, #7fb2fe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (max-width: 768px) {
.gradient-text {
  font-size: 30px;
}
}

</style>
