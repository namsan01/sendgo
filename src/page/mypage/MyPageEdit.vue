<template>
  <div class="w-full min-h-screen bg-gray-100 flex-col items-center px-4 py-10">
    <div class="w-full max-w-[1280px] bg-white p-8 rounded-2xl">
      <h2 class="text-3xl font-bold mb-10 text-center">마이 페이지</h2>
      <div
        class="flex h-[700px] rounded-2xl justify-between gap-10 md:gap-10 md:justify-center md:items-center md:flex-col md:h-auto"
      >
        <div
          class="w-1/3 bg-gray-200 h-full rounded-2xl p-6 flex flex-col items-center justify-between md:justify-center"
        >
          <h3 class="text-xl font-semibold mb-4 md:hidden">프로필 사진</h3>
          <img
            :src="
              photoUrl ||
              'https://static.toss.im/illusts/img-profile-default-alt.png'
            "
            class="w-full cursor-pointer"
            alt="Profile Photo"
            @click="triggerFileInput"
          />
          <div class="w-full flex flex-col items-center">
            <input
              type="file"
              ref="fileInput"
              id="photo-upload"
              class="hidden"
              @change="handleFileChange"
            />
            <label
              for="photo-upload"
              class="bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-600 md:hidden"
            >
              사진 업로드
            </label>
          </div>
        </div>
        <h2 class="text-lg hidden md:block">
          클릭시 <span class="text-blue-500">프로필 변경</span>이 가능합니다
        </h2>
        <!-- 오른쪽: 사용자 정보 수정 폼 섹션 -->
        <div
          class="w-2/3 bg-slate-100 h-full rounded-2xl p-6 flex-col justify-between md:w-full"
        >
          <form @submit.prevent="handleSubmit">
            <div class="grid grid-cols-1 gap-6">
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-700"
                  >이름</label
                >
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
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                  >이메일</label
                >
                <input
                  readonly
                  type="email"
                  id="email"
                  v-model="email"
                  class="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="example@example.com"
                  required
                />
              </div>
              <div>
                <label
                  for="phone"
                  class="block text-sm font-medium text-gray-700"
                  >전화번호</label
                >
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
                <label
                  for="password"
                  class="block text-sm font-medium text-gray-700"
                  >현재 비밀번호</label
                >
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
                <label
                  for="new-password"
                  class="block text-sm font-medium text-gray-700"
                  >새 비밀번호</label
                >
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
                <label
                  for="password_confirmation"
                  class="block text-sm font-medium text-gray-700"
                  >비밀번호 확인</label
                >
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
          <div v-if="snackbarVisible" class="snackbar">
            {{ snackbarMessage }}
          </div>
        </div>
      </div>
      <div class="pt-14">
        <button
          @click="deleteAccount"
          type="button"
          class="w-20 bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          계정 삭제
        </button>
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
      photoUrl: "https://static.toss.im/illusts/img-profile-default-alt.png",
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
    async handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();

        reader.onload = (e) => {
          this.photoUrl = e.target.result;
        };

        reader.readAsDataURL(file);

        const formData = new FormData();
        formData.append("photo", file);

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

          this.photoUrl = response.data.photo_path
            ? `http://127.0.0.1:8000/storage/${response.data.photo_path.replace(
                /\\/g,
                "/"
              )}`
            : this.photoUrl;
        } catch (error) {
          console.error("사진 업로드 중 오류 발생:", error);
        }
      }
    },
    async handleSubmit() {
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
          if (error.response.data.errors.current_password) {
            this.showSnackbar("비밀번호가 틀렸습니다.");
          } else if (error.response.data.errors.new_password) {
            this.showSnackbar(
              error.response.data.errors.new_password.join("\n")
            );
          } else {
            this.showSnackbar("정보 업데이트 중 오류 발생.");
          }
        } else {
          this.showSnackbar("정보 업데이트 중 오류 발생.");
        }
      }
    },
    async deleteAccount() {
      const confirmation = confirm("정말로 계정을 삭제하시겠습니까?");
      if (confirmation) {
        try {
          await axios.delete("http://127.0.0.1:8000/api/user/delete", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          });

          this.showSnackbar("계정이 성공적으로 삭제되었습니다.");
          setTimeout(() => {
            localStorage.removeItem("access_token");
            window.location.href = '/login';
          }, 2000);
        } catch (error) {
          console.error("계정 삭제 중 오류 발생:", error);
          this.showSnackbar("계정 삭제 중 오류가 발생했습니다.");
        }
      }
    },
    showSnackbar(message) {
      this.snackbarMessage = message;
      this.snackbarVisible = true;
      setTimeout(() => {
        this.snackbarVisible = false;
      }, 3000);
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
          ? `http://127.0.0.1:8000/storage/${response.data.photo_path.replace(
              /\\/g,
              "/"
            )}`
          : this.photoUrl;
      } catch (error) {
        console.error("사용자 정보 가져오기 중 오류 발생:", error);
      }
    },
    formatPhoneNumber(event) {
      let phoneNumber = event.target.value.replace(/[^0-9]/g, "");

      const maxLength = 11;
      if (phoneNumber.length > maxLength) {
        phoneNumber = phoneNumber.slice(0, maxLength);
      }
      if (phoneNumber.length <= 3) {
        phoneNumber = phoneNumber;
      } else if (phoneNumber.length <= 7) {
        phoneNumber = phoneNumber.replace(/([0-9]{3})([0-9]{1,4})/, "$1-$2");
      } else {
        phoneNumber = phoneNumber.replace(
          /([0-9]{3})([0-9]{4})([0-9]{1,4})/,
          "$1-$2-$3"
        );
      }

      this.phone = phoneNumber;
    },
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
