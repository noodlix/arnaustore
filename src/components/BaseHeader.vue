<template>
    <div class="header df">
        <div class="logotextwrap df">
          <div class="logo df"><img src="../views/images/arnau.store.jpg"></div>
          <div class="logotext df">
            <router-link to="/home" class="text">Arnau store</router-link>
          </div>
          <div class="instlink df">
            <a href="https://instagram.com/arnau.store?igshid=YmMyMTA2M2Y=" class="instlink df">
                <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png"/>
            </a>
           </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'base-header',
}
</script>
<style>
.df{
    display: flex;
}
.header{
    width: 100wv;
    height: 200px;
    background-color: rgb(253, 246, 235);
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: 2px solid rgb(216, 112, 112);
    border-bottom: 2px solid rgb(216, 112, 112);
}
.logotextwrap{
    flex-direction: row;
    justify-content: space-around;
}
.logo{
    width: 150px;
    height: 150px;
}
.logotext{
    flex-direction: column;
    justify-content: center;
}
.text{
    font-family: "Trirong", sans-serif;
    font-size: 60px;
    color: rgb(216, 112, 112);
    text-decoration: none;
}
.instlink{
    height: 30px;
    width: 30px;
    /* background-color: rgb(253, 235, 235); */
    border: none;
}
</style>