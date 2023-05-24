<template lang="">
        <div class="gallery df">
          <div class="gal pic1"><img class="galp" src="../views/images/saleas8.png"></div>
          <div class="gal pic2"><img class="galp" src="../views/images/saleas4.png"></div>
          <div class="gal pic3"><img class="galp" src="../views/images/saleas5.png"></div>
          <div class="gal pic4"><img class="galp" src="../views/images/saleas6.png"></div>
          <div class="gal pic5"><img class="galp" src="../views/images/saleas7.png"></div>
          <div class="gal pic6"><img class="galp" src="../views/images/saleas3.png"></div>
        </div>
</template>
<script>
export default {
    name: 'products-gallery',
}
</script>
<style>
.gallery{
    width: 100vw;
    height: 400px;
}

.gallery{
    width: 3600px;
    height: 350px;
    margin-top: 25px;
    background-color: rgb(255, 228, 233);
    animation: go 150s infinite;
    animation-play-state: running;
  }
  @keyframes go {
    0% {
      transform: translatex(25px);
    }
    50% {
        transform: translatex(-2425px);
      }
    100% {
      transform: translatex(25px);
    }
  }
.gal{
    width: 600px;
    height: 350px;
}
.galp{
    height: 350px;
    width: 100%;
    object-fit: cover;
}</style>