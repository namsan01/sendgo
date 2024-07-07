<template>
  <div class="h-[950px] bg-[#f2f4f8]">
    <div class="sub-header w-full bg-white">
      <div
        class="flex justify-end w-[1223px] gap-2 base:w-[960px] lg:w-[760px] md:w-[360px]"
      >
        <router-link to="" :style="{ background: '#e1e7fd', color: '#4F44F0' }"
          >크레딧 구매</router-link
        >
        <router-link to="">크레딧 내역</router-link>
      </div>
    </div>
    <div class="flex-col h-full items-center">
      <h2 class="text-3xl font-bold mt-[109px] mb-[18px]">크레딧 구매</h2>
      <h2 class="mb-[53px]">
        메세지 전송을 위해 사용할 크레딧 상품을 선택해 주세요
      </h2>
      <div class="w-[1460px] flex gap-6 flex-nowrap">
        <div class="box1">
          <h2 class="font-bold text-3xl">30,000원</h2>
          <div class="text-[#7B7B7B]">
            <h2>총 66,667건 발송가능합니다</h2>
            <h2>1건당 15원 결제가능합니다</h2>
          </div>
          <div class="w-full flex justify-between items-center">
            <h2 class="text-[22px] font-semibold">330,000 크레딧</h2>
            <h2
              class="flex-center items-center w-[70px] h-[33px] bg-[#E0EDFF] text-[#2116BF] font-semibold rounded-2xl text-[14px]"
            >
              +10%
            </h2>
          </div>
          <div
            class="flex-col justify-between w-full h-[88px] bg-[#F4F5F6] rounded-lg p-4"
          >
            <div class="flex justify-between">
              <h2>기본 크레딧</h2>
              <h2>300,000</h2>
            </div>
            <div class="flex justify-between">
              <h2>추가 크레딧</h2>
              <h2>30,000</h2>
            </div>
          </div>
          <button class="w-full h-[61px] bg-[#5146F0] rounded-lg text-white">
            구매하기
          </button>
        </div>
        <div class="box1">
          <h2 class="font-bold text-3xl">10,000원</h2>
          <div class="text-[#7B7B7B]">
            <h2>총 76,667건 발송가능합니다</h2>
            <h2>1건당 15원 결제가능합니다</h2>
          </div>
          <div class="w-full flex justify-between items-center">
            <h2 class="text-[22px] font-semibold">110,000 크레딧</h2>
            <h2
              class="flex-center items-center w-[70px] h-[33px] bg-[#E0EDFF] text-[#2116BF] font-semibold rounded-2xl text-[14px]"
            >
              +10%
            </h2>
          </div>
          <div
            class="flex-col justify-between w-full h-[88px] bg-[#F4F5F6] rounded-lg p-4"
          >
            <div class="flex justify-between">
              <h2>기본 크레딧</h2>
              <h2>100,000</h2>
            </div>
            <div class="flex justify-between">
              <h2>추가 크레딧</h2>
              <h2>10,000</h2>
            </div>
          </div>
          <button class="w-full h-[61px] bg-[#5146F0] rounded-lg text-white">
            구매하기
          </button>
        </div>
        <div class="box1">
          <h2 class="font-bold text-3xl">30000원</h2>
          <div class="text-[#7B7B7B]">
            <h2>총 66,667건 발송가능합니다</h2>
            <h2>1건당 15원 결제가능합니다</h2>
          </div>
          <div class="w-full flex justify-between items-center">
            <h2 class="text-[22px] font-semibold">330,000 크레딧</h2>
            <h2
              class="flex-center items-center w-[70px] h-[33px] bg-[#E0EDFF] text-[#2116BF] font-semibold rounded-2xl text-[14px]"
            >
              +10%
            </h2>
          </div>
          <div
            class="flex-col justify-between w-full h-[88px] bg-[#F4F5F6] rounded-lg p-4"
          >
            <div class="flex justify-between">
              <h2>기본 크레딧</h2>
              <h2>300,000</h2>
            </div>
            <div class="flex justify-between">
              <h2>추가 크레딧</h2>
              <h2>30,000</h2>
            </div>
          </div>
          <button class="w-full h-[61px] bg-[#5146F0] rounded-lg text-white">
            구매하기
          </button>
        </div>
        <div class="box1">
          <h2 class="font-bold text-3xl">10,000원</h2>
          <div class="text-[#7B7B7B]">
            <h2>총 66,667건 발송가능합니다</h2>
            <h2>1건당 15원 결제가능합니다</h2>
          </div>
          <div class="w-full flex justify-between items-center">
            <h2 class="text-[22px] font-semibold">110,000 크레딧</h2>
            <h2
              class="flex-center items-center w-[70px] h-[33px] bg-[#E0EDFF] text-[#2116BF] font-semibold rounded-2xl text-[14px]"
            >
              +10%
            </h2>
          </div>
          <div
            class="flex-col justify-between w-full h-[88px] bg-[#F4F5F6] rounded-lg p-4"
          >
            <div class="flex justify-between">
              <h2>기본 크레딧</h2>
              <h2>100,000</h2>
            </div>
            <div class="flex justify-between">
              <h2>추가 크레딧</h2>
              <h2>10,000</h2>
            </div>
          </div>
          <button class="w-full h-[61px] bg-[#5146F0] rounded-lg text-white">
            구매하기
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Credit",
};
</script>

<style scoped>
.sub-header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  gap: 8px;
}

.sub-header a {
  text-align: center;
  align-content: center;
  width: 155px;
  height: 56px;
  border-radius: 13px;
  color: #555555;
}

.box1 {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  max-width: 347px;
  height: 459px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 10px 10px #00000008;
  padding: 32px;
}

@media (max-width: 1024px) {
  .sub-header a {
    width: 116px;
  }
}

@media (max-width: 768px) {
  .sub-header a {
    width: 116px;
    font-size: 14px;
  }
}
</style>
