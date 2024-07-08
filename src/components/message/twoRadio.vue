<template>
    <div class="radioButtonStyle">
      <label class="radioStyle">
        <input type="radio" checked name="radio" />
        <img src="/images/icon2/icon_check_color.svg" alt="check" />
<h2 class="text-xl mt-[2px] mr-3">즉시 발송</h2>
      </label>
      <label class="radioStyle">
        <input type="radio" name="radio" />
        <img src="/images/icon2/icon_check_gray.svg" alt="check" />
<h2 class="text-xl mt-[2px] mr-3">예약 발송</h2>
      </label>
    </div>
</template>

<script>
export default {
name:"twoRadio"
}
</script>

<style scoped>
.radioButtonStyle {
width: 100%;
display: flex;
justify-content: center;
flex-direction: row;
gap: 15px;
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
width: 274px;
height: 66px;
display: flex;
align-items: center;
justify-content: center;
box-sizing: border-box;
border-radius: 8px;
background: #F2F5F9;
}

.radioStyle [type="radio"]:checked + span {
color: #4f44f0;
background: #fff;
border: 2px solid #4f44f0
}
</style>