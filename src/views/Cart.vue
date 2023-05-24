<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide|Sofia|Trirong">
    <div class="container">
        <div class="wrapper">
            <base-header />
            <div class="cmain df">
                <div class="cname">Your Cart</div>
                <div class="cproductwrap">
                    <div class="cproduct">
                        <div class="cpicture"><img
                                src="https://jomahi.com/storage/2021/08/O1CN01F08tr21LjTLgi9amS_91921335-4.jpg_800x800-4.jpg"
                                alt="">
                        </div>
                        <div class="cdesc">
                            <div class="ctype">{{ receiveid }}</div>
                            <div class="cdescription">солнцезащитные очки🔥</div>
                            <div class="cprice">🏷1800тг</div>
                        </div>
                    </div>
                </div>
                <div class="cproductwrap">
                    <div class="cproduct">
                        <div class="cpicture"><img
                                src="https://jomahi.com/storage/2021/08/O1CN01F08tr21LjTLgi9amS_91921335-4.jpg_800x800-4.jpg"
                                alt="">
                        </div>
                        <div class="cdesc">
                            <div class="ctype">{{ receiveid }}</div>
                            <div class="cdescription">солнцезащитные очки🔥</div>
                            <div class="cprice">🏷1800тг</div>
                        </div>
                    </div>
                </div>
                <div class="cproductwrap">
                    <div class="cproduct">
                        <div class="cpicture"><img
                                src="https://jomahi.com/storage/2021/08/O1CN01F08tr21LjTLgi9amS_91921335-4.jpg_800x800-4.jpg"
                                alt="">
                        </div>
                        <div class="cdesc">
                            <div class="ctype">{{ receiveid }}</div>
                            <div class="cdescription">солнцезащитные очки🔥</div>
                            <div class="cprice">🏷1800тг</div>
                        </div>
                    </div>
                </div>
                <div class="cname">Total: 5400тг</div>
                <div class="btnwrap">
                    <router-link to="/order">
                        <div class="buttonp obtn">
                            Order
                        </div>
                    </router-link>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import Product from '@/views/Product.vue'
import BaseHeader from '@/components/BaseHeader.vue'
export default {
    components: {
        BaseHeader,
    },
    data() {
        return {
            receiveid: JSON.parse(localStorage.getItem('data')),

        }
    },
    // created() {
    //     this.$Product.$on('data-updated', this.updateReceivedData);
    // },
    // methods: {
    //     updateReceivedData(data) {
    //         this.receiveid = data.id;
    //     }
    // }
}
</script>






<style>
.cmain {
    margin: 20px;
    flex-direction: column;
    text-align: start;
    gap: 50px;
    color: rgb(216, 112, 112);
}

.cproductwrap {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.cname {
    font-family: "Trirong", sans-serif;
    font-size: 45px;
    font-weight: 1000;
    text-decoration: none;
}

.cproduct {
    text-align: start;
    display: flex;
    flex-direction: row;
    gap: 20px
}

.cpicture img {
    width: 200px;
    height: 200px;
}

.ctype {
    font-size: 25px;
    font-weight: 700;
}

.btnwrap {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.obtn {
    text-align: center;
}
</style>