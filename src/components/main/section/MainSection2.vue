<template>
      <div class="flex-col items-center w-full mt-[212px] mb-[249px] lg:mt-[142px]">
        <img
          src="/images/icon/icon_light.png"
          alt="logo"
          class="mb-[50px]"
        />
        <h2 class="text-[40px] font-bold md:text-[30px]">샌드고의 다양한</h2>
        <h2 class="text-[40px] font-bold md:text-[30px]">기능들을 살펴보세요</h2>
        <h3 class="mt-[24px] text-[20px]">고객님들의 입장에서 고민하였습니다</h3>
        <div class="w-full mt-24 gap-10">
          <div class="flex w-full gap-[54px] lg:flex-col items-center base:gap-9">
            <div
              class="box2 w-[45%] flex-col justify-between lg:w-[50%] md:w-[75%] md:items-center md:pr-[54px]"
              :style="{ background: '#F8F9FA' }"
            >
              <div class="lg:flex-col items-center">
                <h2 class="text-[40px] font-bold" :style="{ color: '#000' }">자주 전송하는 내용이 있나요?</h2>
                <h2 class="text-[40px] font-bold">템플릿으로 메시지 내용을</h2>
                <h2 >저장하여 간편하게 전송하세요</h2>
              </div>
              <div class="items-end">
                <img src="/images/main/main7x2.png" 
                class="md:h-[138px]"/>
              </div>
            </div>
            <div class="box2 w-[55%] flex-col justify-between pr-[61px] lg:w-[50%] lg:pr-[40px] md:w-[75%] md:pr-[54px] md:items-center">
              <div>
                <h2 class="gradient-text">
                  크레딧 구매시, 보너스 크레딧 증정
                </h2>
                <h2 :style="{ color: '#7079CB' }">
                  크레딧 상품을 구매하면 상품 별
                </h2>
                <h2 :style="{ color: '#7079CB' }">
                  보너스 크레딧을 증정합니다
                </h2>
              </div>
              <div class="items-end">
                <img src="/images/main/main8x2.png" 
                class="md:h-[138px]"/>
              </div>
            </div>
          </div>
          <div class="flex w-full gap-[54px] mt-10 lg:flex-col items-center base:gap-9 base:mt-9">
            <div
              class="box3 w-[65%] flex-col justify-between lg:w-[50%] md:w-[75%] pr-[54px] md:md:items-center"
            >
              <div>
                <h2 :style="{ color: '#375984' }">전송 후 바로 발송확인 기능</h2>
                <h2>메세지 전송 후 바로 발송현황 창에서</h2>
                <h2>현재 메시지 전송 현황을 알려드립니다</h2>
              </div>
              <div class="items-end">
                <img src="/images/main/main11x2.png" 
                class="md:h-[138px]"/>
              </div>
            </div>
            <div class="box3 w-[35%] flex-col justify-between pr-[68px] base:pr-[0px] lg:w-[50%] lg:pr-[54px] md:items-center  "
            :style="{ background: '#FBFBF0' }">
              <div>
                <h2
                :style="{ color: '#6C3111' }">
                  누르면 바로 전송완료
                </h2>
                <h2 :style="{ color: '#6F6F6F' }">
                  누르자마자 수신인에게
                </h2>
                <h2 :style="{ color: '#6F6F6F' }">
                  바로 전달됩니다
                </h2>
              </div>
              <div>
                <img src="/images/main/main12.png" 
                class="h-[432px] base:h-[290px] md:h-[160px]"
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
    export default {
        name : "MainSection2"
    }
</script>

<style scoped>

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


@media (max-width: 1280px) {

.box2 {
  height: 500px;
  padding-top: 49px;
}

.box3 {
  padding-top: 49px;
  height: 500px;
}

.box2 h2{
  font-size: 25px;

}
.box3 h2 {
  font-size: 25px;
}
}




@media (max-width: 1024px) {

.box2 {
  padding-top: 49px;
  height: 500px;
}
.box3 {
  width: 50%;
}
}

@media (max-width: 768px) {

.box2 h2 {
font-size : 15px;
}

.box2 {
  padding-top: 30px;
  height: 300px;
}
.box3 {
  width: 75%;
  height: 300px;
  padding-right: 54px;
  padding-top:30px
}

.box3 h2 {
  font-size: 15px;
}
}


</style>