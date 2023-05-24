<template>
         <!-- <router-link to="/about" class="nav">About</router-link> -->
            <!-- <router-link to="/users/1" class="users__nav">User 1   </router-link> //1 это динамический параметр -->
            <!-- <router-link to="/champion" class="users__nav">User 1   </router-link>-->
            <!-- <router-link :to="{name: 'users', params: {id: 1}}" class="nav">User 1</router-link> -->
            <!-- <router-link to="/users/2" class="users__nav">User 2</router-link> -->
            <!-- <router-link :to="{name: 'users', params: {id: 2}}" class="nav">User 2</router-link> -->
            <!-- <div @click="goToUsers(3)" class="nav">User 3</div> -->
        <!-- <h1 v-my-dir>{{ welcome_str }}</h1> -->
        <!-- <input v-my-focus type="text" v-model="welcome_str" style="width: 100%; max-width:90% !important"> -->
        <!-- <input v-my-focus v-my-value="2" type="text"> -->
</template>
<script>
</script>
<style>
.confirmationwrap {
    flex-direction: row;
    justify-content: center;
    width: 100vw;
    height: 422px;
}
.conf{
    flex-direction: column;
    background-color: rgb(255, 228, 233);
    width: 500px;
    height: 422px;
    border-top: 2px solid rgb(216, 112, 112);
}
.conftext{
    width: 500px;
    height: 60px;
    font-family: "Trirong", sans-serif;
    font-size: 30px;
    margin-left: 20px;
    color: rgb(216, 112, 112);
}
.confhead{
    flex-direction: column;
}
.ord{
    flex-direction: row;
    justify-content: center;
    font-family: "Trirong", sans-serif;
    color: rgb(216, 112, 112);

}
.ordstst{
    background-color: rgb(228, 119, 119);
    color: rgb(255, 213, 248);
    width: 200px;
    height: 30px;
    font-family: "Trirong", sans-serif;
    border: none;
}
.orderwrap{
    flex-direction: column;
    height: 300px;
    margin-left: 25px;
}
.ordertext{
    height: 40px;
    font-size: 20px;
}
.ordrow{
    background-color: rgb(255, 228, 233);
    flex-direction: row;
    height: 60px;
    color: rgb(228, 119, 119);
    border-top: 2px solid rgb(216, 112, 112);
}
.ord1 {
    width: 80%;
    margin-top: 5px;
}
.ord2 {
    width: 20%;
    margin-top: 5px;
}
.prodord{
    flex-direction: row;
}
.ordimg{
    width: 20%;
    height: 60px;
    margin-top: -5px;
}
.orddescription{
    width: 80%;
}
</style>