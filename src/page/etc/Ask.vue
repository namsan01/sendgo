<template>
  <AskLink />
  <div class="w-full min-h-screen bg-gray-100 flex-col items-center px-4 py-10">
    <div class="w-full max-w-[1280px] bg-white p-8 rounded-2xl">
      <h2 class="text-3xl font-bold text-center mb-5">문의하기</h2>
      <h2 class="text-2xl font-bold text-center mb-10">답변완료까지 <span class="text-blue-500">2~3일</span>이 소요됩니다.</h2>
      <div id="app" class="w-full">
        <input
          v-model="title"
          type="text"
          placeholder="제목을 입력하세요"
          class="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <div ref="editorContainer" class="editor-container"></div>
        <div class="flex-center items-center pt-4">
        <button class="bg-blue-500 text-white p-2 rounded w-1/5" @click="saveContent">문의</button>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, watch } from 'vue';
import 'quill/dist/quill.snow.css';
import Quill from 'quill';
import axios from 'axios';
import AskLink from "@/components/ask/AskLink.vue";

export default {
  name: 'Ask',
  components: {
    AskLink,
  },
  setup() {
    const editorContent = ref('');
    const editorContainer = ref(null);
    const title = ref('');
    const status = ref(1);
    let quillInstance = null;

    const saveContent = async () => {
  try {
    const token = localStorage.getItem('access_token');

    await axios.post('http://127.0.0.1:8000/api/ask', {
      title: title.value,
      content: editorContent.value,
      status: status.value
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    alert('Content saved successfully');
  } catch (error) {
    console.error('Error saving content:', error);
    alert('Failed to save content');
  }
};


    onMounted(() => {
      if (editorContainer.value) {
        quillInstance = new Quill(editorContainer.value, {
          theme: 'snow',
          modules: {
            toolbar: [
              [{ 'header': '1' }, { 'header': '2' }],
              ['bold', 'italic', 'underline'],
              ['link'],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }]
            ]
          }
        });

        quillInstance.root.innerHTML = editorContent.value;

        quillInstance.on('text-change', () => {
          editorContent.value = quillInstance.root.innerHTML;
        });
      }

      watch(editorContent, (newContent) => {
        if (quillInstance && quillInstance.root.innerHTML !== newContent) {
          quillInstance.root.innerHTML = newContent;
        }
      });
    });

    return { title, editorContent, editorContainer, status, saveContent };
  }
};
</script>

<style scoped>
.editor-container {
  height: 400px;
}
</style>
