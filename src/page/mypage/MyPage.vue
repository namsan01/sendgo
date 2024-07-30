<template>
    <div class="w-full min-h-screen bg-gray-100 flex-col items-center px-4 py-14">
        <div class="w-full max-w-[1280px] bg-white p-8 rounded-2xl">
            <h2 class="text-3xl font-bold mb-10 text-center">마이 페이지</h2>
            <div class="flex h-[700px] rounded-2xl justify-between gap-10">
                <!-- 왼쪽: 사진 업로드 섹션 -->
                <div class="w-1/3 bg-gray-200 h-full rounded-2xl p-6 flex flex-col items-center justify-center">
                    <h3 class="text-xl font-semibold mb-4">프로필 사진</h3>
                    <div class="w-full flex flex-col items-center">
                        <!-- 현재 사진 미리보기 -->

                        <!-- 파일 업로드 버튼 -->
                        <input type="file" id="photo-upload" class="mb-4">
                        <label for="photo-upload" class="bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-600">
                            사진 업로드
                        </label>
                    </div>
                </div>
                <!-- 오른쪽: 사용자 정보 수정 폼 섹션 -->
                <div class="w-2/3 bg-slate-100 h-full rounded-2xl p-6">
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
                                <label for="password" class="block text-sm font-medium text-gray-700">비밀번호</label>
                                <input
                                    type="password"
                                    id="password"
                                    v-model="password"
                                    class="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="비밀번호"
                                />
                            </div>
                            <div>
                                <label for="password_confirmation" class="block text-sm font-medium text-gray-700">회원가입일</label>
                                <input
                                    type="password"
                                    class="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="비밀번호 확인"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            class="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            정보 저장
                        </button>
                    </form>
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
            password: '',
            password_confirmation: '',
        };
    },
    methods: {
        handleSubmit() {
            console.log('정보를 저장합니다:', {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation,
            });
        }
    }
};
</script>

<style scoped>
/* 추가 스타일이 필요한 경우 여기에 작성하세요 */
</style>
