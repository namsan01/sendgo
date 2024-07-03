<template>
      <div class="text1 flex-col items-center w-full mt-[212px] mb-[249px] lg:mt-[142px] mb-[199px]">
        <img
          src="/public/images/icon/icon_chat.png"
          alt="logo"
          class="mb-[44px]"
        />
        <h2>복잡한 인터넷 문자 서비스를</h2>
        <h2>간편하게 만나보세요.</h2>
        <h3 class="mt-[24px]">모든 종류의 인터넷 SMS를 편리하게.</h3>
        <div class="flex justify-between w-full mt-24 xl:justify-center gap-4 lg:flex-col items-center gap-6">
          <div class="box1">
            <img src="/public/images/icon/icon_write.png" />
            <div class="flex-col items-center gap-1">
              <h2>메시지 용량에</h2>
              <h2>제한 받지 않고 전송</h2>
            </div>
            <div class="flex-col items-center gap-1">
              <h3>메시지 용량 걱정없이 단문 메세지는</h3>
              <h3>물론 장문, 사진까지 전송이 가능합니다</h3>
            </div>
          </div>
          <div class="box1">
            <img src="/public/images/icon/icon_mail.png" />
            <div class="flex-col items-center gap-1">
              <h2>모든 종류의</h2>
              <h2>문자 메시지를 한번에</h2>
            </div>
            <div class="flex-col items-center gap-1">
              <h3>메시지 용량 걱정없이 단문 메세지는</h3>
              <h3>물론 장문, 사진까지 전송이 가능합니다</h3>
            </div>
          </div>
          <div class="box1">
            <img src="/public/images/icon/logo_speaker.png" />
            <div class="flex-col items-center gap-1">
              <h2>간편한 광고</h2>
              <h2>문자 메시지 설정</h2>
            </div>
            <div class="flex-col items-center gap-1">
              <h3>광고 설정 버튼 클릭 한번으로</h3>
              <h3>080 수신 거부 번호가 적용됩니다.</h3>
            </div>
          </div>
        </div>
      </div>
</template>

<script>


    export default {
        name:"MainSection1"
    }
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

@media (max-width: 1440px) {
.box1 {
  width: 335px;
  
}  

.box1 h2 {
  font-size: 18px;
  font-weight: 700;
}

.box1 h3 {
  font-size: 14px;
}
}

@media (max-width: 1024px) {
.box1 {
  width: 50%;
}
.box1 h2 {
  font-size: 25px;
  font-weight: 700;
}

.box1 h3 {
  font-size: 20px;
}
}
</style>