<template>
  <div class="flex flex-col items-center justify-center bg-gray-50 min-h-screen p-6">
    <img class="w-32 md:w-40 mb-6" src="/images/logo/logo.svg" alt="로고" />
    
    <div class="p-8 max-w-[544px] w-full">
      <h3 class="text-2xl font-semibold text-gray-900 text-center mb-2">결제가 완료되었습니다.</h3>
      
      <p class="text-gray-700 text-center mb-4">5초 뒤에 메인으로 이동합니다...</p>
      <p class="text-gray-500 text-center mb-4">남은 시간: {{ countdown }}초</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      responseData: '',
      countdown: 5, 
      countdownInterval: null 
    };
  },
  mounted() {
    this.success();
    this.startCountdown();
  },
  methods: {
    async success() {
      let params = new URLSearchParams(window.location.search);
      const url = 'https://api.tosspayments.com/v1/payments/' + params.get("paymentKey");
      const token = "dGVzdF9za19vRWpiMGdtMjNQT05PbUI2ZE5PbjhwR3dCSm41Og==";

      let userData = {
        amount: params.get("amount"),
        orderId: params.get("orderId")
      };

      try {
        const res = await axios.post(url, userData, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Basic ' + token
          }
        });
        this.responseData = res.data;
      } catch (err) {
        this.responseData = err.response.data;
      }

      try {
        await axios.post('http://127.0.0.1:8000/api/payments', {
          method: "카드",
          amount: params.get("amount"),
          orderId: params.get("orderId"),
          status: '결제성공',
          errorMessage: "결제가 정상 작동하였습니다.",
        }, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            'Content-Type': 'application/json'
          }
        });
        console.log('결제 정보가 서버에 저장되었습니다.');
      } catch (error) {
        console.error('서버에 결제 정보를 저장하는 도중 오류 발생:', error.response ? error.response.data : error.message);
      }
    },
    startCountdown() {
      this.countdownInterval = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--;
        } else {
          clearInterval(this.countdownInterval);
          this.$router.push('/');
        }
      }, 1000);
    }
  },
  beforeDestroy() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }
};
</script>
