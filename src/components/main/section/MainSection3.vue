<template>
  <div class="text1 flex-col items-center w-full mt-[212px] mb-[249px] lg:mt-[142px] lg:mb-[199px]">
    <img
      src="/images/icon/icon_check.svg"
      alt="logo"
      class="mb-[44px]"
    />
    <h2>정확도와 다양함은 물론</h2>
    <h2>신뢰할 수 있는 보안까지</h2>
    <h3 class="mt-[24px] mb-16">고객님들의 간편함을 고민하였습니다</h3>
    <div class="flex-col w-full gap-11 ">
      <div class="flex gap-11 lg:flex-col items-center">
        <div class="box1 w-[50%] ]">
          <div>
            <h2 :style="{ color: '#0F1F4B' }">일반 SMS는 기본, 카카오톡까지</h2>
            <h2 :style="{ color: '#516B71' }">
              종류와 상관없이 모두 전송해 드립니다
            </h2>
          </div>
          <div class="img-container">
            <img src="/images/main/main9x2.png" alt="logo" />
          </div>
        </div>
        <div class="box1 w-[50%]" :style="{ background: '#FBFBEF' }">
          <div>
            <h2 :style="{ color: '#431B06' }">강력한 보안을 제공합니다.</h2>
            <h2 :style="{ color: '#696156' }">
              신뢰할 수 있는 최신의 보안 시스템을
            </h2>
            <h2 :style="{ color: '#696156' }">
              적용하여 개인정보를 보호합니다
            </h2>
          </div>
          <div
            class="img-container"
            :style="{
              justifyContent: 'flex-end',
              height: '238px',
            }"
          >
            <img src="/images/icon/icon_lockx2.png" alt="logo" />
          </div>
        </div>
      </div>
      <div class="lg:flex justify-center">
      <div class="box2">
        <div class="flex-col items-center lg:items-start md:items-center">
          <h2 :style="{ color: '#000' }">놀라운 수신율을 경험해 보세요</h2>
          <h2>샌드고의 정확한 수신율은 99.8%에 달합니다.</h2>
        </div>
        <img src="/images/main/main10.png" alt="logo" 
        class="md:h-[138px]"/>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainSection3",
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
  height: 597px;
  display: flex;
  flex-direction: column;
  padding-top: 72px;
  border-radius: 1rem;
  padding-left: 54px;
  padding-right: 54px;
  background: #dceff4;
  gap: 60px;
}

.box1 h2 {
  font-size: 32px;
  font-weight: bold;
}

.box1 img {
  text-align: center;
}

.box2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: 49px;
  height: 495px;
  border-radius: 25px;
  background: #f8f9fa;
  overflow: hidden;
  margin-bottom: 200 px;
}

.box2 h2 {
  font-size: 30px;
  color: #727b88;
  font-weight: bold;
}

.img-container {
  display: flex;
  justify-content: center;
}

.img-container img {
  height: 310px;
}

@media (max-width: 1280px) {
.box1 {
  padding-right: 0px;
}
.box1 h2 {
  font-size: 25px;
  font-weight: 700;
}

.box1 h3 {
  font-size: 20px;
}

.box2 h2 {
  font-size: 25px
}
}




@media (max-width: 1024px) {
.box1 {
  width: 50%;
  padding-right: 54px;
  align-items: center;
}
.box1 h2 {
  font-size: 25px;
  font-weight: 700;
}

.box1 h3 {
  font-size: 20px;
}

.box2 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  font-size: 25px;
  padding: 72px 54px 0 54px
}
.box2 h2 {
  font-size: 25px
}
}


@media (max-width: 768px) {
  .text1 h2 {
font-size: 30px;
}

.box1 h2 {
font-size : 15px;
}

.box1 {
  padding-top: 30px;
  height: 300px;
  width: 75%;
  justify-content: space-between;
}
.box2 {
  width: 75%;
  height: 300px;
  padding-right: 54px;
  
}

.box2 h2 {
  font-size: 15px;
}

.img-container {
  overflow: hidden;
}

.img-container img {
  height: 119px;
  
}
}
</style>
