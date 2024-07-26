<template>
  <CreditLink />
  <div class="flex flex-col items-center bg-[#f2f4f8] min-h-screen md:pb-20">
    <h1
      class="text-3xl font-bold pt-[109px] mb-[18px] md:pt-[50px] text-center"
    >
      주문내역
    </h1>
    <h2 class="text-center mb-[53px]">
      주문 내역은 한 페이지에 최대 10개씩 확인할 수 있습니다
    </h2>
    <div class="w-full px-6 ">
      <div class="overflow-x-auto">
        <div class="py-2 max-w-[1460px] mx-auto">
          <h2 class="text-end mb-4">
            총 <span class="text-[#8d99ae]">{{ payments.length }}</span> 개
          </h2>
          <table class="border-collapse w-full min-w-full table md:hidden">
            <thead class="bg-gray-200 border-b">
              <tr>
                <th
                  class="p-3 font-bold uppercase text-gray-600 border border-gray-300"
                >
                  날짜
                </th>
                <th
                  class="p-3 font-bold uppercase text-gray-600 border border-gray-300"
                >
                  주문번호
                </th>
                <th
                  class="p-3 font-bold uppercase text-gray-600 border border-gray-300"
                >
                  결제 방법
                </th>
                <th
                  class="p-3 font-bold uppercase text-gray-600 border border-gray-300"
                >
                  금액
                </th>
                <th
                  class="p-3 font-bold uppercase text-gray-600 border border-gray-300"
                >
                  상태
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="payment in payments" :key="payment.id">
                <td class="p-3 text-gray-800 text-center border border-b">
                  {{ formatDate(payment.created_at) }}
                </td>
                <td class="p-3 text-gray-800 text-center border border-b">
                  {{ payment.orderId }}
                </td>
                <td class="p-3 text-gray-800 text-center border border-b">
                  {{ payment.method }}
                </td>
                <td class="p-3 text-gray-800 text-center border border-b">
                  {{ formatCurrency(payment.amount) }} 원
                </td>
                <td class="p-3 text-gray-800 text-center border border-b">
                  {{ payment.status }}
                </td>
              </tr>
            </tbody>
          </table>

          <div class="hidden md:block">
            <div
              v-for="payment in payments"
              :key="payment.id"
              class="bg-white mb-4 p-4 border rounded"
            >
              <div class="flex justify-between mb-2">
                <span class="font-bold">날짜:</span>
                <span>{{ formatDate(payment.created_at) }}</span>
              </div>
              <div class="flex justify-between mb-2">
                <span class="font-bold">주문번호:</span>
                <span>{{ payment.orderId }}</span>
              </div>
              <div class="flex justify-between mb-2">
                <span class="font-bold">결제 방법:</span>
                <span>{{ payment.method }}</span>
              </div>
              <div class="flex justify-between mb-2">
                <span class="font-bold">금액:</span>
                <span>{{ formatCurrency(payment.amount) }} 원</span>
              </div>
              <div class="flex justify-between">
                <span class="font-bold">상태:</span>
                <span>{{ payment.status }}</span>
              </div>
            </div>
          </div>
        </div>
        <PaginationComponent
          :currentPage="currentPage"
          :totalPages="totalPages"
          @page-changed="fetchUserPayments"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CreditLink from "@/components/credit/CreditLink.vue";
import PaginationComponent from "@/components/common/PaginationComponent.vue";

export default {
  data() {
    return {
      payments: [],
      currentPage: 1,
      totalPages: 1,
      perPage: 10,
      totalItems: 0,
      errorMessage: "",
    };
  },
  components: {
    CreditLink,
    PaginationComponent,
  },
  async created() {
    const page = parseInt(this.$route.query.page) || 1;
    this.currentPage = page;
    await this.fetchUserPayments(page);
  },
  watch: {
    "$route.query.page": "fetchUserPayments",
  },
  methods: {
    async fetchUserPayments(page = this.currentPage) {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/user/payments",
          {
            params: {
              page: page,
              per_page: this.perPage,
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
              "Content-Type": "application/json",
            },
          }
        );

        this.payments = response.data.data;
        this.currentPage = response.data.current_page;
        this.totalPages = response.data.last_page;
        this.totalItems = response.data.total;
      } catch (error) {
        console.error("결제 내역 가져오기 실패:", error);
        this.errorMessage = `결제 내역 가져오기 실패: ${
          error.response ? error.response.data.message : error.message
        }`;
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      const year = date.getFullYear().toString().slice(-2);
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      return `${year}.${month}.${day}`;
    },
    formatCurrency(value) {
      const formatter = new Intl.NumberFormat("ko-KR", {
        style: "decimal",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
      return formatter.format(value);
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  max-width: 1460px;
  margin: 0 auto;
}
th,
td {
  padding: 12px;
  text-align: center;
}
th {
  background-color: #8d99ae;
  border: 1px solid #2b2d42;
}
tbody tr td {
  border: 1px solid #2b2d42;
}
tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}
</style>
