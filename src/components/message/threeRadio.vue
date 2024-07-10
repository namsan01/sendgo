<template>
            <div class="radioButtonStyle">
              <label class="radioStyle">
                <input type="radio" checked name="radio" />
                <span>문자 메세지</span>
              </label>
              <label class="radioStyle">
                <input type="radio" name="radio" />
                <span>알림톡 (카카오)</span>
              </label>
              <label class="radioStyle">
                <input type="radio" name="radio" />
                <span>친구톡 (카카오)</span>
              </label>
            </div>
</template>

<script>
    export default {
        name:"threeRadio"
    }
</script>

<style scoped>
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
  cursor: pointer;
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

@media (max-width: 1280px) {
  .radioStyle span {
  width: 245px;
  height: 52px;
}
}

@media (max-width: 1024px) {
  .radioStyle span {
  width: 179px;
  height: 48px;
}
}

@media (max-width: 768px) {
  .radioStyle span {
  width: 96px;
  height: 48px;
  font-size: 14px;
}
}

@media (max-width: 425px) {
  .radioStyle span {
  width: 82px;
  height: 48px;
  font-size: 12px;
}
}

</style>