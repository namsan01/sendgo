<template>
  <AskLink />
  <div class="w-full min-h-screen bg-gray-100 flex-col items-center px-4 py-10">
    <div class="w-full max-w-[1280px] bg-white p-8 rounded-2xl">
      <h2 class="text-3xl font-bold text-center mb-5">문의 내역</h2>
      <div class="w-full px-6">
        <div class="overflow-x-auto">
          <div class="py-2 max-w-[1460px] mx-auto">
            <h2 class="text-end mb-4">
              총 <span class="text-[#8d99ae]">{{ contents.length }}</span> 개
            </h2>
            <table class="border-collapse w-full min-w-full table md:hidden">
              <thead class="bg-gray-200 border-b">
                <tr>
                  <th class="p-3 font-bold uppercase text-gray-600 border border-gray-300">작성자</th>
                  <th class="p-3 font-bold uppercase text-gray-600 border border-gray-300">제목</th>
                  <th class="p-3 font-bold uppercase text-gray-600 border border-gray-300">작성일자</th>
                  <th class="p-3 font-bold uppercase text-gray-600 border border-gray-300">상태</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="content in contents" :key="content.id" @click="goToDetail(content.id)" class="cursor-pointer hover:bg-gray-100">
                  <td class="p-3 text-gray-800 text-center border border-b">{{ content.user.name }}</td>
                  <td class="p-3 text-gray-800 text-center border border-b">{{ content.title }}</td>
                  <td class="p-3 text-gray-800 text-center border border-b">{{ formatDate(content.created_at) }}</td>
                  <td class="p-3 text-gray-800 text-center border border-b">{{ content.status === 1 ? '답변대기' : '답변완료' }}</td>
                </tr>
              </tbody>
            </table>

            <div class="hidden md:block">
              <div v-for="content in contents" :key="content.id" @click="goToDetail(content.id)" class="bg-white mb-4 p-4 border rounded cursor-pointer hover:bg-gray-100">
                <div class="flex justify-between mb-2">
                  <span class="font-bold">작성자:</span>
                  <span>{{ content.user.name }}</span>
                </div>
                <div class="flex justify-between mb-2">
                  <span class="font-bold">제목:</span>
                  <span>{{ content.title }}</span>
                </div>
                <div class="flex justify-between mb-2">
                  <span class="font-bold">작성일자:</span>
                  <span>{{ formatDate(content.created_at) }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-bold">상태:</span>
                  <span>{{ content.status === 1 ? '답변대기' : '답변완료' }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import AskLink from "@/components/ask/AskLink.vue";

export default {
  name: "AskAnswer",
  components: {
    AskLink,
  },
  setup() {
    const contents = ref([]);
    const router = useRouter();

    const fetchContents = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const response = await axios.get("/api/contents", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        contents.value = response.data;
      } catch (error) {
        console.error("Error fetching contents:", error);
      }
    };

    const formatDate = (dateString) => {
      const [date] = dateString.split("T");
      return date;
    };

    const goToDetail = (id) => {
      router.push({ name: "AskDetail", params: { id } });
    };

    onMounted(() => {
      fetchContents();
    });

    return { contents, formatDate, goToDetail };
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
