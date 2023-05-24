<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide|Sofia|Trirong">
    <div class="container">
        <div class="wrapper">
            <base-header />
            <div class="cmain df">
                <div class="thank df">Thank you Zhibek Zhumagul, your order is confirmed.</div>
                <div class="orders">
                    <div class="oproductwrap">
                        <div class="cproduct">
                            <div class="cpicture"><img
                                    src="https://jomahi.com/storage/2021/08/O1CN01F08tr21LjTLgi9amS_91921335-4.jpg_800x800-4.jpg"
                                    alt="">
                            </div>
                            <div class="odescwrap df">
                                <div class="odesc">
                                    <div>sunglasses</div>
                                    <div>1800тг</div>
                                    <div>Item will arriive before 28.05.2023</div>
                                </div>
                                <div class="confirmation">
                                    <div class="buttonp cobtn">
                                        Confirm item has arrived
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="oproductwrap">
                        <div class="cproduct">
                            <div class="cpicture"><img
                                    src="https://jomahi.com/storage/2021/08/O1CN01F08tr21LjTLgi9amS_91921335-4.jpg_800x800-4.jpg"
                                    alt="">
                            </div>
                            <div class="odescwrap df">
                                <div class="odesc">
                                    <div>sunglasses</div>
                                    <div>1800тг</div>
                                    <div>Item will arriive before 28.05.2023</div>
                                </div>
                                <div class="confirmation">
                                    <div class="buttonp cobtn">
                                        Confirm item has arrived
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="oproductwrap">
                        <div class="cproduct">
                            <div class="cpicture"><img
                                    src="https://jomahi.com/storage/2021/08/O1CN01F08tr21LjTLgi9amS_91921335-4.jpg_800x800-4.jpg"
                                    alt="">
                            </div>
                            <div class="odescwrap df">
                                <div class="odesc">
                                    <div>sunglasses</div>
                                    <div>1800тг</div>
                                    <div>Item will arriive before 28.05.2023</div>
                                </div>
                                <div class="confirmation">
                                    <div class="buttonp cobtn">
                                        Confirm item has arrived
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import BaseHeader from '@/components/BaseHeader.vue'
export default {
    components: {
        BaseHeader,
    },
}
</script>
<style>
.thank {
    font-family: "Trirong", sans-serif;
    font-size: 25px;
    font-weight: 900;
}

.orders {
    display: flex;
    flex-direction: column;
    gap: 50px;
}

.cproduct {
    display: flex;
    flex-direction: row;
    gap: 50px;
}

.odesc {
    display: flex;
    flex-direction: row;
    font-size: 25px;
    font-weight: 700;
    gap: 15px;
}

.odescwrap {
    flex-direction: column;
    gap: 15px;
}

.confirmationwrap {
    flex-direction: row;
    justify-content: center;
    width: 100vw;
    height: 422px;
}</style>