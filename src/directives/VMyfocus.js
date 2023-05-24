export default{
    name: 'my-focus', 
    created(){
        // console.log("focus component created")
    },
    mounted(el){
        el.focus()
        // console.log(el)
    },
    updated(){
        // console.log("my focus component updated")
    }
}