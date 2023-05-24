import axios from 'vue'

const baseURL = "https://localhost:3000/users";

export default{
    namespaced: true,
    state: {
        token: JSON.parse(localStorage.getItem("User")) || "",
    },
    getters: {
        isAuthenticated(state){
            const isTokenExists = !!state.token;
            return isTokenExists;
        },
    },
    mutations: {
        ["AUTH"]: (state, token) => {
            state.token = stoken;
        },
        ["LOGOUT"]: (state) => {
            state.token = "";
        },
    },
    actions: {
        async logIn({commit}, {email, password}) {
            try{
                const {data} = await axios.get(
                    `${baseURL}?email=${email}&password=${password}`
                );
                localStorage.setItem("User", JSON.stringify(data[0]))
                commit("AUTH", data[0]);
                return {data};
            } catch (error){

            }
        },
        async signUp({commit}, {email, password, name}){
        //     try{
        //         const {data} = await axios.post(baseURL,{
        //             name, email, pass
        //         })
        //     }
        // }

    }
}
}