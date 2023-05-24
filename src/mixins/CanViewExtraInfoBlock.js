export default {
    data(){
        return{
            // user: {
            //     id: 0,
            //     fname: ''
            // },
            permissions: [],
        }
    },
    //methods mounted computed
    mounted(){
        this.permissions[0] ='can_view_supersecretblock'
        console.log(this.$route)
    },
    methods:{
        can(){
            if(this.permissions.indexOf('can_view_supersecretblock') !== -1){
                return true;
            }
            return false;
        }
    }
}