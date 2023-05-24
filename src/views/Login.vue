<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide|Sofia|Trirong">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide|Sofia|Trirong">
    <div class="container">
        <div class="logwrapper lrwrap">
            <div class="popup2 df">
                <div class="logins df">Log-in</div>
                <div class="datas df">
                    <div class="inp df">Email <input type="email" placeholder="Enter your email" v-model="email"
                            :class="[error_message !== null ? 'border-red-300' : '']"></div>
                    <div class="inp df">Password <input type="password" placeholder="Enter your password"
                            v-model="password"></div>
                    <div v-if="error_message">
                        <div>{{ error_message }}</div>
                    </div>
                </div>
                <div class="btnswrap2">
                    <router-link :to="{ name: 'home' }">
                        <button class="regbutton df" @click="logIn()">Log-In</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import store from '@/store/store';
import PageTitle from '@/mixins/PageTitle';
export default {
    mixins: [PageTitle],
    data() {
        return {
            email: '',
            password: '',
            registeredUsers: [
                { name: 'John', email: 'john@example.com', password: 'password1' },
                { name: 'Jane', email: 'jane@example.com', password: 'password2' },
            ],
            loggedInUser: null
        }
    },
    methods: {
        logIn() {
            if (!this.email || !this.password) {
                alert('Please fill in all fields.');
                return;
            }
            const user = this.registeredUsers.find(user => user.email === this.email && user.password === this.password);
            if (user) {
                this.loggedInUser = user;
                alert('Login successful!');
                this.$store.commit('setLoggedInUser', loggedInUser);
                this.$router.push('/dashboard');
                this.clearForm();
            } else {
                alert('Invalid email or password.');
                this.clearForm();
            }
        },
        clearForm() {
            this.email = '';
            this.password = '';
        }
    }
}
</script>

<style>
.popup {
    width: 500px;
    height: 330px;
    /* background-color: rgb(255, 228, 233); */
    flex-direction: column;
    justify-content: space-evenly;
    border-top: 2px solid rgb(216, 112, 112);
}

.popup2 {
    height: 180px;
    width: 500px;
    background-color: rgb(255, 228, 233);
    flex-direction: column;
    justify-content: flex-start;
    border-top: 2px solid rgb(216, 112, 112);
}

.registration {
    font-family: "Trirong", sans-serif;
    font-size: 30px;
    margin-left: 20px;
    color: rgb(216, 112, 112);
}

.logins {
    font-family: "Trirong", sans-serif;
    font-size: 30px;
    margin-left: 20px;
    color: rgb(216, 112, 112);
}

.datas {
    flex-wrap: wrap;
    width: 480px;
    height: 200px;
    margin-left: 20px;
    margin-top: 10px;
    color: rgb(216, 112, 112);
}

.inp {
    width: 240px;
    height: 60px;
    flex-direction: column;
    font-family: "Trirong", sans-serif;
}

input {
    width: 200px;
    height: 30px;
}

.regbutton {
    width: 80px;
    height: 30px;
    margin: 20px;
    /* background-color: rgb(253, 246, 235); */
    background-color: rgb(255, 228, 233);
    font-size: 15px;
    border: 2px solid pink;
    border-radius: 10px;
    color: rgb(216, 112, 112);
    text-align: center;
}

.btnswrap2 {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.btnswrap {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.logwrapper {
    width: 100vw;
    height: 200vw;
    overflow: hidden;
    zoom: 0.98;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>