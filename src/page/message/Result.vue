<template>
    <div>
        <messageLink/>
    </div>
</template>

<script>
import messageLink from "@/components/message/MessageLink.vue";

    export default {
        name:"Result",
        components: {
    messageLink: messageLink,
  },
    }
    
</script>

<style scoped>

</style>