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
          <div class="flex-col items-center px-24 pt-[53px] w-full h-[3000px]">
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
            <div class="flex w-full h-[1400px] pt-8 bg-gray-100 gap-[68px]">
              <div class="message-left w-[55%]">
                <h1 class="mb-4 text-[20px] font-semibold">수신번호</h1>
                <div class="message-number gap-2">
                  <input class="w-[80%] outline-none" type="number" placeholder="휴대번호 (숫자만 입력)">
                  <button class="w-[20%]" type="submit">
                   <img src="/public/images/icon2/icon_plus.svg" alt="plus" />
                    <h3 class="mt-[2px]">추가</h3>
                  </button>
                </input>
                </div>
                <div class="message-text">
                  <textarea class="w-full h-[80%]"
                   placeholder="번호를 입력하거나 후 엔터 혹은 추가하기를 클릭해 주세요.
최대 1만 건까지 붙여넣기 가능합니다.">
</textarea>
<div class="flex justify-between px-5">
  <span> 총 <span :style="{ color: '#5E2BFF' }">0</span> 명</span>
  <button class="border-b border-gray-600 h-[21px]">모두 삭제</button>
</div>
                </div>
                <div class="mt-[14px] w-full h-[61px] flex gap-2">
                  <div class="message-option">
                    <img src="/public/images/icon2/icon_person.svg" alt="icon" />
                    <h2 class="mt-[2px]">
                    주소록 불러오기
                  </h2></div>
                  <div class="message-option">
                    <img src="/public/images/icon2/icon_page.svg" alt="icon" />
                    <h2 class="mt-[3px]">
                    파일 불러오기
                  </h2>
                  </div>
                  <div class="message-option">
                    <img src="/public/images/icon2/icon_clock.svg" alt="icon" />
                    <h2 >
                    최근 전송 내역
                  </h2 class="mt-[5px]">
                  </div>
                </div>
                <div class="mt-8 pt-8 border-t border-gray-600">
                  <h2 class="mb-4 text-[20px] font-semibold">발신번호</h2>
                  <div>
                    <select class="select-input w-full h-[61px] p-[20px] bg-[#F4F5F6] appearance-none">
                      <option value="" disabled selected hidden>전송할 발신번호 선택</option>
                      <option value="1">010-1234-5678</option>
                      <option value="2">010-1111-2222</option>
                      <option value="3">010-3333-4444</option>
                    </select>
                  </div>
                </div>
                <div class="mt-8 pt-8 border-t border-gray-600">
                  <h2 class="mb-4 text-[20px] font-semibold">메세지 입력</h2>
                  <div class="w-full h-[783px] rounded-lg bg-slate-500 p-6">
                    <input class="w-full" placeholder="제목을 입력해주세요. (단문 SMS는 제외, 최대 30byte)"

                  </div>
                </div>
              </div>
              <div class="message-right">
                <img src="/public/images/icon2/icon_arrow.svg"
              </div>
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
  height: 1500px;
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

.message-left {
display: flex;
flex-direction: column;
}


.message-number {
width: 562px;
height: 61px;
display: flex;
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
-webkit-appearance: none;
margin: 0;
}
}

.message-number input {
  height: 61px;
  border-radius: 8px;
  background-color: #F4F5F6;
  padding:20px;
}

.message-number button {
  display: flex;
  align-items: center;
  padding: 17px;
  height: 61px;
  background: #4F44F0;
  border-radius: 8px;
  font-size: 20px;
  color: white;
}

.message-text {
  height: 238px;
  background: white;
  border-radius: 8px;
  border: 1px solid #cecece;
  margin-top: 14px;
  
}

.message-text textarea {
  padding: 20px;
  resize: none;
  border-radius: 8px;
  user-select: none;
  outline: none;
}

.message-option {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 182px;
  height: 61px;
  background: #fff;
  border : 1px solid #cecece;
  border-radius: 8px;
}

.select-input {
  background-image: url("/public/images/icon2/icon_arrow.svg");
  background-repeat: no-repeat;
  background-position: right 0.7rem top 50%;
  background-size: 2rem auto;
}

.message-right {
  position: sticky;
  top: 80px;
  width: 401px;
  height: 775px;
  background: #EAF8FF;
  border-radius: 22px;
  border: 5px solid #4d4d4d;
  padding-left: 15px;
  padding-top: 20px;
  
}

.message-right img {
  width: 40px;
  transform: rotate(90deg)
}
</style>
