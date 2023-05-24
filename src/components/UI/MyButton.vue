<template lang="">
    <button><slot>name="header"</slot></button>
</template>
<script>
export default {
    name: 'my-button',    
}
</script>

<style scoped>
    button {
        background-color: #eee;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        padding: 12px 18px;
        color: #333;
    }
    button:hover{
        background-color: #e8e8e8
    }
    button:active{
        background-color: #a8a8a8
    }
</style>