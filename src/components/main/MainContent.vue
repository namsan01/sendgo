<template>
<div class="img-wrap">
    <img :src="`/public/images/main/${url}.png`" :alt="url" />
  </div>
</template>

<script>
    export default {
        name:"MainContent",
        props:{
            url:String,
        }
    }
</script>

<style scoped>

.img-wrap {
width: 254px;
height: 443px;
background: #6250ff;
overflow: hidden;
}

</style>