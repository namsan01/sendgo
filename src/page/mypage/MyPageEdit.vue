<template>
    <div class="w-full min-h-screen bg-gray-100 flex-col items-center px-4 py-10">
      <div class="w-full max-w-[1280px] bg-white p-8 rounded-2xl">
        <h2 class="text-3xl font-bold mb-10 text-center">마이 페이지</h2>
        <div class="flex h-[700px] rounded-2xl justify-between gap-10 md:gap-10 md:justify-center md:items-center md:flex-col md:h-auto">
          <div class="w-1/3 bg-gray-200 h-full rounded-2xl p-6 flex flex-col items-center justify-between md:justify-center">
            <h3 class="text-xl font-semibold mb-4 md:hidden">프로필 사진</h3>
            <!-- 이미지 클릭 시 파일 입력 필드 트리거 -->
            <img
              :src="photoUrl || 'https://static.toss.im/illusts/img-profile-default-alt.png'"
              class="w-full cursor-pointer"
              alt="Profile Photo"
              @click="triggerFileInput"
            />
            <div class="w-full flex flex-col items-center mt-4">
              <!-- 숨겨진 파일 입력 필드 -->
              <input
                type="file"
                ref="fileInput"
                id="photo-upload"
                class="hidden"
                @change="handleFileSelect"
              />
              <label
                for="photo-upload"
                class="bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-600"
                @click="triggerFileInput"
              >
                사진 선택
              </label>
              <button
                v-if="selectedFile"
                @click="uploadFile"
                class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-2 hover:bg-blue-600"
              >
                사진 업로드
              </button>
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
                    @input="formatPhoneNumber"
                    class="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="전화번호"
                    autocomplete="phone-number"
                  />
                </div>
                <div>
                  <label for="password" class="block text-sm font-medium text-gray-700">현재 비밀번호</label>
                  <input
                    type="password"
                    id="password"
                    v-model="password"
                    class="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="비밀번호"
                    autocomplete="current-password"
                  />
                </div>
                <div>
                  <label for="new-password" class="block text-sm font-medium text-gray-700">새 비밀번호</label>
                  <input
                    type="password"
                    id="new-password"
                    v-model="newPassword"
                    class="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="새 비밀번호"
                    autocomplete="new-password"
                  />
                </div>
                <div>
                  <label for="password_confirmation" class="block text-sm font-medium text-gray-700">비밀번호 확인</label>
                  <input
                    type="password"
                    id="password_confirmation"
                    v-model="passwordConfirmation"
                    class="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="비밀번호 확인"
                  />
                </div>
              </div>
              <div class="flex gap-6 mt-6">
                <button
                  @click="goBack"
                  type="button"
                  class="w-full bg-gray-500 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  뒤로가기
                </button>
                <button
                  type="submit"
                  class="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  수정하기
                </button>
              </div>
            </form>
            <!-- 스낵바 메시지 -->
            <div v-if="snackbarVisible" class="snackbar">{{ snackbarMessage }}</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        name: "",
        email: "",
        phone: "",
        password: "",
        newPassword: "",
        passwordConfirmation: "",
        photoUrl: "https://static.toss.im/illusts/img-profile-default-alt.png", // 기본 사진 URL
        selectedFile: null,
        snackbarVisible: false,
        snackbarMessage: "",
      };
    },
    async created() {
      await this.getUserData();
    },
    methods: {
      triggerFileInput() {
        this.$refs.fileInput.click();
      },
      handleFileSelect(event) {
        const file = event.target.files[0];
        if (file) {
          // 파일을 읽기 위한 FileReader 인스턴스 생성
          const reader = new FileReader();
  
          // FileReader의 onload 이벤트 핸들러
          reader.onload = (e) => {
            // 이미지 미리보기 URL을 설정
            this.photoUrl = e.target.result;
          };
  
          // 파일을 읽기 시작
          reader.readAsDataURL(file);
  
          // 선택된 파일 저장
          this.selectedFile = file;
        }
      },
      async uploadFile() {
        if (!this.selectedFile) return;
  
        // 폼 데이터 생성 및 파일 업로드
        const formData = new FormData();
        formData.append("photo", this.selectedFile);
  
        try {
          const response = await axios.post(
            "http://127.0.0.1:8000/api/upload-photo",
            formData,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                "Content-Type": "multipart/form-data",
              },
            }
          );
  
          // 서버에서 받은 photo_path로 URL 업데이트
          this.photoUrl = response.data.photo_path
            ? `http://127.0.0.1:8000/storage/${response.data.photo_path.replace(/\\/g, "/")}`
            : this.photoUrl;
  
          // 업로드 후 파일 선택 상태 초기화
          this.selectedFile = null;
          this.showSnackbar("사진이 성공적으로 업로드되었습니다.");
        } catch (error) {
          console.error("사진 업로드 중 오류 발생:", error);
          this.showSnackbar("사진 업로드 중 오류 발생.");
        }
      },
      async handleSubmit() {
        // 비밀번호와 비밀번호 확인 필드의 일치를 확인
        if (this.newPassword && this.newPassword !== this.passwordConfirmation) {
          this.showSnackbar("새 비밀번호와 비밀번호 확인이 일치하지 않습니다.");
          return;
        }
  
        const userData = {
          name: this.name,
          email: this.email,
          phone: this.phone,
          current_password: this.password,
          new_password: this.newPassword,
        };
  
        try {
          const response = await axios.post(
            "http://127.0.0.1:8000/api/update-profile",
            userData,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
              },
            }
          );
  
          this.showSnackbar("정보가 성공적으로 업데이트되었습니다.");
          setTimeout(() => this.goBack(), 2000);
          
        } catch (error) {
          console.error("정보 업데이트 중 오류 발생:", error.response.data);
          if (error.response && error.response.data.errors) {
            this.showSnackbar(error.response.data.errors.new_password.join("\n"));
          } else {
            this.showSnackbar("정보 업데이트 중 오류 발생.");
          }
        }
      },
      showSnackbar(message) {
        this.snackbarMessage = message;
        this.snackbarVisible = true;
        setTimeout(() => {
          this.snackbarVisible = false;
        }, 3000); // 3초 후에 스낵바 숨기기
      },
      goBack() {
        this.$router.go(-1);
      },
      async getUserData() {
        try {
          const response = await axios.get("http://127.0.0.1:8000/api/user", {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          });
  
          this.name = response.data.name;
          this.email = response.data.email;
          this.phone = response.data.phone;
          this.photoUrl = response.data.photo_path
            ? `http://127.0.0.1:8000/storage/${response.data.photo_path.replace(/\\/g, "/")}`
            : this.photoUrl;
        } catch (error) {
          console.error("사용자 정보 가져오기 중 오류 발생:", error);
        }
      },
      formatPhoneNumber(event) {
        let value = event.target.value;
  
        // 숫자만 추출
        const digits = value.replace(/\D/g, '');
  
        let formattedValue = '';
  
        // 하이픈을 포함한 포맷 적용
        if (digits.length <= 3) {
          formattedValue = digits;
        } else if (digits.length <= 6) {
          formattedValue = `${digits.slice(0, 3)}-${digits.slice(3)}`;
        } else {
          formattedValue = `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 11)}`;
        }
  
        // 포맷팅된 값으로 업데이트
        this.phone = formattedValue;
      }
    },
  };
  </script>
  
  <style scoped>
  .snackbar {
    visibility: visible;
    min-width: 250px;
    margin-left: -125px;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 2px;
    position: fixed;
    z-index: 1;
    bottom: 30px;
    left: 50%;
    font-size: 17px;
    white-space: nowrap;
    padding: 16px;
    transform: translateX(-50%);
  }
  </style>
  