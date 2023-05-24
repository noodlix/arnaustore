<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide|Sofia|Trirong">
    <nav>
        <router-link to="/home" class="header__nav">Home page</router-link>
        <router-link to="/about" class="about__nav">About</router-link>
    </nav>
    <h1>Welcome to about screen</h1>
    <div v-if="can()">super secret div</div>
</template>

<script>
import CanViewExtraInfoBlock from '@/mixins/CanViewExtraInfoBlock';

export default {
mounted() {
    document.title = this.$route.meta.pageTitle
},
mixins: [
    CanViewExtraInfoBlock
]
}
</script>

<style scoped></style>