<template>
  <div class="w-full flex justify-center flex-row gap-4">
    <label class="radioStyle text-xl rounded-lg">
      <input type="radio" checked name="radio" class="hidden" />
      <span class="radioSpan transition-colors duration-300 cursor-pointer w-[323px] h-[63px] flex-center items-center box-border rounded-lg bg-[#f5f6fa] base:w-[245px] base:h-[52px] lg:w-[179px] lg:h-[48px] md:w-[96px] md:h-[48px] md:text-[14px] sm:w-[82px] sm:h-[48px] sm:text-[12px]">문자 메세지</span>
    </label>
    <label class="radioStyle text-xl rounded-lg">
      <input type="radio" name="radio" class="hidden" />
      <span class="radioSpan transition-colors duration-300 cursor-pointer w-[323px] h-[63px] flex-center items-center box-border rounded-lg bg-[#f5f6fa] base:w-[245px] base:h-[52px] lg:w-[179px] lg:h-[48px] md:w-[96px] md:h-[48px] md:text-[14px] sm:w-[82px] sm:h-[48px] sm:text-[12px]">알림톡 (카카오)</span>
    </label>
    <label class="radioStyle text-xl rounded-lg">
      <input type="radio" name="radio" class="hidden" />
      <span class="radioSpan transition-colors duration-300 cursor-pointer w-[323px] h-[63px] flex-center items-center box-border rounded-lg bg-[#f5f6fa] base:w-[245px] base:h-[52px] lg:w-[179px] lg:h-[48px] md:w-[96px] md:h-[48px] md:text-[14px] sm:w-[82px] sm:h-[48px] sm:text-[12px]">친구톡 (카카오)</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "threeRadio"
};
</script>

<style scoped>

.radioStyle [type="radio"]:checked + .radioSpan {
  color: #ffffff;
  background: #4f44f0;
}

</style>
