<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide|Sofia|Trirong">
    <div class="container">
        <div class="wrapper">
            <base-header />
            <div class="userp df">
                <div><img class="pfp" src="https://wallpapers.com/images/featured/l8f1d19gsgqhvto8.jpg" alt=""></div>
                <div class="uname">hiii!! {{ user_fullname }}
                </div>
            </div>
            <div class="section df">
                <router-link to="/order">
                    <div class="orders options">
                        <!-- <router-link to="/orders">Your orders</router-link> -->
                        Your orders
                    </div>
                </router-link>
                <router-link to="/cart">
                    <div class="cart options">
                        Your cart
                    </div>
                </router-link>
                <div class="review options">
                    Finished orders
                </div>
            </div>
            <!-- <subcats @sendCategory="changeCategory" /> -->
            <!-- <subprods :cat="current_category" /> -->
        </div>
    </div>
</template>
<script>
import BaseHeader from '@/components/BaseHeader.vue'
import NavBar from '@/components/NavBar.vue';
import subcats from '@/components/subcats.vue'
import subprods from '@/components/subprods.vue'
export default {
    data() {
        return {
            current_category: {
                category: String,
                // default: 'rings',
            },
            user: this.$store.getters.getUser,
        }
    },
    computed: {
        user_fullname() {
            return this.user.fname + ' ' + this.user.lname
        },
    },
    methods: {
        changeCategory(_category) {
            this.current_category = _category            // 😍6
        }
    },
    components: {
        NavBar,
        BaseHeader,
        subcats,
        subprods,
    },
    // goToUsers(n) {
    //     this.clicks_counter += n
    //     if (this.clicks_counter > 30) {
    //         this.$router.push({ name: 'users', params: { id: 3 } })
    //     }
    //     console.log(this.clicks_counter)
    // }

}
</script>
<style>
body {
    zoom: 0.8;
}

.red {
    color: red
}

.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: rgb(253, 246, 235);
}

.wrapper {
    width: 100vw;
    height: 200vw;
    overflow: hidden;
    zoom: 0.98;
}

.df {
    display: flex;
}

.userp {
    width: 100%;
    height: 300px;
    flex-direction: row;
    gap: 50px;
}

.uname {
    color: rgb(216, 112, 112);
    font-weight: 900;
    font-size: 30px;
}

.options {
    color: rgb(216, 112, 112);
    font-weight: 900;
    font-size: 30px;
    border-bottom: 1px solid rgb(216, 112, 112);
    display: inline-block;
}

.pfp {
    width: 200px;
    height: 200px;
}

.section {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
}
</style>