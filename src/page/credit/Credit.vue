<template>
  <div class="h-auto bg-[#f2f4f8] pb-[200px] md:h-auto">
    <CreditLink />
    <div class="flex-col h-full items-center justify-center">
      <h2 class="text-3xl font-bold pt-[109px] mb-[18px] md:pt-[50px]">크레딧 구매</h2>
      <h2 class="mb-[53px]">메세지 전송을 위해 사용할 크레딧 상품을 선택해 주세요</h2>
      <div class="w-full flex-center">
        <div class="w-[1460px] h-auto flex gap-6 flex-wrap justify-center">
          <div 
            v-for="(product, index) in products" 
            :key="index" 
            class="flex-col justify-around w-full max-w-[347px] h-[459px] bg-white rounded-lg p-8 shadow-lg md:p-4"
          >
            <h2 class="font-bold text-3xl">{{ product.price }}</h2>
            <div class="text-[#7B7B7B]">
              <h2>총 {{ product.totalMessages }}건 발송가능합니다</h2>
              <h2>1건당 15원 결제가능합니다</h2>
            </div>
            <div class="w-full flex justify-between items-center">
              <h2 class="text-[22px] font-semibold">{{ product.credits }} 크레딧</h2>
              <h2 class="flex-center items-center w-[70px] h-[33px] bg-[#E0EDFF] text-[#2116BF] font-semibold rounded-2xl text-[14px]">
                +{{ product.bonus }}%
              </h2>
            </div>
            <div class="flex-col justify-between w-full h-[88px] bg-[#F4F5F6] rounded-lg p-4">
              <div class="flex justify-between">
                <h2>기본 크레딧</h2>
                <h2>{{ product.basicCredits }}</h2>
              </div>
              <div class="flex justify-between">
                <h2>추가 크레딧</h2>
                <h2>{{ product.additionalCredits }}</h2>
              </div>
            </div>
            <button class="w-full h-[61px] bg-[#5146F0] rounded-lg text-white">구매하기</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import CreditLink from "@/components/credit/CreditLink.vue";

export default {
  name: "Credit",
  components: {
    CreditLink, 
  },
  data() {
    return {
      products: [
        {
          price: "30,000원",
          totalMessages: 66667,
          credits: 330000,
          bonus: 10,
          basicCredits: 300000,
          additionalCredits: 30000
        },
        {
          price: "10,000원",
          totalMessages: 76667,
          credits: 110000,
          bonus: 10,
          basicCredits: 100000,
          additionalCredits: 10000
        },
        {
          price: "30,000원",
          totalMessages: 66667,
          credits: 330000,
          bonus: 10,
          basicCredits: 300000,
          additionalCredits: 30000
        },
        {
          price: "10,000원",
          totalMessages: 66667,
          credits: 110000,
          bonus: 10,
          basicCredits: 100000,
          additionalCredits: 10000
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
