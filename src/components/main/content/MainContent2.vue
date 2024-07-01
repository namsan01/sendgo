<template>
  <div class="flex-center h-auto bg-white">
    <div class="wrapper">
      <MainSection1/>
      <MainSection2/>
      <MainSection3/>
    </div>
  </div>
</template>

<script>
import MainSection1 from "@/components/main/section/MainSection1.vue";
import MainSection2 from "@/components/main/section/MainSection2.vue";
import MainSection3 from "@/components/main/section/MainSection3.vue";


export default {
  name: "MainContent2",
  components : {
    MainSection1 : MainSection1,
    MainSection2 : MainSection2,
    MainSection3 : MainSection3,
  }
};
</script>

<style scoped>
.text1 h2 {
  font-size: 40px;
  font-weight: 700;
}

.text1 h3 {
  font-size: 20px;
  color: #5c5c5c;
  font-weight: 600;
}

.box1 {
  width: 444px;
  height: 349px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background: #f0f0fa;
  gap: 22px;
}

.box1 h2 {
  font-size: 20px;
  font-weight: 700;
}

.box1 h3 {
  font-size: 16px;
}

.box2 {
  height: 597px;
  border-radius: 25px;
  background: #e9ebfd;
  padding-left: 54px;
  padding-top: 72px;
  overflow: hidden;
}

.box2 h2 {
  font-size: 30px;
  color: #727b88;
  font-weight: bold;
}

.box3 {
  height: 720px;
  border-radius: 25px;
  background: #DBE5FF;
  padding-left: 54px;
  padding-top: 72px;
  overflow: hidden;
}

.box3 h2 {
  font-size: 30px;
  color: #698AB1;
  font-weight: bold;
}

.gradient-text {
  background: linear-gradient(270deg, #6264f6 0%, #7f3add 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}


</style>