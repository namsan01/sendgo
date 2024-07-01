<template>
  <div>
    <div class="h-[2000px] bg-slate-500">
      <div class="sub-header w-full bg-slate-600">
        <div class="flex justify-end w-[1223px] gap-2">
            <router-link to="">메세지 전송</router-link>
            <router-link to="">발신번호 관리</router-link>
            <router-link to="">주소록 관리</router-link>
            <router-link to="">발송 결과</router-link>
        </div>
      </div>
      <div class="w-full flex-center">
        <div class="content-wrap">
            <div class="px-14 w-full bg-black h-[500px]"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
};
</script>

<style scoped>
.sub-header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  gap: 8px;
}

.sub-header a {
  text-align: center;
  align-content: center;
  width: 155px;
  height: 56px;
  background: #e1e7fd;
  border-radius: 13px;
  color: #555555;
}

.content-wrap {
  width: 1223px;
  height: 1000px;
  background: white;
  margin-top: 56px;
  border-radius: 24px;
}
</style>
