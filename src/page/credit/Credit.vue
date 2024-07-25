<template>
  <div class="h-auto bg-[#f2f4f8] pb-[200px] md:h-auto">
    <CreditLink />
    <div class="flex-col h-full items-center justify-center">
      <h2 class="text-3xl font-bold pt-[109px] mb-[18px] md:pt-[50px]">크레딧 구매</h2>
      <h2 class="mb-[53px]">메세지 전송을 위해 사용할 크레딧 상품을 선택해 주세요</h2>
      <div class="w-full flex-center px-6">
        <div class="grid w-full md:px-0 max-w-[1460px] gap-6 grid-cols-4 md:grid-cols-1 xl:grid-cols-2 justify-items-center">
          <div 
            v-for="(product, index) in products" 
            :key="index" 
            class="flex-col justify-around w-full min-w-[347px] min-h-[459px] bg-white rounded-lg p-8 shadow-lg md:p-4"
          >
            <h2 class="font-bold text-3xl">{{ formatCurrency(product.price) }}</h2>
            <div class="text-[#7B7B7B]">
              <h2>총 {{ product.totalMessages }}건 발송가능합니다</h2>
              <h2>1건당 15원 결제가능합니다</h2>
            </div>
            <div class="w-full flex justify-between items-center">
              <h2 class="text-[22px] font-semibold">{{ product.credits }} 크레딧</h2>
              <h2 class="flex-center items-center w-[70px] h-[33px] bg-[#E0EDFF] text-[#2116BF] font-semibold rounded-2xl text-[16px]">
                +{{ product.bonus }}%
              </h2>
            </div>
            <div class="flex-col justify-between w-full h-[88px] bg-[#F4F5F6] rounded-lg p-4">
              <div class="flex justify-between">
                <h2>기본 크레딧</h2>
                <h2>{{ formatNumber(product.basicCredits) }}</h2>
              </div>
              <div class="flex justify-between">
                <h2>추가 크레딧</h2>
                <h2>+ {{ formatNumber(product.additionalCredits) }}</h2>
              </div>
            </div>
            <button @click="pay('카드', product.price, product.order_id)" class="w-full h-[61px] bg-[#5146F0] rounded-lg text-xl text-white">구매하기</button>
          </div>
        </div>
      </div>
      <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
      <div v-if="successMessage" class="success">{{ successMessage }}</div>
    </div>
  </div>
</template>

<script>
import CreditLink from "@/components/credit/CreditLink.vue";
import { loadTossPayments } from "@tosspayments/payment-sdk";
import axios from "axios";

const clientKey = import.meta.env.VITE_TOSS_PAYMENTS_CLIENT_KEY;
let func1 = loadTossPayments(clientKey);

export default {
  name: "Credit",
  components: {
    CreditLink,
  },
  data() {
    return {
      products: [
        {
          price: 30000,
          totalMessages: "66,667",
          credits: "330,000",
          bonus: 10,
          basicCredits: 300000,
          additionalCredits: 30000,
          order_id: this.generateOrderId()
        },
        {
          price: 10000,
          totalMessages: "76,667",
          credits: "110,000",
          bonus: 10,
          basicCredits: 100000,
          additionalCredits: 10000,
          order_id: this.generateOrderId()
        },
        {
          price: 30000,
          totalMessages: "66,667",
          credits: "330,000",
          bonus: 10,
          basicCredits: 300000,
          additionalCredits: 30000,
          order_id: this.generateOrderId()
        },
        {
          price: 10000,
          totalMessages: "66,667",
          credits: "110,000",
          bonus: 10,
          basicCredits: 100000,
          additionalCredits: 10000,
          order_id: this.generateOrderId()
        },
      ],
      errorMessage: '',
      successMessage: '',
      customerName: ''
    };
  },
  async created() {
    await this.fetchCustomerName();
  },
  methods: {
    formatCurrency(value) {
      const formatter = new Intl.NumberFormat("ko-KR", {
        style: "decimal",
        currency: "KRW",
      });
      return formatter.format(value);
    },
    formatNumber(value) {
      const formatter = new Intl.NumberFormat("ko-KR");
      return formatter.format(value);
    },
    generateOrderId() {
      return `order-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    },
    async fetchCustomerName() {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/user', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          },
        });

        const data = await response.json();
        if (response.ok) {
          this.customerName = data.name; 
        } else {
          console.error('사용자 정보 가져오기 실패:', data);
          this.errorMessage = `사용자 정보 가져오기 실패: ${data.message || 'Unknown error'}`;
        }
      } catch (error) {
        console.error('사용자 정보 가져오기 중 오류 발생:', error);
        this.errorMessage = `사용자 정보 가져오기 중 오류 발생: ${error.message || 'Unknown error'}`;
      }
    },
async pay(method, amount, orderId) {
  try {
    // Toss Payments SDK 로드
    const tossPayments = await func1;

    // 결제 요청
    const response = await tossPayments.requestPayment(method, {
      amount: amount,
      orderId: orderId,
      orderName: "크레딧 구매",
      customerName: this.customerName,
      successUrl: "http://localhost:5173/success",
      failUrl: "http://localhost:5173/fail",
    });

  } catch (error) {
    if (error.code === "USER_CANCEL") {
      alert("유저가 취소했습니다.");
    } else {
      alert(error.message);
    }
    this.errorMessage = `결제 오류 발생: ${error.message}`;

    try {
      await axios.post('http://127.0.0.1:8000/api/payments', {
        method: method,
        amount: amount,
        orderId: orderId,
        status: '결제실패',
        errorMessage: error.message, 
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        }
      });
      console.log('결제 실패 정보가 서버에 저장되었습니다.');
    } catch (error) {
      console.error('서버에 결제 실패 정보를 저장하는 도중 오류 발생:', error.response ? error.response.data : error.message);
    }
  }
}



  },
};
</script>

<style scoped>
.error {
  color: red;
  margin-top: 20px;
}
.success {
  color: green;
  margin-top: 20px;
}
</style>
