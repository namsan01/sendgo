<template>
    <div>
      <CreditLink />
      
    <h1>내 결제 내역</h1>
    <ul>
      <li v-for="payment in payments" :key="payment.id">
        {{ payment.amount }} - {{ payment.status }} - {{ payment.created_at }}
      </li>
    </ul>
  
    </div>
  </template>
  
  <script>
  import CreditLink from "@/components/credit/CreditLink.vue";
  
  export default {
    name: "History",
    components: {
      CreditLink, 
    },
    data() {
    return {
      payments: []
    };
  },
  async created() {
    try {
      const response = await fetch('/api/user-payments', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
      });
      this.payments = await response.json();
    } catch (error) {
      console.error('Error fetching payments:', error);
    }
  }
}
  </script>
  
  <style scoped>
  </style>
  