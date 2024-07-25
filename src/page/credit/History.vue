<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full">
            <thead class="bg-white border-b">
              <tr>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">날짜</th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">주문번호</th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">결제 방법</th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">금액</th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">상태</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(payment, index) in payments" :key="payment.id" :class="{'bg-gray-100': index % 2 === 0, 'bg-white': index % 2 !== 0, 'border-b': true}">
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-light">{{ formatDate(payment.created_at) }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-light">{{ payment.orderId }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-light">{{ payment.method }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-light">{{ formatCurrency(payment.amount) }} 원</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-light">{{ payment.status }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      payments: [],
      errorMessage: ''
    };
  },
  async created() {
    await this.fetchUserPayments();
  },
  methods: {
    async fetchUserPayments() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/user/payments', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            'Content-Type': 'application/json'
          }
        });
        this.payments = response.data;
      } catch (error) {
        console.error('결제 내역 가져오기 실패:', error);
        this.errorMessage = `결제 내역 가져오기 실패: ${error.response ? error.response.data.message : error.message}`;
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString('ko-KR'); // 한국어 날짜 형식으로 변환
    },
    formatCurrency(value) {
      // 금액을 정수로 변환하여 소수점 이하 제거
      const formatter = new Intl.NumberFormat('ko-KR', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
      return formatter.format(value);
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
  margin-top: 20px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  padding: 12px;
  text-align: left;
}
th {
  background-color: #f4f4f4;
}
tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}
</style>
