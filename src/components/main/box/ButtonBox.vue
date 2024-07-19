<template>

    <router-link :to="url"
    class="flex-center items-center w-[206px] h-[65px] bg-[#6250ff] rounded-[44px] text-white text-[25px] md:w-[162px] md:h-[50px] md:text-xl"
    >
      {{ text }}
    </router-link>
  
</template>

<script>
export default {
  name: "ButtonBox",
  props: {
    text: String,
    url : {
      type:String ,
    required:false
  }
  },
};
</script>

<style>
</style>
