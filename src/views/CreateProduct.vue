<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide|Sofia|Trirong">
    <div class="container">
        <div class="wrapper">
            <base-header />
            <!-- <nav>
                <router-link to="/" class="header__nav">go back</router-link>
            </nav> -->
            <div class="crname df">Create a new product</div>
            <div class="crmain">
                <form action="">
                    <div class="formwrap df">
                        <div class="datas df">
                            <div class="inp df">URL <input type="text" placeholder="Enter image URL" v-model="id"></div>
                            <div class="inp df">Name <input type="text" placeholder="Enter name" v-model="name"></div>
                            <div class="inp df">Category <input type="text" placeholder="Enter category" v-model="category">
                            </div>
                            <div class="inp df">Description <input type="text" placeholder="Enter description"
                                    v-model="description"></div>
                            <div class="inp df">Long description <input type="text" placeholder="Enter long description"
                                    v-model="longdescription"></div>
                            <div class="inp df">Price <input type="number" placeholder="Enter price" v-model="price"></div>
                            <div v-if="error_message">
                                <div>{{ error_message }}</div>
                            </div>
                        </div>
                        <div class="btnswrap2">
                            <div class="buttonp crbtn df" @click="Create()">Create</div>
                            <!-- <button class="regbutton df">Close</button> -->
                        </div>
                    </div>
                </form>
            </div>
            <!-- <div v-for="elem in allproducts" :key="elem.id" class="product1 df">
                <div class="prdesc df">{{ elem.description }} 🏷{{ elem.price }}тг</div>
            </div> -->
        </div>
    </div>
</template>
<script>
// import CanViewExtraInfoBlock from '@/mixins/CanViewExtraInfoBlock';
import BaseHeader from '@/components/BaseHeader.vue'
// mounted() {
//     document.title = this.$route.meta.pageTitle
// },
// mixins: [
//     CanViewExtraInfoBlock
// ]
export default {
    data() {
        return {
            id: '',
            name: '',
            category: '',
            description: '',
            longdescription: '',
            price: 0,
            allproducts: [
                {
                    id: 1,
                    description: 'солнцезащитные очки🔥',
                    longdescription: '11111111Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur nostrum quae nobis aspernatur voluptate pariatur id repellendus facilis, magnam, perspiciatis deserunt ducimus dolorum tenetur, odit reprehenderit. Provident, necessitatibus delectus!',
                    picture: 'https://jomahi.com/storage/2021/08/O1CN01F08tr21LjTLgi9amS_91921335-4.jpg_800x800-4.jpg',
                    price: '1800',
                    category: 'sunglasses',
                    rewiews: [
                        {
                            id: 1,
                            rating: 4,
                            text: "I absolutely love my new sunglasses from this brand! They're stylish and provide great protection from the sun. The only downside is that they're a bit pricey."
                        },
                        {
                            id: 2,
                            rating: 3,
                            text: "11111111Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur nostrum quae nobis a"
                        },
                        {
                            id: 3,
                            rating: 5,
                            text: "11111111Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur nostrum quae nobis a"
                        },
                    ]
                },
                {
                    id: 2,
                    description: 'массивные кольца💞',
                    longdescription: '22222222Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur nostrum quae nobis aspernatur voluptate pariatur id repellendus facilis, magnam, perspiciatis deserunt ducimus dolorum tenetur, odit reprehenderit. Provident, necessitatibus delectus!',
                    picture: 'https://ae01.alicdn.com/kf/Ha982d4a05add40489da1abab90f58a5bJ/Y2K-Heart-Ring-Colorful-Retro-Enamel-Statement-Ring-Set-Gold-and-Silvertone-Aesthetic-Kawaii-Soft-Girl.jpg_Q90.jpg_.webp',
                    price: '1200',
                    category: 'rings',
                    rewiews: [
                        {
                            id: 1,
                            rating: 2,
                            text: "I was really disappointed with the quality of this ring. It looked nice online, but in person it felt flimsy and the stone fell out after just a few days of wearing it."
                        },
                        {
                            id: 2,
                            rating: 3,
                            text: "222222 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur nostrum quae nobis a"
                        },
                        {
                            id: 3,
                            rating: 5,
                            text: "22222  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur nostrum quae nobis a"
                        },
                    ]
                },
                {
                    id: 3,
                    description: 'Y2K кольца💓',
                    longdescription: '33333333Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur nostrum quae nobis aspernatur voluptate pariatur id repellendus facilis, magnam, perspiciatis deserunt ducimus dolorum tenetur, odit reprehenderit. Provident, necessitatibus delectus!',
                    picture: 'https://i.etsystatic.com/38395702/r/il/1211c9/4360557661/il_340x270.4360557661_frp7.jpg',
                    price: '500',
                    category: 'rings',
                    rewiews: [
                        {
                            id: 1,
                            rating: 3,
                            text: "3333 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur nostrum quae nobis a"
                        },
                        {
                            id: 2,
                            rating: 5,
                            text: "3333333  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur nostrum quae nobis a"
                        },
                        {
                            id: 3,
                            rating: 3,
                            text: "33 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur nostrum quae nobis a"
                        }
                    ]
                },

            ],
        }
    },
    components: {
        BaseHeader,
    },
    methods: {
        Create(id, name, category, description, longdescription, price) {
            this.allproducts.push({ id: id, name: name, category: category, description: description, longdescription: longdescription, price: price })
        }
    }
}
</script>
<style>
.crmain {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.crname {
    font-family: "Trirong", sans-serif;
    font-size: 38px;
    font-weight: 900;
    text-align: center;
    color: rgb(216, 112, 112);
}

.formwrap {
    width: 100%;
    height: 300px;
    flex-direction: column;
    /* justify-content: ; */
}

.crbtn {
    margin-top: 10px;
    /* text-align: center; */

}
</style>
