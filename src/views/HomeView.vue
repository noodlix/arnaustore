<template lang="">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide|Sofia|Trirong">
    <div class="container">
        <div class="wrapper">
            <base-header/>
            <categories @sendCategory="changeCategory"/>
            <div class="goprofile df">
                <router-link to="/profile"><button class="btn">My Profile</button></router-link>
            </div>
            <div class="hmain df">
                <products-gallery/>
                <search-sort-bar @sendSearch="changeSearch" @sendSort="changeSort"/>
                <all-products :cat="current_category" :sea="current_search" :sor="current_sort"/>
            </div>
        </div>
    </div> 
</template> 
<script>
import ProductsGallery from '@/components/ProductsGallery'
import AllProducts from '@/components/AllProducts.vue'
import BaseHeader from '@/components/BaseHeader.vue'
import SearchSortBar from '@/components/SearchSortBar.vue'
import Categories from '@/components/Categories.vue'
export default {
    data() {
        return {
            current_category: {
                category: String
            },
            current_search: {
                category: String
            },
            current_sort: {
                category: String
            },
            user: this.$store.getters.getUser,
        }
    },
    // mounted() {
    //     document.title = this.$route.meta.pageTitle
    //     console.log(this.$route)

    //     this.$store.commit('setUserLoggedIn') //обращаемся к мутаторам
    //     this.$store.commit('setUserLoggedIn', 'Hello I am from HomeView') //передаем чето мутаторам

    //     console.log(this.$store)
    //     console.log(this.$store.getters.isUserLoggedIn)
    //     console.log(this.$store.state.isLoggedIn)
    // },
    components: {
        ProductsGallery,
        AllProducts,
        BaseHeader,
        SearchSortBar,
        Categories
    },
    methods: { 
        changeCategory(_category) {
            this.current_category = _category
        },
        changeSearch(_search) {
            this.current_search = _search
        },
        changeSort(_sort){
            this.current_sort = _sort
        }
    }
}
</script>
<style>
.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: rgb(253, 246, 235);
}
.wrapper {
    width: 100vw;
    height: 200vh;
    overflow: hidden;
    /* zoom: 0.98; */
}
.df {
    display: flex;
}
.goprofile {
    width: 100vw;
    height: 30px;
    flex-direction: row;
    justify-content: end;
    margin-top: 15px;
}
.btn {
    background-color: rgb(253, 246, 235);
    border: none;
    text-decoration: underline rgb(216, 112, 112);
    color: rgb(216, 112, 112);
    font-size: 25px;
    font-family: "Trirong", serif;
}
.hmain {
    flex-direction: column;
    gap: 50px
}
</style>