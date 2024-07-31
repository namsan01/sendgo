<template>
    <div class="w-full min-h-screen bg-gray-100 flex-col items-center px-4 py-10">
      <div class="w-full max-w-[1280px] bg-white p-8 rounded-2xl">
        <h2 class="text-3xl font-bold mb-10 text-center">마이 페이지</h2>
        <div class="flex h-[700px] rounded-2xl justify-between gap-10 md:gap-10 md:justify-center md:items-center md:flex-col md:h-auto">
          <div class="w-1/3 bg-gray-200 h-full rounded-2xl p-6 flex flex-col items-center justify-between md:justify-center">
            <h3 class="text-xl font-semibold mb-4 md:hidden">프로필 사진</h3>
            <!-- 이미지 URL을 photoUrl이 있으면 사용하고, 없으면 기본 이미지 URL을 사용 -->
            <img class="w-full" :src="photoUrl || 'https://static.toss.im/illusts/img-profile-default-alt.png'" alt="프로필 사진" />
            <div class="w-full flex flex-col items-center">
            </div>
          </div>
          <!-- 오른쪽: 사용자 정보 수정 폼 섹션 -->
          <div class="w-2/3 bg-slate-100 h-full rounded-2xl p-6 flex-col justify-between md:w-full">
            <form @submit.prevent="handleSubmit">
              <div class="grid grid-cols-1 gap-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700">이름</label>
                  <input
                    type="text"
                    id="name"
                    v-model="name"
                    class="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="이름을 입력하세요"
                    required
                  />
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700">이메일</label>
                  <input
                    type="email"
                    readonly
                    id="email"
                    v-model="email"
                    class="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="example@example.com"
                    required
                  />
                </div>
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700">전화번호</label>
                  <input
                    id="phone"
                    v-model="phone"
                    readonly
                    class="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="전화번호"
                  />
                </div>
                <div>
                  <label for="created_date" class="block text-sm font-medium text-gray-700">회원가입일</label>
                  <input
                    readonly
                    type="text"
                    id="created_date"
                    v-model="created_date"
                    class="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="회원가입일"
                  />
                </div>
              </div>
            </form>
            <button
              @click="goEdit"
              type="button"
              class="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              정보 수정
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        phone: '',
        created_date: '',
        photoUrl: '', // 사진 URL을 저장할 속성 추가
      };
    },
    async created() {
      await this.getUserData();
    },
    methods: {
      handleSubmit() {
        console.log('정보를 저장합니다:', {
          name: this.name,
          email: this.email,
          phone: this.phone,
          created_date: this.created_date,
        });
      },
      async getUserData() {
        try {
          const response = await fetch("http://127.0.0.1:8000/api/user", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          });
  
          const data = await response.json();
          if (response.ok) {
            this.name = data.name;
            this.email = data.email;
            this.phone = data.phone;
            this.created_date = this.formatDate(data.created_at);
            // 서버에서 받은 photo_path를 절대 URL로 변환
            this.photoUrl = data.photo_path ? `http://127.0.0.1:8000/storage/${data.photo_path.replace(/\\/g, '/')}` : '';
          } else {
            console.error("사용자 정보 가져오기 실패:", data);
            this.errorMessage = `사용자 정보 가져오기 실패: ${data.message || "Unknown error"}`;
          }
        } catch (error) {
          console.error("사용자 정보 가져오기 중 오류 발생:", error);
          this.errorMessage = `사용자 정보 가져오기 중 오류 발생: ${error.message || "Unknown error"}`;
        }
      },
      formatDate(dateStr) {
        const date = new Date(dateStr);
        const year = date.getFullYear(); 
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0'); 
        return `${year}-${month}-${day}`; 
      },
      goEdit() {
        this.$router.push('/mypage/edit');
      },
    }
  };
  </script>
  
  <style scoped>
  /* 여기에 추가적인 스타일을 정의할 수 있습니다. */
  </style>
  