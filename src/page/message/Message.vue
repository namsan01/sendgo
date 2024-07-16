<template>
  <div>
    <div class="h-[2400px] md:h-[3000px]">
      <messageLink/>
      <div class="w-full h-full flex-center bg-[#F2F4F8]">
        <div class="w-[1223px] h-[1500px] bg-white mt-14 rounded-3xl base:w-[960px] lg:w-[760px] md:w-4/5">
          <div
            class="flex-col items-center px-24 pt-[53px] w-full bg-white rounded-3xl md:px-2 h-auto"
          >
            <h2 class="text-3xl font-bold mb-9">메세지 전송</h2>
            <threeRadio />
            <div class="w-full text-left mt-8 text-[14px] text-[#525252] pb-8 border-b border-[#707070]">
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
              <div class="message-left flex-col w-[55%] md:w-[100%]">
                <div>
                  <h1 class="mb-4 text-[20px] font-semibold md:text-center">
                    수신번호
                  </h1>
                  <div class="flex w-[562px] h-[61px] gap-2 md:justify-center md:w-full">
        <input
          class="w-[80%] h-[61px] rounded-lg bg-[#f4f5f6] p-5 outline-none base:w-[54%] lg:w-[34%] text-sm md:w-[70%]"
          type="tel"
          placeholder="휴대번호 (숫자만 입력)"
          v-model="number"
          maxlength="13"
          @input="formatPhoneNumber"
          @keydown.enter="addnumber"
        />
        <button class="h-[61px] flex items-center p-[17px] bg-[#4f44f0] rounded-lg text-xl text-white w-[20%] md:w-[30%] justify-center" @click="addnumber">
          <img src="/images/icon2/icon_plus.svg" alt="plus" />
          <h3 class="mt-[2px] mr-2 lg:text-lg lg:mt-[3px] md:hidden md:mr-0">추가</h3>
        </button>
      </div>
<div class="h-[238px] bg-white rounded-lg border border-[#cecece] mt-[14px]">
  <textarea
  class="w-full h-[80%] placeholder-gray-500 lg:text-sm p-5 resize-none rounded-lg outline-none select-none"
  placeholder="번호를 입력하거나 후 엔터 혹은 추가하기를 클릭해 주세요.
최대 1만 건까지 붙여넣기 가능합니다."
  readonly
  v-if="formattedNumbers.length === 0"
>{{ formattedNumbers }}</textarea>
<textarea
class="w-full h-[80%] placeholder-gray-500 lg:text-sm p-5 resize-none rounded-lg outline-none select-none"
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
                    <div class="cursor-pointer flex-center items-center w-[182px] h-[61px] bg-white border border-[#cecece] rounded-lg base:text-[14px] lg:text-[10px]">
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
                    <div class="cursor-pointer flex-center items-center w-[182px] h-[61px] bg-white border border-[#cecece] rounded-lg base:text-[14px] lg:text-[10px]">
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
                    <div class="cursor-pointer flex-center items-center w-[182px] h-[61px] bg-white border border-[#cecece] rounded-lg base:text-[14px] lg:text-[10px]">
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
                      class="w-full h-[61px] placeholder-gray-500 rounded-lg p-5 lg:text-[12px] "
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
                    <div class="h-[238px] bg-white rounded-lg border border-[#cecece] mt-[14px]">
                      <textarea
                      class="w-full h-[70%] placeholder-gray-500 lg:text-sm p-5 resize-none rounded-lg outline-none select-none"
                        
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
  <div class="w-full h-[100px] flex items-center gap-2">
  <label class=" relative cursor-pointer w-auto">
    <input type="file" style="display:none" ref="fileInput" multiple @change="handleFileUpload">
    <img src="/images/icon2/icon_plus_bt.svg" alt="bt" class="w-[100p] h-[100px] base:w-[55px] base:h-[55px] md:w-[75px] md:h-[75px] sm:w-[50px] sm:h-[50px]"/>
  </label>
  <div v-if="images.length" class="flex flex-wrap gap-[10px]">
    <div v-for="(image, index) in images" :key="index" class="relative w-[100px] h-[100px] border-2 border-[#CECECE] rounded-lg overflow-hidden base:w-[55px] base:h-[55px] md:w-[75px] md:h-[75px] sm:w-[50px] sm:h-[50px]" >
      <img class="w-full h-full object-cover" :src="image.url" :alt="'Image ' + (index + 1)" />
      <button class="absolute top-[5px] right-[5px] text-black border-1 border-[#d9d9d9] rounded-[3px] cursor-pointer md:top-0 md:right-[8px] " @click="removeImage(index)">X</button>
    </div>
  </div>
</div>
  <div class="text-sm" :style="{ color: '#797979' }">
    <h2>· 이미지는 최대 3장까지 첨부 가능합니다.</h2>
    <h2>· 이미지 파일 형식은 JPG, PNG, GIF만 가능합니다.</h2>
  </div>
</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="hidden md:block text-center py-6 text-xl font-semibold">
                <h2 >미리 보기</h2>
              </div>
              <div class="message-right sticky top-[70px] w-[401px] h-[775px] flex-col flex-wrap bg-[#eaf8ff] rounded-[22px] border-[5px] border-[#4d4d4d] pt-5 pr-4 pb-0 pl-4 base:pl-[10px] base:pt-[15px] base:h-[480px] lg:h-[360px] md:w-4/5 md:h-auto md:min-h-[360px] p-5 md:self-center">
                <img class="w-10 transform rotate-90 lg:w-[25px] md:hidden" src="/images/icon2/icon_arrow.svg" alt="arrow" />
                <div class="w-full flex-col flex-wrap p-4 gap-6">
                  <h1 class="text-3xl">{{ messageTitle }}</h1>
                  <span class="text-xl">{{ messageContent }} </span>
                </div>
            </div>
            </div>
            <div
              class="w-full h-[172px] mt-[34px] py-8 border-y border-gray-700 md:py-6"
            >
              <h2 class="mb-4 text-[20px] font-semibold md:text-center">
                발송 설정
              </h2>
              <div class="flex gap-[15px] md:justify-center">
                <input type="hidden" v-model="buttonValue">
                <button
                @click="toggleButton('button1')" :class="{ 'active-button': buttonValue === 'button1' }"
                class="flex-center items-center w-[274px] h-[66px] text-[#747B84] bg-[#F2F5F9] rounded-lg p-5 lg:w-1/2 md:w-2/5 transition-colors duration-300"
                >
                <img :src="buttonValue === 'button1' ? '/images/icon2/icon_check_color.svg' : '/images/icon2/icon_check_gray.svg'" alt="check" class="md:hidden"/>
                  <h2 class="text-xl mt-[2px] mr-3 md:text-sm sm:text-[12px] md:m-0">
                    즉시 발송
                  </h2>
                </button>
                <button
                @click="toggleButton('button2')" :class="{ 'active-button': buttonValue === 'button2' }"
                  class="flex-center items-center w-[274px] h-[66px] text-[#747B84] bg-[#F2F5F9] rounded-lg p-5 lg:w-1/2 md:w-2/5 transition-colors duration-300"
                >
                <img :src="buttonValue === 'button2' ? '/images/icon2/icon_check_color.svg' : '/images/icon2/icon_check_gray.svg'" alt="check" class="md:hidden" />
                  <h2 class="text-xl mt-[2px] mr-3 md:text-sm sm:text-[12px] md:m-0">
                    예약 발송
                  </h2>
                </button>
              </div>
            </div>
              <button 
              class="flex-center items-center mt-10 w-full h-[66px] bg-[#4F44F0] rounded-lg text-white text-[20px] mb-[72px] md:w-4/5"
              @click="sendMessage"
              >발송하기</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import threeRadio from "@/components/message/ThreeRadio.vue";
import toggleInput from "@/components/message/ToggleInput.vue";
import messageLink from "@/components/message/MessageLink.vue";


export default {
  name: "Message",
  components: {
    threeRadio: threeRadio,
    toggleInput: toggleInput,
    messageLink: messageLink,
  },
  data() {
    return {
      messageTitle: "",
      messageContent: "",
      number : "",
      numbers: [],
      images: [], 
      buttonValue: 'button1',
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
        this.number = "";
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
        if (!file.type.match(/image\/(jpeg|png|gif)/)) {
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
    
    toggleButton(value) {
      this.buttonValue = value;
    },
    sendMessage() {
      const confirmed = confirm("보내시겠습니까?");
  if (confirmed) {
    alert("메시지를 발송했습니다.");
  } else {
    alert("발송이 취소되었습니다.");
  }
    },
  },
  watch: {
    images(newValue) {
      if (newValue.length > 3) {
        alert('이미지는 최대 3개까지만 추가할 수 있습니다.');
        this.images.pop(); 
      }
    }
  }
};

</script>

<style scoped>

.select-input {
  background-image: url("/images/icon2/icon_arrow.svg");
  background-repeat: no-repeat;
  background-position: right 0.7rem top 50%;
  background-size: 2rem auto;
  cursor: pointer;
}

.active-button {
  background: white;
  color: #4F44F0;
  border: 2px solid #4f44f0;
}


</style>
