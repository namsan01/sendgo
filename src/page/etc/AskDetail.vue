<template>
    <AskLink />
    <div class="w-full min-h-screen bg-gray-100 flex-col items-center px-4 py-10">
      <div class="w-full max-w-[1280px] bg-white p-8 rounded-2xl">
        <h2 class="text-3xl font-bold text-center mb-5">문의 상세</h2>
  
        <div v-if="content" class="mb-8">
          <h3 class="text-2xl font-bold mb-4">{{ content.title }}</h3>
          <p class="text-gray-600 mb-4">작성자: {{ content.user.name }}</p>
          <p class="text-gray-600 mb-4">작성일자: {{ formatDate(content.created_at) }}</p>
          <p class="mb-4" v-html="content.content"></p>
          <p class="text-gray-600">상태: {{ content.status === 1 ? '답변중' : '답변완료' }}</p>
        </div>
  
        <!-- 댓글 작성 폼 -->
        <div class="mb-8">
          <h3 class="text-xl font-bold mb-4">댓글 작성</h3>
          <textarea
            v-model="comment"
            placeholder="댓글을 입력하세요"
            class="w-full p-2 border border-gray-300 rounded mb-4"
            rows="4"
          ></textarea>
          <button @click="addComment" class="bg-blue-500 text-white p-2 rounded">댓글 등록</button>
        </div>
  
        <!-- 댓글 목록 -->
        <div>
          <h3 class="text-xl font-bold mb-4">댓글 목록</h3>
          <div v-if="comments.length === 0" class="text-gray-600 mb-4">댓글이 없습니다.</div>
          <div v-for="comment in comments" :key="comment.id" class="border-t border-gray-200 pt-4">
            <p class="font-semibold">{{ comment.user.name }}</p>
            <p class="text-gray-600 mb-2">{{ formatDate(comment.created_at) }}</p>
            <p>{{ comment.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import AskLink from "@/components/ask/AskLink.vue";
  
  export default {
    name: 'AskDetail',
    components: {
      AskLink,
    },
    setup() {
      const content = ref(null);
      const comments = ref([]);
      const comment = ref('');
      const route = useRoute();
  
      const fetchContent = async (id) => {
        try {
          const token = localStorage.getItem('access_token');
          const response = await axios.get(`http://127.0.0.1:8000/api/ask/${id}`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          content.value = response.data;
        } catch (error) {
          console.error('Error fetching content:', error);
          // Optional: Add user notification
          alert('내용을 불러오는 데 실패했습니다.');
        }
      };
  
      const fetchComments = async (id) => {
        try {
          const token = localStorage.getItem('access_token');
          const response = await axios.get(`http://127.0.0.1:8000/api/ask/${id}/comments`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          comments.value = response.data;
        } catch (error) {
          console.error('Error fetching comments:', error);
          // Optional: Add user notification
          alert('댓글을 불러오는 데 실패했습니다.');
        }
      };
  
      const addComment = async () => {
        if (!comment.value.trim()) {
          alert('댓글을 입력해주세요.');
          return;
        }
  
        try {
          const token = localStorage.getItem('access_token');
          await axios.post(`http://127.0.0.1:8000/api/ask/${content.value.id}/comments`, {
            content: comment.value
          }, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          comment.value = ''; // Clear comment input
          fetchComments(content.value.id); // Refresh comments
        } catch (error) {
          console.error('Error adding comment:', error);
          // Optional: Add user notification
          alert('댓글을 등록하는 데 실패했습니다.');
        }
      };
  
      const formatDate = (dateString) => {
        if (!dateString) return '';
        const [date] = dateString.split('T');
        return date;
      };
  
      onMounted(() => {
        fetchContent(route.params.id);
        fetchComments(route.params.id);
      });
  
      return { content, comments, comment, formatDate, addComment };
    }
  };
  </script>
  
  <style scoped>
  /* 스타일을 추가해 주세요 */
  </style>
  