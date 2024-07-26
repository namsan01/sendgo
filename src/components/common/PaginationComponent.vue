<template>
  <div class="pagination">
    <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">
      이전
    </button>
    <span>페이지 {{ currentPage }} / {{ totalPages }}</span>
    <button
      @click="changePage(currentPage + 1)"
      :disabled="currentPage === totalPages"
    >
      다음
    </button>
  </div>
</template>

<script>
export default {
  props: ["currentPage", "totalPages"],
  methods: {
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.$router.push({ query: { page: page } });
      }
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 5rem;
}
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
