<template>
    <AskLink />
    <div class="w-full min-h-screen bg-gray-100 flex-col items-center px-4 py-10">
      <div class="w-full max-w-[1280px] bg-white p-8 rounded-2xl">
        <h2 class="text-3xl font-bold text-center mb-5">문의 내역</h2>
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">작성자</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">제목</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">작성일자</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상태</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="content in contents" :key="content.id" @click="goToDetail(content.id)" class="cursor-pointer hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap">{{ content.user.name }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ content.title }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ formatDate(content.created_at) }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ content.status === 1 ? '답변대기' : '답변완료' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import AskLink from "@/components/ask/AskLink.vue";
  
  export default {
    name: 'AskAnswer',
    components: {
    AskLink,
  },
    setup() {
      const contents = ref([]);
      const router = useRouter();
  
      const fetchContents = async () => {
        try {
          const token = localStorage.getItem('access_token');
          const response = await axios.get('http://127.0.0.1:8000/api/contents', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          contents.value = response.data;
        } catch (error) {
          console.error('Error fetching contents:', error);
        }
      };
  
      const formatDate = (dateString) => {
        const [date] = dateString.split('T');
        return date;
      };
  
      const goToDetail = (id) => {
        router.push({ name: 'AskDetail', params: { id } });
      };
  
      onMounted(() => {
        fetchContents();
      });
  
      return { contents, formatDate, goToDetail };
    }
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid #e5e7eb;
    padding: 8px;
  }
  thead {
    background-color: #f9fafb;
  }
  </style>
  