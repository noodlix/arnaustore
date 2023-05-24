<template>
<nav>
    <ul>
        <li class="">Orders</li>
        <li>Feedback</li>
        <li></li>
    </ul>
</nav>
</template>
<script>
export default{
    name: 'nav-bar',
    mounted(){
        console.log('hi im navigation')
    }

}
</script>
<style>
ul{
    display: flex;
    justify-items: row;
    justify-content: space-around;
}
</style>