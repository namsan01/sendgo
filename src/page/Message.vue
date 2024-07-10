<template>
  <div>
    <div class="h-[2400px] md:h-[3000px]">
      <div class="sub-header w-full bg-white">
        <div
          class="flex justify-end w-[1223px] gap-2 base:w-[960px] lg:w-[760px] md:w-[420px] sm:w-[360px]"
        >
          <router-link
            to=""
            :style="{ background: '#e1e7fd', color: '#4F44F0' }"
            >메세지 전송</router-link
          >
          <router-link to="">발신번호 관리</router-link>
          <router-link to="">주소록 관리</router-link>
          <router-link to="">발송 결과</router-link>
        </div>
      </div>
      <div class="w-full h-full flex-center bg-[#F2F4F8]">
        <div class="content-wrap">
          <div
            class="flex-col items-center px-24 pt-[53px] w-full bg-white rounded-3xl md:px-2 h-auto"
          >
            <h2 class="text-3xl font-bold mb-9">메세지 전송</h2>
            <threeRadio />
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
            <div class="flex w-full pt-8 gap-[68px] md:flex-col md:gap-0">
              <div class="message-left w-[55%] md:w-[100%]">
                <div>
                  <h1 class="mb-4 text-[20px] font-semibold md:text-center">
                    수신번호
                  </h1>
                  <div class="message-number gap-2 md:justify-center">
        <input
          class="w-[80%] outline-none base:w-[54%] lg:w-[34%] text-sm md:w-[77%]"
          type="tel"
          placeholder="휴대번호 (숫자만 입력)"
          v-model="number"
          maxlength="13"
          @input="formatPhoneNumber"
        />
        <button class="w-[20%]" @click="addnumber">
          <img src="/images/icon2/icon_plus.svg" alt="plus" />
          <h3 class="mt-[2px] lg:text-lg lg:mt-[3px] md:hidden">추가</h3>
        </button>
      </div>
<div class="message-text">
  <textarea
  class="w-full h-[80%] placeholder-gray-500 lg:text-sm"
  placeholder="번호를 입력하거나 후 엔터 혹은 추가하기를 클릭해 주세요.
최대 1만 건까지 붙여넣기 가능합니다."
  readonly
  v-if="formattedNumbers.length === 0"
>{{ formattedNumbers }}</textarea>
<textarea
  class="w-full h-[80%] placeholder-gray-500 lg:text-sm"
  readonly
  v-else
>{{ formattedNumbers }}</textarea>
  <div class="flex justify-between px-5">
    <span>
      총
      <span :style="{ color: '#5E2BFF' }">{{ numbers.length }}</span>
      명
    </span>
    <button class="border-b border-gray-600 h-[21px]" @click="clearNumber">
      모두 삭제
    </button>
  </div>
</div>
                  <div
                    class="mt-[14px] w-full h-[61px] flex gap-2 justify-between"
                  >
                    <div class="message-option">
                      <img
                        src="/images/icon2/icon_person.svg"
                        alt="icon"
                        class="lg:hidden"
                      />
                      <h2
                        class="mt-[2px] mr-2 base:mt-[1px] lg:mt-0 lg:mr-0 text-sm sm:text-[0.7rem]"
                      >
                        주소록 불러오기
                      </h2>
                    </div>
                    <div class="message-option">
                      <img
                        src="/images/icon2/icon_page.svg"
                        alt="icon"
                        class="lg:hidden"
                      />
                      <h2
                        class="mt-[3px] mr-2 base:mt-[2px] lg:mt-0 lg:mr-0 text-sm sm:text-[0.7rem]"
                      >
                        파일 불러오기
                      </h2>
                    </div>
                    <div class="message-option">
                      <img
                        src="/images/icon2/icon_clock.svg"
                        alt="icon"
                        class="lg:hidden"
                      />
                      <h2
                        class="mt-[5px] mr-2 base:mt-[1px] lg:mt-0 lg:mr-0 text-sm sm:text-[0.7rem]"
                      >
                        최근 전송 내역
                      </h2>
                    </div>
                  </div>
                </div>
                <div class="mt-8 pt-8 border-t border-gray-600">
                  <h2 class="mb-4 text-[20px] font-semibold md:text-center">
                    발신번호
                  </h2>
                  <div>
                    <select
                      class="select-input w-full h-[61px] p-[20px] bg-[#F4F5F6] appearance-none lg:text-sm"
                    >
                      <option value="" disabled selected hidden>
                        전송할 발신번호 선택
                      </option>
                      <option value="1">010-1234-5678</option>
                      <option value="2">010-1111-2222</option>
                      <option value="3">010-3333-4444</option>
                    </select>
                  </div>
                </div>
                <div class="mt-8 pt-8 border-t border-gray-600">
                  <h2 class="mb-4 text-[20px] font-semibold md:text-center">
                    메세지 입력
                  </h2>
                  <div class="w-full h-[723px] rounded-lg bg-[#F6F6F6] p-6">
                    <input
                      class="w-full h-[61px] placeholder-gray-500 rounded-lg p-5 lg:text-[12px] lg:p-2"
                      :placeholder="messageType === '단문 SMS' ? '제목을 입력해주세요. (최대 30byte)' : '제목을 입력해주세요.'"
                      v-model="messageTitle"
                    />
                    <div class="w-full h-[35px] flex justify-between mt-[17px]">
                      <input
                        class="align-middle w-[101px] h-full bg-[#5E2BFF] text-center rounded-3xl placeholder-white"
                        :placeholder="messageType"
                        readonly
                      />
                      <div
                        class="w-auto h-full flex items-center justify-between gap-2"
                      >
                        <span>
                          <span :style="{ color: '#5E2BFF' }">{{
                            calculateBytes(messageContent)
                          }}</span>
                          / 90byte
                        </span>
                        <button>
                          <img
                            src="/images/icon2/icon_return.svg"
                            alt="arrow"
                            @click="clearMessage"
                          />
                        </button>
                      </div>
                    </div>
                    <div class="message-text">
                      <textarea
                        class="w-full h-[70%] placeholder-gray-500 lg:text-sm"
                        placeholder="내용을 입력해 주세요. 90byte 초과 시 장문 문자로,
이미지 추가 시 포토 문자로 자동 전환 됩니다."
                        v-model="messageContent"
                      ></textarea>
                      <div
                        class="flex justify-end px-[16.5px] pb-[20px] gap-3 mb-[25px]"
                      >
                        <button
                          class="w-[107px] h-[43px] bg-[#f5f5f5] rounded-2xl lg:w-[92] lg:h-[36px] text-sm"
                        >
                          치환코드
                        </button>
                        <button
                          class="w-[107px] h-[43px] bg-[#f5f5f5] rounded-2xl lg:w-[92] lg:h-[36px] text-sm"
                        >
                          템플릿
                        </button>
                        <button
                          class="w-[107px] h-[43px] bg-[#f5f5f5] rounded-2xl lg:w-[92] lg:h-[36px] text-sm"
                        >
                          문자도구
                        </button>
                      </div>
                      <div
                        class="flex justify-between items-center w-full h-[75px] border-y border-gray-600 sm:gap-2"
                      >
                        <h2
                          class="text-[15px] font-semibold lg:text-sm sm:text-[0.75rem]"
                        >
                          광고성 문자(080 수신거부번호 포함)
                        </h2>
                        <toggleInput />
                      </div>
                      <div class="w-full flex-col mt-4 gap-4">
  <h2 class="text-[15px] font-semibold">이미지 추가</h2>
  <label class="relative cursor-pointer w-auto">
    <input type="file" style="display:none" ref="fileInput" multiple @change="handleFileUpload">
    <img src="/images/icon2/icon_plus_bt.svg" alt="bt" class="lg:w-[75px] h-[75px] pr-6" :style="{ width: '100px' }"/>
  </label>
  <div class="text-sm" :style="{ color: '#797979' }">
    <h2>· 이미지는 최대 3장까지 첨부 가능합니다.</h2>
    <h2>· 이미지 파일 형식은 JPG, PNG, GIF만 가능합니다.</h2>
  </div>
  <div v-if="images.length" class="image-preview-container">
    <div v-for="(image, index) in images" :key="index" class="image-preview">
      <img :src="image.url" :alt="'Image ' + (index + 1)" />
      <button @click="removeImage(index)">삭제</button>
    </div>
  </div>
</div>
                    </div>
                  </div>
                </div>
              </div>
              <!--미리보기란 -->
              <!-- <div>
                <h2 class="hidden md:block text-center mt-12 text-2xl">미리 보기</h2>
              </div> -->
              <div class="message-right">
                <img src="/images/icon2/icon_arrow.svg" alt="arrow" />
                <div class="w-full flex-col flex-wrap p-4 gap-6">
                  <h1 class="text-3xl">{{ messageTitle }}</h1>
                  <span class="text-xl">{{ messageContent }} </span>
                </div>
              </div>
            </div>
            <div
              class="w-full h-[172px] mt-[34px] py-8 border-y border-gray-700"
            >
              <h2 class="mb-4 text-[20px] font-semibold sm:text-center">
                발송 설정
              </h2>
              <div class="flex gap-[15px]">
                <button
                  class="flex-center items-center w-[274px] h-[66px] text-[#4F44F0] bg-white border-2 rounded-lg border-[#4F44F0] p-5 lg:w-1/2"
                >
                  <img src="/images/icon2/icon_check_color.svg" alt="check" />
                  <h2 class="text-xl mt-[2px] mr-3 md:text-sm sm:text-[12px]">
                    즉시 발송
                  </h2>
                </button>
                <button
                  class="flex-center items-center w-[274px] h-[66px] text-[#747B84] bg-[#F2F5F9] rounded-lg p-5 lg:w-1/2"
                >
                  <img src="/images/icon2/icon_check_gray.svg" alt="check" />
                  <h2 class="text-xl mt-[2px] mr-3 md:text-sm sm:text-[12px]">
                    예약 발송
                  </h2>
                </button>
              </div>
            </div>
              <button 
              class="flex-center items-center mt-10 w-full h-[66px] bg-[#4F44F0] rounded-lg text-white text-[20px] mb-[72px]"
              >발송하기</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import threeRadio from "@/components/message/threeRadio.vue";
import twoRadio from "@/components/message/twoRadio.vue";
import toggleInput from "@/components/message/toggleInput.vue";

export default {
  name: "Message",
  components: {
    threeRadio: threeRadio,
    twoRadio: twoRadio,
    toggleInput: toggleInput,
  },
  data() {
    return {
      messageTitle: "",
      messageContent: "",
      number : "",
      numbers: [],
      images: [], 
    };
  },
  computed: {
  messageType() {
    const byteLength = this.calculateBytes(this.messageContent);
    return byteLength <= 90 ? "단문 SMS" : "장문 문자";
  },
  formattedNumbers() {
  
      return this.numbers.join(' , ');
    }
},
methods: {
    addnumber() {
      let phoneNumber = this.number.replace(/[^0-9]/g, "");
      if (phoneNumber.length < 9 || phoneNumber.length > 13) {
        alert("유효한 휴대폰 번호를 입력해주세요.");
        return;
      }

      if (this.numbers.includes(phoneNumber)) {
        alert("이미 추가된 번호입니다.");
        return;
      }

      this.numbers.push(phoneNumber);
      this.number = "";
    },
    clearNumber() {
      this.numbers = [];
    },
    clearMessage() {
      this.messageContent = "";
    },
    calculateBytes(str) {
      let totalBytes = 0;
      for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        if (charCode <= 0x7f) {
          totalBytes += 1;
        } else if (charCode <= 0x7ff) {
          totalBytes += 2;
        } else if (charCode <= 0xffff) {
          totalBytes += 3;
        } else {
          totalBytes += 4;
        }
      }
      return totalBytes;
    },
    formatPhoneNumber(event) {
      let phoneNumber = event.target.value.replace(/[^0-9]/g, "");
      if (phoneNumber.length > 3) {
        if (phoneNumber.length <= 7) {
          phoneNumber = phoneNumber.replace(
            /([0-9]{3})([0-9]{1,4})/,
            "$1-$2"
          );
        } else {
          phoneNumber = phoneNumber.replace(
            /([0-9]{3})([0-9]{4})([0-9]{4})/,
            "$1-$2-$3"
          );
        }
      }
      this.number = phoneNumber;
    },
    handleFileUpload(event) {
      const files = event.target.files;
      if (files.length + this.images.length > 3) {
        alert("이미지는 최대 3장까지 첨부 가능합니다.");
        return;
      }

      Array.from(files).forEach((file) => {
        if (!file.type.match("image.*")) {
          alert("이미지 파일 형식은 JPG, PNG, GIF만 가능합니다.");
          return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
          this.images.push({
            file: file,
            url: e.target.result,
          });
        };
        reader.readAsDataURL(file);
      });
    },
    removeImage(index) {
      this.images.splice(index, 1);
    },
  },
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
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.message-number input {
  height: 61px;
  border-radius: 8px;
  background-color: #f4f5f6;
  padding: 20px;
}

.message-number button {
  display: flex;
  align-items: center;
  padding: 17px;
  height: 61px;
  background: #4f44f0;
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
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 182px;
  height: 61px;
  background: #fff;
  border: 1px solid #cecece;
  border-radius: 8px;
} 

.select-input {
  background-image: url("/images/icon2/icon_arrow.svg");
  background-repeat: no-repeat;
  background-position: right 0.7rem top 50%;
  background-size: 2rem auto;
  cursor: pointer;
}

.message-right {
  position: sticky;
  position: -webkit-sticky;
  top: 80px;
  width: 401px;
  height: 775px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background: #eaf8ff;
  border-radius: 22px;
  border: 5px solid #4d4d4d;
  padding: 20px 15px 0 15px;
}

.message-right img {
  width: 40px;
  transform: rotate(90deg);
}

@media (max-width: 1280px) {
  .content-wrap {
    width: 960px;
  }
  .message-option {
    font-size: 14px;
  }

  .message-right {
    padding-left: 10px;
    padding-top: 15px;
    height: 480px;
  }
}

@media (max-width: 1024px) {
  .sub-header a {
    width: 116px;
  }

  .content-wrap {
    width: 760px;
  }
  .message-option {
    font-size: 10px;
  }

  .message-right {
    height: 360px;
  }

  .message-right img {
    width: 25px;
  }
}

@media (max-width: 768px) {
  .sub-header a {
    width: 116px;
    font-size: 14px;
  }

  .content-wrap {
    width: 80%;
  }
  .message-option {
    font-size: 10px;
  }

  .message-right {
    position: relative;
    width: 100%;
    height: 360px;
    margin-bottom: 7rem;
  }

  .message-right img {
    display: none;
  }

  .message-number {
    width: 100%;
  }
  .message-number button {
    width: 100%;
    justify-content: center;
  }
}

.image-preview-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.image-preview {
  position: relative;
  width: 75px;
  height: 75px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.image-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-preview button {
  position: absolute;
  top: 5px;
  right: 5px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>
