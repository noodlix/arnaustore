export default{
    mounted(){
        document.title = "arnau"
        if(this.$route.meta?.page_title){
            document.title = this.$route.meta?.page_title
        }
    }
}