<template>
  <div>
    <div class="h-[2000px] bg-slate-500">
      <div class="sub-header w-full bg-white">
        <div class="flex justify-end w-[1223px] gap-2">
          <router-link to="">메세지 전송</router-link>
          <router-link to="">발신번호 관리</router-link>
          <router-link to="">주소록 관리</router-link>
          <router-link to="">발송 결과</router-link>
        </div>
      </div>
      <div class="w-full flex-center">
        <div class="content-wrap">
          <div class="flex-col items-center px-24 pt-[53px] w-full h-[1000px]">
            <h2 class="text-3xl font-bold mb-9">메세지 전송</h2>
            <div className="radioButtonStyle">
              <label className="radioStyle">
                <input type="radio" checked name="radio" />
                <span>문자 메세지</span>
              </label>

              <label className="radioStyle">
                <input type="radio" name="radio" />
                <span>알림톡 (카카오)</span>
              </label>

              <label className="radioStyle">
                <input type="radio" name="radio" />
                <span>친구톡 (카카오)</span>
              </label>
            </div>
            <div class="text1">
              <h2>
                · 간편하게 한 화면에서 단문, 장문 포토메세지를 발송할 수
                있습니다.
              </h2>
              <h2>
                · 90byte 초과 시 장문문자로 자동 전환되며, 최대 2,000byte까지
                작성이 가능합니다.
              </h2>
            </div>
          </div>
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

.radioButtonStyle {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 16px;
}

.radioStyle {
  font-size: 20px;
  border-radius: 8px;
}

.radioStyle [type="radio"] {
  display: none;
}

.radioStyle span {
  text-align: center;
  width: 333px;
  height: 63px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 8px;
  background: #f5f6fa;
}

.radioStyle [type="radio"]:checked + span {
  color: #ffffff;
  background: #4f44f0;
}

.text1 {
  width: 100%;
  text-align: left;
  margin-top: 32px;
  font-size: 14px;
  color: #525252;
  padding-bottom: 32px;
  border-bottom: 1px solid #707070;
}
</style>
