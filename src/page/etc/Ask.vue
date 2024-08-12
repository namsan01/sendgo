<template>
  <div id="app">
    <div ref="editorContainer" class="editor-container"></div>
    <button @click="logContent">Log Content</button>
    <p>Content: {{ editorContent }}</p>
  </div>
</template>

<script>
import { onMounted, ref, watch } from 'vue';
import 'quill/dist/quill.snow.css'; // Quill의 기본 스타일
import Quill from 'quill';

export default {
  name: 'App',
  data() {
    return {
      editorContent: '', // 초기 콘텐츠
      quillInstance: null
    };
  },
  methods: {
    logContent() {
      console.log(this.editorContent);
    }
  },
  mounted() {
    // Quill 에디터 인스턴스를 설정
    if (this.$refs.editorContainer) {
      this.quillInstance = new Quill(this.$refs.editorContainer, {
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

      this.quillInstance.root.innerHTML = this.editorContent;


      this.quillInstance.on('text-change', () => {
        this.editorContent = this.quillInstance.root.innerHTML;
      });
    }

    watch(
      () => this.editorContent,
      (newContent) => {
        if (this.quillInstance) {
          this.quillInstance.root.innerHTML = newContent;
        }
      }
    );
  }
};
</script>

<style scoped>
.editor-container {
  height: 400px;
  direction: ltr;
  text-align: left;
}
</style>
