export default{
    name: 'my-value',
    mounted(el, binding){
        el.value = "custom value"
        console.log(el)
        console.log(el.value)
        console.log(binding)
    }
}