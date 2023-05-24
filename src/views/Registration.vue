<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide|Sofia|Trirong">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide|Sofia|Trirong">
    <div class="container">
        <div class="logwrapper lrwrap">
            <div class="popup2 df">
                <div class="logins df">Register</div>
                <div class="datas df">
                    <div class="inp df">Name <input type="text" placeholder="Enter your name" v-model="name"></div>
                    <div class="inp df">Email <input type="text" placeholder="Enter your email" v-model="email"></div>
                    <div class="inp df">Password <input type="password" placeholder="Enter your password"
                            v-model="password"></div>
                </div>
                <div class="btnswrap2">
                    <button class="regbutton df" @click="register()">Register</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import PageTitle from '@/mixins/PageTitle';
export default {
    mixins: [PageTitle],
    data() {
        return {
            // email: 'zhibek@gmail.com',
            // password: 'qwerty',
            name: '',
            email: '',
            password: '',
        }
    },
    methods: {
        register(event) {
            event.preventDefault();
            if (!this.name || !this.email || !this.password) {
                alert('Please fill in all fields.');
                return;
            }
            const isEmailRegistered = this.registeredUsers.some(user => user.email === this.email);
            if (isEmailRegistered) {
                alert('Email is already registered.');
                return;
            }
            const newUser = {
                name: this.name,
                email: this.email,
                password: this.password
            };
            this.registeredUsers.push(newUser);
            alert('Registration successful!');
            this.clearForm();
        },
        clearForm() {
            this.name = '';
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