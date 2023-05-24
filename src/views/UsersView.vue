<template>
    <!-- <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide|Sofia|Trirong"> -->
    <!-- <nav>
        <router-link to="/" class="header__nav">Home page</router-link>
        <router-link to="/about" class="about__nav">About</router-link>
        <router-link to="/users/1" class="users">user 1</router-link>
        <router-link to="/users/2" class="users">user 2</router-link>

    </nav>
    <h1>Welcome to Users screen</h1>
    <h3>Welcome {{ user.fname || "noname" }}</h3>

    <div>user id:{{ id }}</div>
    <div>user {{ id == 1 ? 'champion' : id }}</div>

    <div v-if="id == 1 && can()">
        welcome oneeeeeeeeeeeeeeeee champ
    </div>


    <div v-if="can()">
        <div>view secret for users</div>
    </div> -->
</template>


<script>

// import CanViewExtraInfoBlock from '@/mixins/CanViewExtraInfoBlock'
// export default {
//     data() {
//         return {
//             // id: this.$route.params.id
//             id: 0,
//             user: {
//                 id: 0,
//             }
//         }
//     },
//     mixins: [
//         CanViewExtraInfoBlock
//     ],
//     mounted() {
//         if (this.$route.params?.id) this.id = this.$route.params.id
//         // чтою\бы когда у нас плохой интернет не грузит айди у нас юзер не грузился а грузился 0 чтобы не было ошибок
//         document.title = this.$route.meta.pageTitle

//         console.log(parseInt(window.location.pathname.split('/')[2]))
//     },
//     watch: {
//         $route(to, from) {
//             if (to.params?.id != from.params?.id) {
//                 this.id = to.params.id;
//                 // решает эту проблему
//                 //между юзерами переключение не меняется поменяется только если идем в хоум потом в юзер
//                 //потомучто мы все еще на странице юзерс
//                 //в джм не исходит новый запрос соответственно нету нового ответа
//                 //в джс имитируется запрос но как такогого переходане пересходит нету изменения компонента
//             }
//         }
//     }
// }
</script>

<style scoped></style>