<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide|Sofia|Trirong">
    <div class="container">
        <div class="wrapper">
            <base-header />
            <div v-for="oneproduct in allproductsforone.filter(product => product.id == id)" :key="oneproduct.id">
                <div class="main df">
                    <div class="pic">
                        <div class="picture"><img :src="oneproduct.picture" alt=""></div>
                    </div>
                    <div class="prod df">
                        <div class="type">{{ oneproduct.category }}</div>
                        <div class="description">{{ oneproduct.description }}</div>
                        <div class="longdescription">{{ oneproduct.longdescription }}</div>
                        <div class="price">🏷{{ oneproduct.price }}тг</div>
                        <router-link to="/cart">
                            <div @click="addToCart(oneproduct.id, oneproduct.picture, oneproduct.category, oneproduct.description, oneproduct.price)" class="buttonp">
                                Add to Cart
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="reviews">
                    Reviews
                </div>
                <div  v-for="review in oneproduct.rewiews" class="main df revv">
                    <div class="reviewrating">{{review.rating}}/5</div>
                    <div class="reviewtext">{{ review.text }}</div>
                </div>
            </div>
        </div>
        <all-products @sendProducts="getProducts" />
    </div>
</template>
<script>
import BaseHeader from '@/components/BaseHeader.vue'
export default {
    data() {
        return {
            id: 0,
            allproductsforone: [
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
                {
                    id: 4,
                    description: 'колечки в виде бабочек🦋',
                    longdescription: '44444444Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur nostrum quae nobis aspernatur voluptate pariatur id repellendus facilis, magnam, perspiciatis deserunt ducimus dolorum tenetur, odit reprehenderit. Provident, necessitatibus delectus!',
                    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2iqVuMZImLomj_GmDR0vpLObgySLBTxLIxg&usqp=CAU',
                    price: '700',
                    category: 'rings',
                    rewiews: [
                        {
                            id: 1,
                            rating: 3,
                            text: "I bought a set of rings from this store and they were cute, but the sizing was off. I had to return and exchange them a few times before I got the right fit."
                        },
                        {
                            id: 2,
                            rating: 3,
                            text: "4444 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur nostrum quae nobis a"
                        },
                        {
                            id: 3,
                            rating: 5,
                            text: "44444  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur nostrum quae nobis a"
                        },
                    ]
                },
                {
                    id: 5,
                    description: 'элегантные колечки✨',
                    longdescription: '5555Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur nostrum quae nobis aspernatur voluptate pariatur id repellendus facilis, magnam, perspiciatis deserunt ducimus dolorum tenetur, odit reprehenderit. Provident, necessitatibus delectus!',
                    picture: 'https://i.etsystatic.com/35752484/r/il/0d36bc/4336559647/il_fullxfull.4336559647_fow6.jpg',
                    price: '900',
                    category: 'rings',
                    rewiews: [
                        {
                            id: 1,
                            rating: 3,
                            text: "222222 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur nostrum quae nobis a"
                        },
                        {
                            id: 2,
                            rating: 5,
                            text: "22222  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur nostrum quae nobis a"
                        },
                    ]
                },
                {
                    id: 6,
                    description: 'Y2K колечки кристаллы💞',
                    longdescription: '6666Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur nostrum quae nobis aspernatur voluptate pariatur id repellendus facilis, magnam, perspiciatis deserunt ducimus dolorum tenetur, odit reprehenderit. Provident, necessitatibus delectus!',
                    picture: 'https://i.etsystatic.com/39435707/r/il/5f8c13/4626980134/il_fullxfull.4626980134_811c.jpg',
                    price: '1200',
                    category: 'rings',
                    rewiews: [
                        {
                            id: 1,
                            rating: 4,
                            text: "222222 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur nostrum quae nobis a"
                        },
                        {
                            id: 2,
                            rating: 5,
                            text: "22222  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur nostrum quae nobis a"
                        },
                    ]
                },
                {
                    id: 7,
                    description: 'парные колечки 💜',
                    longdescription: '777777Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur nostrum quae nobis aspernatur voluptate pariatur id repellendus facilis, magnam, perspiciatis deserunt ducimus dolorum tenetur, odit reprehenderit. Provident, necessitatibus delectus!',
                    picture: 'https://i5.walmartimages.com/asr/ad9b1e44-df5a-4250-9228-fa55e08b2aab.99fbb15d89ab6fbe0449427287fbda49.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff',
                    price: '1200',
                    category: 'rings',
                    rewiews: [
                        {
                            id: 1,
                            rating: 1,
                            text: "I bought a pair of rings from this store and they fell apart after just one wear. I'm really disappointed and would not recommend this brand to anyone."
                        },
                        {
                            id: 2,
                            rating: 3,
                            text: "777777 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur nostrum quae nobis a"
                        },
                        {
                            id: 3,
                            rating: 5,
                            text: "77  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur nostrum quae nobis a"
                        },
                    ]
                },
                {
                    id: 8,
                    description: 'розовые колечки💗',
                    longdescription: '8888888Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur nostrum quae nobis aspernatur voluptate pariatur id repellendus facilis, magnam, perspiciatis deserunt ducimus dolorum tenetur, odit reprehenderit. Provident, necessitatibus delectus!',
                    picture: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFhYYGBgaHBoaGhgYGBgYGBoaGhgaGhgcGhkcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzQrJSs0NDQ0MTQ0NDQ0NDE2NDQ0NjQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAPsAyQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAECAwUGB//EADoQAAIBAgQEAwYFBAIBBQAAAAECEQADBBIhMQVBUWEicYEGEzKRobFCUsHR8GJy4fEUI8IVJEOCkv/EABkBAAMBAQEAAAAAAAAAAAAAAAADBAIBBf/EACkRAAMBAAICAgEDAwUAAAAAAAABAhEDIRIxQVEiBBMyYXHBgZGx8PH/2gAMAwEAAhEDEQA/APSqVSpClmyNKpRSoAaKapxTRRgEalFPSoAalFPFKgBqVPFKKAGilT0xoAaKRpxULtwKJPyG5PIAdaAE7hRJ0igLnEDugBHUmftTucxlxAHwrvHfzrFu4Z/es6kIugjfP1kD+aV2anexs8a+TewWMDyIhl3HbkQeYoquc4Xc/wDcKOoYHyyk/cCujrtpJ9GKnGNSpUqyZGpUqVcAahpomha6BoilT0qAGpRT0hQA1KnFKgBUqVKgBVFjGp2pOwAkmANzWFjMWXP9I+Ef+R7/AGrhqZdE8ZxbxQobL1Bgn/FUWeJFGUhiykgMCSfMjoRQGIeKynvwWkwIJPprPyrSpLplK4U10ejGlQvDcULtpLgEZlBI6HYj5g0S7ACToBua4mStNPGRdwoLEwBuaxk4hmuAkGD4UA1iTue5+1D8V4hn0Gijbv3NC8MxChhmIBWd/KJHWsKk6wfPHk6wzjWHLwMqOuzI4PNl8SsJgquaBGpI1XnmYm+9u0oMuVUBjOpgatV3GuJyuVCcx5jlWNxDiuZMuUyRB/WK54qW6HRDeC4XxU+/tfmLwQOSGF+s/Q16JXmXsxgS2IQka5gx7BdY+lem0RTrtmP1czNJT9CpqemNbJBqVKkaAGoeiKFroGlSqF+7kUsRMdKy04wAQSQyEwTEFZ5+VdUtmlLa6NelSVgYIIIOoI1B8jT1kyNSp6RroDUjT1hcW4jMoh05nqeg7VmniNTLp4iri/Es3hX4AdT+b/FAvdETQ7Gd6DvuVGh0rCvO2WxCSxEsRf61iYpy7ZV2O/lOgq+87MY+1dD7NcGDHOw8I+val1Xk8RRs8U+TDW4muCwlvMMzsPAgMFixJ1PICRVDcSu3LIN8rZLk5V11A6iJAk8+2tWccb3d4uRnzAchNsAQAvbVjHequJ4I4gpctMhTKF1bLBBYnfz23rfkv4+iaJisddb3v+DNxFx7bZXXKeR5EdqpusGo/Fqlu0tm8xuOzEjJJCCBszR/s7b1huSjZSZHI+kwehgilvV/b7NrN6/9JO7j4XI5enSqsPYk9TVmaa6H2b4YGbOw8I+p5ChbXRuqUTpq+z3DfdpnI8TDTsv+a2KelVEzixHm3buvJjGmp6aumRqVI0xoAVD0RQs0AVca4gEyqRnV4EAgHKSASs7/ABDQawNK5/jeLCv8JVQIJgAERsPKtjG41RZUqfFyG46g1yfGscboyAAdSOf8msVTXel/Bx6/6G57BcRZg1tjpGdR011A+YNdjXFew2Fh3fkFj5kfsa7UUce52J/VKVyvxFSNKhOIYsIv9R2H6ntW28J0teAPG+I5QUU6/iI+wrm2v1binmgrg50im29LeOVM4Ta7QOIvTpUbzmp4PCs7Up18FKlJaX8I4e1xwI3Nd2zpYQActAObGsv3DYfDs6ZRcOUDMJABInTmYmue45xW77t3h/eBPCAqsnciII5tsdqZL8evlkt7y1ifQbjrhYlmMk61lJi3tMSgDK3x22MK3cH8LdD/AJB5vhPF7rNFx8y6kkiSCR4YI5Fo+elbiNNcpNMdXC4/Fk7lwuwYZmWCB4TmUjUq0TrEGefKgjikF0I6swZXzQcuWFOVi35lbLAM7nTWjcOWR8yFgdjlJUkdiNiORrN9oMPdLkvmYtlOYSVZNShBOusaySZUjSIGly/j+2/X2d4+PaU7i+zQ4VhGa4EHiJgqeRU7HtznpBr0bC4cIgQcvqeZrlvYS24XxqAQvhEeJUJGWemYg6dq681vjnES/qqfk5+hqVKkaaSjGmNOapv4gLpud8o39elcOpaTdgNSYHeqP+akxm+YIHzOlZ13Fh5BMsBOQEEjoI/WgUVwDnC9oMkDoeVanxr5GKOuzpqHobgt4shU65TA/tOw+/pFXzXH08Fvp4cljrYiskLrAo/H3uVLhODLuo6mKkdd4j1p/GdZ2PszhMlkE7uZ9BoP1+dbFMlsKoUbAAD0rL4hxdV8KeJvzch+5qnqUeZW3bYVjsaqDqx2H6ntXN4q+zEljJNU3b+YkkyTzO9UvcpdVo2ZwjcahLz1O5c1qzB2A7hfU/t23pNV8IolYtYNbw4Cl3OVBz3JjcKPlr39KfBcYh1C2wByklmJ5a5lX6UL7R3yWCoPCsBRyHPN9R8zQVjBCJJJbqT/ACK5M/Jx35Ls63iF93HvAWbLoyRJTlIECRIM6Agj1rGvYjOpWSO4MH+dqJw3FWJOZTIPxICxzQBIA1B05HtFS4nFxA4A94MpDAR7xG6j8w8JB5zQ217Fz08MJcLkBGhQ/ggAdiCB4T3FXW5ABmVOzd+jD8JpI81o8Iw6sxtuYR9m/K3I+R2PofwiuP8AoPbeayzA2MxFdMvDjlUFQSNVJ/DPxemimOoqn2f4YySXGqkqO8GJrfp0QmtZLy8veIFwOFFtYmWJzM35j+g5AUTSpU8nbbesaKak7ASSYA1JPKK53iXGC6sts5V1Gc7mBLEDkAPUyPI5qlK1nZl16LuK8ayEpbILc23C9h1NVcOdmUzEayxJLM3Un5Vx5xMHNr5HTTkfLcT1U9K0MNxplWFiOh5VyaT9li40pXibX/FGfOWkrmy7SA0SJG4kTr0HSsziWPcMEIGpHiB3E66cqDs8RZXZzDZokbbbR86zeJY9rjiNI6Hb160bMLo3HC2zvfZt1NtyN85B8wFoyKzfZKxlww/qZmHlov8A41pVvfLsh5cVtHAvLGux9lsBl8Z5CB5nf6Vi8FwJdx962+M44IvuU0GzHqen7/KpYXfky/mtteCH4zxXNKJqvMj8X+PvWA94+VVC82aP4Kjcug6V1032LnjUrCz3nWq3u0O9zLofSqw01irxDZjWEJqa1uAD4wRDh5I55TokdpmhMDagZj/O9QxeKNp1uATBII66+IH1HoQKwk/Ycj38UZHELhBA5kACfLX5ZTWhw7AgozXHIgAgTEyYM+UjTvV9rH2cQW9yMrzJsM6KWJ/IXUq2pGkjfalhMUro2SFdCQ6PkD2yDBDqqh45yBHemw8XYik/Xpg1vAkHOmy6h/hX6/5oazxcFm91D5TGYyfGNXZRtpA8822knT9oeEv/AMZbt2+WbMqmyoyAaw+zlnjlrB001rkMFgzZGVlCNJYBZlZOmvMiBWeW5S/4O8U+VG/iLUXDl+FodY2htdO0zHaK6HgPDsxk7DegMFhTcWyQNTI08z8h4fSa7fC2AiBR69zXeGfLt+g5b8Z8fkmiR96lT01VkQ1M7AAkmABqToAOtZXGuIXEH/WFJkTrJ+REfXlXN8c489xEAXKh+IqZUvr4Z5aCY/asO0tGzxumgnivFveN7tC5QnxNKhIGpOWMxgDqPI1k41FCFA5Vm2LsDElWA0A3yLr3PnQOGxQV5J8JDKeYGdSs+kzp0q7OLl9VmSQuUKQxUAAEnXwqInuNpqZvvWUuM6XoWGwJdFtyVyKJcg6sZAWNviygbDQxpQTcMvhiPduwBjMqOVMcwY2rrLOED5YIKKc87knYsG2LEAa7DXU1vvilRISDAG5hVExLTtz84NcVNtthPK4WI8ya2w0YsI5GRHodqJ4Zw83XVF5nU9BzJrU45jRefIkuQ2rnY6AAJB0Xfz0Pl03AOFiykkeNt+w6fvTJXkx187mNzGzRs2wiqi7KAB5AUPRdCTVJ5e6DYYCxbERnYadh1rExVyTrv33NHYq4WJJNZ93uJpD9YWz2/Jg7+HY+h/egrqc4E/SjHMDefP8AzWfecT0pdYh0ptjXSXG21GcOwZJk7ftvRXDUtxJlvoKdLaWjqISSwcCShO+bmyfb7LctvTtX4rF7DMyjQa9h0rnb7O7taAjxvr+FRnYHMeWv3itqyilxDZpKggEEyBnmcsaqyarOrRNZnv1sWy+ru5Zsqk5ndvEYETkGb0AJ0zQXOdJ5rvr2Z3EcJbQoqyHADF5hs8+EaHwkRPyM9Gxl4uy3LjFL42xKD4tIC3VjXoGGw0INPh8Nccl3Uy2rBiBv2JkctPKjU4ex8Meh1paf0PpJ4n2aa3ElXvZQVRJOys6iBkBOg8QMdjGlZZsNeLMVKHMAoPTmdN5ER51ucFUootXlz2gfAY8dvplndR0O3LpWu2DBfwCeh7de1JfC6rRfmo9D8BslSAfwJA7Sdvv8zW7VGEw4RY3J1JrG4j7U20b3doe+uTBVGEA9z/B3q+fHjnslaq66OgmqcRfVFzOwUd/0HM1zP/ruJI1tosjk3iHlmkT56Vh42/dYl2ztG+YagemkeVZ/el+jU8L3tmnxnHe9JCFlXUbxmkAagacttazLDrcDpcgOBGZgkEM0KVGkEZt5HIk70LbxlV4i4QVuJGdDmE6jyPY7Vx99j/HrEAYm0yOyGdCYJBGZZgEA8tPnNV52VWVWKh4D5YzFeYB9dvKtvicX7K3kzFlHMklmEe8Gupj02G86c9v+lLpYUcT8l3/qeiWuKYZbWZLluNgk+JRyhIDdtqxOIYU4lDfSYttlIIhsrBSGOuoJBHaF7zicPwpcjSvReA4H3dtgROdYKnbsT86JnWJ5JXF+SfZn+znB8oFxx/aD9/KujanpjVMypWEd27esVCxRVC1sWYd1v90LdNPcehLt8VM2XTJXfaBT4XgrP4n8K8hzP86fSjuEYTP/ANjCdQEB2kmJrpMFh48Z+I7T+FeQA5Md2O8mNgKS15ewrkc9IxrfAwBAQ/3RB+cgj5Vl48XMP4pzITGYGQCDs0ba862+LFnui3JyBZIBguZ0E9BExz0FPZRDmsnKV+BgNRJGmsb7adqNx9C/L77MHDY5XGVoVoCIFeWKgLnZjHhEy2pEw0bVZibr5SUVXcHSTlUjLOhUGdXMA9N9JrAxmHNtyB8E6f0nYj+3cVYLjB1up8REXE/C8HQ6c4O/bpTPPoZPEm9Xos/595jlYZCNxEN039NxFa/DkfTQfrQj2XZQ4WUnmozA7kSNDHSAeeo267gGEBQORpy71iNp4jdVMzpfgMCTBfbpWrFPVGLxSouZj5DmT0FVTKhEVU7Zjce4ipdcMrEFpLwcpKgTlzkaT2k9qyeAcBS0pI+I6u/MmdQN+/19aMbiM2JF1gFUgrInwk+EMTy0OprfylFK9IHoJj6lqlraptjmvGUl/wBY91giEqswCco3MDbuazcPcNxDnVQQxBy6r2IPlHzEwZAvRyEXqQSZ6liTVN+60aHWeeunPn9eUzyoWPoyczxnh/u2zrqu57df5+1Ae9rp7pZ1RGAzsQAB1mOf39a5/imB93cKrqskAxEMph1jsf5pXU2uh/HSfTIcJxOR3QzDqShkeF1BiAQddZ81HnVV/B5bpUA5W1WZ1/NEmYzTvRWD4Y1wgr8SkMpInUGRXS8KwqriEzp+EFM0gKSNlGo+Kee/cV2X5dG7pRWr5XYdwHggRQ7jXkv7/tW/UqjVUypXRBdu3rGNNTmlXTBE0LRdC0AcTicRWeA9xsiCTzPJR1JozD8Pa6ZMqnXmfL9628Ph1RcqCB9SepPM1J4uj0PJT69hHBbZCrZJkqCVMRmEa6dRJ9I70VxK5ic1r3AXLB95OWQwyhQZOifFJEnTSsy4SCGBIYGQRuCNqtucRF0ZGZ7bz+AgK8DlzBP5RuYgxpXXOCXu6EY+6pusBJhYJB2JMj1j71S2NVAXfRLYznyU9Op0UdzQ+Cxdp5RDJU+IQJLSTqyu0GZ60F7V8OW5bNs3yrAibSoVVi2ilnYSxjtGuwmseL3voAPD3lup7xluK2eAgCnPJgyCCddYqeHwgDLl+E6FTMo4jMpnlqCD0PY1k8EwwsWmVnJf3jTqQAoRVUQeZl5H9I21Fbvs24a7l3SQY5A5gJHzpVNfuYh8JzDbOw4Zw8KmoEEag7H/AFWjh7eVQvTT05fSrBQuOxi2xrqx2Xr59BV8ypRFVOmLG49LSlncLAzamNNvvpXnHEvat7pdrdpnKMFiZABLDQLtqved9Nqu9rcS9+5bslSwcjMV0yjOANphQM5JYEeIHcCM7BMzjwO6W0MWwjFZVdFZ4+JiBOsxsNABRVJJat34LOLhmZ8q9svtcVRmdCHyr8edRKiYLAjQqCRMgEAzqJI2cFxQqPc3NQIW08zI/Dbb5kKe8HYTy+IdExOclgpQO6Jbyo5NsO6eEw2bO5lhpMbGRLBX19yJcumo8eUXUUGJZQTmTbxD1AGtZqcWr0bviTSaR1j3gZhgD0O2vXmNdfnWRxXFNkIR1Lk6ZJhdCSSSOoA9eVA38e6r8C38oJysSrsvNrdxdVYD4l56EbGtbiWIwyWLF22M5urK22fO2nxZy0xlJCmIM0mpS7RPjTzDmv8A1Z7bq7OWdPFLayVlssfT1HXXewbnE2C7fESH/wDsza/R2rmrlpnuZymYE5SFJCgx8IZpPc7nfrXf+y/DsqopGnxN0gD7EmuSvLpBX49mlwDhgRczDUjQVoHApnD8wBG24IIk7mMvWiqY1SolCKuqesamNOaatixqY09RNAD0LRJoWugYpNMzVQ12qLl6p9LVJbduzQGJUGrc1D3mrh0xON4NbpDtpdEf9upZlAAyuPxQAIbcRzrpcfxIXBadfC4tqrnQ5mUcmOpXfXczyrGvsKAw2Ge5dW3ZOrtEHVddyRygak9qTbp9JjJiX2HcUxaKiBHHiXxIPjzknP4Yhp0g8wBzro/Y7CAqbpXIgjMSdCE3bXYFp9BNQ4H7EOlz3l8oSshcpLDXQnUA1XxTG+9DohKWrVxkyAAFynhJY/h8Q0EbA7EVqIzHS7+P7hVK/wAI7+2dde4zayZ0dXkwoB3MT8o1/wB1iu5JLMZJ3NY2EwouqUTw3Fl13yxoCJJO+m/bXSr8NjMykMMrrIZTuCKb5Pcr2Jrh/bbRz/EyTib75GHu7TkPyk2zbB1Xac0QRqGOu1GcJUBAB0rNx11ExGKzq5zK6kKQDDvDGdcoAYEEiJHcVbZxdpPDF/4C4BA5CSs5d+8R3plw3jS+CqpblJfSNC/acknOCIywyW28MRlMoSVjSDWXi7KpiLbKitIGZQVVACqoQFUSFynN4iQRcA1qY4sCUFu0zG4Gyl2DQ4JUeAKAyg5SSZGpG4NV4bBvnF69IvNPh0BylQodwPhJGeQd99IrMpxrr/YEnP8AL69BWCwceFW0VjlJ30PhOvaNK2h7Lm4pe04ViNUcmEPMqOazt02q7hWBJiutw2ECiDSVx+RNycrn0zlOD+znulVGdrzidSIGpJOmuknmfppXWYXDhBHM7n9KuRANhFKqZhT2S1boVNT01aMDUxp6agBqVKlQBE0NRVCUAcddu1WppmXWakKkXs9GmSZqExD1Y7VmYu9XaZmVrBcZiuVaHsZxFLeIV3mNRoJOoI29ax0wNy60KpjqdB866nhPCEtD8z82P2HQUuZbeodVSpafydfjeOkiLQj+thr6KfuflWDaw2ZyrsStxg0kn44gSf6hA8wKtVae4oIinNtkk/j/ABD8fiLOBsPcFvxDKMpJzMSYAzGYXWuYXHjFq19ECXkMMgaQ6aGRMGdf056bHF7RxuHOHLBb6kFGba4F1g/1R899dq4zA8EuWnS6zWwFJIh4ZoOQqA4XcnKRvroNa34py9fZTxKKinT/AC/wa1q+XE5zroQwDbcvEDV6IQZIRjt4kSYiI8IGkaVk2xcziEcM2slCqv0Go0ciSPzRprEn4XEBo1pS1ezC79BfvHIyrCL0RVT6qJ+tHnhYvwwlbg3JJYMfzCdidyuxMkZSTNmAwk8q6jBYUIO/2rSjyYu7UrV7KeEYXIiz8RGsiI7RR5pUoqiUksJKp09ZGkaemNdOEaY09I1wCNNT01ADUxpzSoAiaFouhKAOLNNlqxLc0Qlipki6qATZJqy3w4DUia0UtAVIrRhxMrt2Qo0qe1NNRZq6HjpYXqBaapZ6hnoO+OErpofA3gjojpnQ3M4zGcl1pyaH/wCMsQJGqloMqQBJnql0mhvA8dBTezBi3iZ5zzuSTJPYzqOhAqnBWnLvrnYGeUsCTO2hIIOvMDrqegTgBu289rxuBBS4+VFO2YkeIrHIa8pFFcI4e7XdJVV0ZsuRCNtFO88hyHPnWnT5c6wZVRjx+jouE4IogLfERMbx/mj6SIAABsBA8hT01LEedVNvWRNKnNMa6cGNNT0jQBE01SqNAETTU5pjQAqanpqAGNC0UaGroHNJbirVWpxTE0gqXZF2qK08VEmKyMGc0O71JzVLVw0kRZqqZ6Tmq2Nd9B7JZqst6mhqNwaSR+grDem8xadP7OYbd+Q08z/qt5VA0FU4GzkRV7a+Z3q81TE4iC62tGNMalTGtCxqY1i8R9oUQ5UGduoMKPXn6fOsLEe0t8mFKgnQKiBif/1NYfIl0Pngulp29NXNYTHYkDNccf25E+pA+1O/GLgPxA9so/TWnTDpbhh8bTzTozUay+H8ZVyEcBWOgIOhPSNxWqa45aeMw017IkUxqRqJrJwY01ORSoAiaGmiqEroGI1NFSuUO92p2WSibGqmFTR6i5mjDRQ1DXGolxQd81x9Hd0rz1EmoFqird4pbYyZLUEmur9nOHyc5Gg+/KsPh1tCQASx6Db513+CsZEA+fnTOOdei+e/GcRdUdvKpVRi8UttS7mB9SegHM1SyFLehYm8qKWYgL1/Tua5LivF3u+FZVOnM/3ftt51Xj8a91pOij4VGw/c96Cek1Tfr0WcXEp7fsGvsFFWcPwxHjJM8uwoa347gHIeI/YfztWuzVmJ70fdYsBr7t+ZvmaH/wCU4OviHff50RcM1ULU07zpemYSWdkrXjZSkzIjqDXoBrnvZ7hcH3jDTl3I5+ldBW3TpLSPma8sQjTGnNNWRQ1NTmmoAahooqhq6Byt69VSAnWntpmg8iJHkaKRNKnwtdJeiCJUiQKmdKFv3K6YXZViLlZ925V900G8DelUx0oqZqa3YLGnZ+govhWHd3CjmawOTxadV7K8Og5zy59+VdZVGEwwRAo5b9zV9WRPisPN5L8q0pxOIVFLMYUfwAd64ziGNa6+Y6AfCvJR+/ei+N473j5FPgQwO55t+g/zWeErFVrwo4oSWv2JRQ180Q5gUO5rg3ewTAsFuNPMCPQn960lRjJMBRux5Dt1PYVk4kQcw3om3iQ4AO9dml6O132XlgTptynetPheALt2G5oPAYQswA512OFwwRco9TW0tEct4sRaigAAbDQU1TqFaJBGmp6VADUxpzTUAMaGomhZroHN2reUADYAAeQ0q01Jqg9IKip3oK61EXKHubVxmpQK80OwFFXKAvHWk0NlaIamK7v2U4TkX3jDXl+9clwtBnGlem4H4E/tH2pnDCb1mOe3M4i6s3jeKKWmj4m8C+syfkDWka5Hjd5jfZSSVWIHIaf5qiniJeNbQCiaU7mrjtVFylFYLcuUK71ffoR6zpoquvNU2QQ0ipNV2B+IVg1uI7X2dwxyZ2jooH1P6fOtuoWBCqOw+1SqqViPOt7WipqVRrpkVI0jSNADUxpzSoAY0LRVC10D/9k=',
                    price: '1000',
                    category: 'rings',
                    rewiews: [
                        {
                            id: 1,
                            rating: 3,
                            text: "222222 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur nostrum quae nobis a"
                        },
                        {
                            id: 2,
                            rating: 5,
                            text: "22222  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur nostrum quae nobis a"
                        },
                    ]
                },
                {
                    id: 9,
                    description: 'Y2K серебристые колечки🤍',
                    longdescription: '999999Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur nostrum quae nobis aspernatur voluptate pariatur id repellendus facilis, magnam, perspiciatis deserunt ducimus dolorum tenetur, odit reprehenderit. Provident, necessitatibus delectus!',
                    picture: 'https://ae01.alicdn.com/kf/S804c63b31c464967944df2c158958a68Z/Kpop-Volcanic-Opal-Irregular-Heart-Pendant-Ring-For-Women-Goth-Vintage-Party-Grunge-Y2k-Jewelry-Accessories.jpg',
                    price: '750',
                    category: 'rings',
                    rewiews: [
                        {
                            id: 1,
                            rating: 4,
                            text: "222222 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur nostrum quae nobis a"
                        },
                        {
                            id: 2,
                            rating: 5,
                            text: "22222  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur nostrum quae nobis a"
                        },
                    ]
                },
                {
                    id: 10,
                    description: 'цепочка',
                    longdescription: '10101010Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur nostrum quae nobis aspernatur voluptate pariatur id repellendus facilis, magnam, perspiciatis deserunt ducimus dolorum tenetur, odit reprehenderit. Provident, necessitatibus delectus!',
                    picture: 'data:image/jpeg;base64,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',
                    price: '1500',
                    category: 'chain',
                    rewiews: [
                        {
                            id: 1,
                            rating: 4,
                            text: "I bought a chain from this brand and I love it! It's simple but adds a nice touch to any outfit. The only thing is that it's a bit short for my liking."
                        },
                        {
                            id: 2,
                            rating: 4,
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
                    id: 11,
                    description: 'браслет',
                    longdescription: '1111111Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur nostrum quae nobis aspernatur voluptate pariatur id repellendus facilis, magnam, perspiciatis deserunt ducimus dolorum tenetur, odit reprehenderit. Provident, necessitatibus delectus!',
                    picture: 'data:image/jpeg;base64,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',
                    price: '550',
                    category: 'bracelet',
                    rewiews: [
                        {
                            id: 1,
                            rating: 3,
                            text: "I bought a bracelet from this store and while it's cute, it started to tarnish after just a few wears. It's not terrible, but I'm not sure if I would buy from this brand again."
                        },
                        {
                            id: 2,
                            rating: 4,
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
                    id: 12,
                    description: 'разноцветный Y2K браслетик',
                    longdescription: '1221212Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur nostrum quae nobis aspernatur voluptate pariatur id repellendus facilis, magnam, perspiciatis deserunt ducimus dolorum tenetur, odit reprehenderit. Provident, necessitatibus delectus!',

                    picture: 'data:image/jpeg;base64,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',
                    price: '900',
                    category: 'bracelet',
                    rewiews: [
                        {
                            id: 1,
                            rating: 5,
                            text: "This bracelet is so beautiful and delicate. I get compliments on it every time I wear it. I highly recommend this brand!"
                        },
                        {
                            id: 2,
                            rating: 2,
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
                    id: 13,
                    description: 'ожерелье',
                    longdescription: '131313Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur nostrum quae nobis aspernatur voluptate pariatur id repellendus facilis, magnam, perspiciatis deserunt ducimus dolorum tenetur, odit reprehenderit. Provident, necessitatibus delectus!',
                    picture: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/S/aplus-media-library-service-media/faa59e6d-92a3-4213-b49b-85cebe8b45df.__CR0,0,300,300_PT0_SX300_V1___.jpg',
                    price: '1700',
                    category: 'necklace',
                    rewiews: [
                        {
                            id: 1,
                            rating: 2,
                            text: "I bought a necklace from this brand and it arrived broken. The customer service was helpful in getting a replacement, but I was disappointed with the quality control."
                        },
                        {
                            id: 2,
                            rating: 4,
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
                    id: 14,
                    description: 'милое ожерелье',
                    longdescription: '141414Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur nostrum quae nobis aspernatur voluptate pariatur id repellendus facilis, magnam, perspiciatis deserunt ducimus dolorum tenetur, odit reprehenderit. Provident, necessitatibus delectus!',
                    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlOcmjlJIMmJ9eyAHpBFa04xJChTzmSMX6ByXvJyM72Bp7dzPfOG91R5MjgoebzjR99KU&usqp=CAU',
                    price: '1100',
                    category: 'necklace',
                    rewiews: [
                        {
                            id: 1,
                            rating: 5,
                            text: "22222  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur nostrum quae nobis a"
                        },
                    ]
                },
                {
                    id: 15,
                    description: 'очки сердечки',
                    longdescription: '151515Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur nostrum quae nobis aspernatur voluptate pariatur id repellendus facilis, magnam, perspiciatis deserunt ducimus dolorum tenetur, odit reprehenderit. Provident, necessitatibus delectus!',
                    picture: 'data:image/jpeg;base64,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',
                    price: '1800',
                    category: 'sunglasses',
                    rewiews: [
                        {
                            id: 1,
                            rating: 4,
                            text: "I was hesitant to buy sunglasses online, but I'm so glad I did! These sunglasses are exactly what I was looking for and fit perfectly."
                        },
                    ]
                },
                {
                    id: 16,
                    description: 'персиковые румяна',
                    longdescription: '161616Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur nostrum quae nobis aspernatur voluptate pariatur id repellendus facilis, magnam, perspiciatis deserunt ducimus dolorum tenetur, odit reprehenderit. Provident, necessitatibus delectus!',
                    picture: 'https://ae01.alicdn.com/kf/H6a25945f00034989acd337aaf0e10ac0E/3-Colors-Cute-Love-Face-Blush-Palette-Natural-Face-Mineral-Pigment-Blusher-Powder-Waterproof-Brighten-Face.jpg_Q90.jpg_.webp',
                    price: '1200',
                    category: 'makeup',
                    rewiews: [
                        {
                            id: 1,
                            rating: 5,
                            text: "This makeup brand is my new favorite! Their foundation provides amazing coverage without feeling heavy or cakey. Plus, their packaging is so cute!"
                        },
                        {
                            id: 2,
                            rating: 5,
                            text: "This makeup brand is amazing! Their lipsticks are long-lasting and come in so many beautiful colors. I will definitely be buying more from them."
                        },
                    ]
                },
                {
                    id: 17,
                    description: 'натуральные румяна',
                    longdescription: '17171717Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur nostrum quae nobis aspernatur voluptate pariatur id repellendus facilis, magnam, perspiciatis deserunt ducimus dolorum tenetur, odit reprehenderit. Provident, necessitatibus delectus!',
                    picture: 'https://ae01.alicdn.com/kf/Se56a5c5936234061b549650568b71d5bo.jpg',
                    price: '1900',
                    category: 'makeup',
                    rewiews: [
                        {
                            id: 1,
                            rating: 3,
                            text: "I was excited to try out this new makeup line, but I found the colors to be a bit too bold for my taste. The quality was good, but I don't think I would buy from them again."
                        },
                    ]
                },
                {
                    id: 19,
                    description: 'Y2K цепочка',
                    longdescription: '181818Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur nostrum quae nobis aspernatur voluptate pariatur id repellendus facilis, magnam, perspiciatis deserunt ducimus dolorum tenetur, odit reprehenderit. Provident, necessitatibus delectus!',
                    picture: 'https://ae01.alicdn.com/kf/H5243dfff9d0b4e6bb91c07218ac7458dU/2022-Fashion-Butterfly-Love-Pendant-Necklace-Aesthetic-Jewelry-for-Women-Cute-Choker-Chain-Accessories-Gift-Female.jpg_Q90.jpg_.webp',
                    price: '1200',
                    category: 'chain',
                    rewiews: [
                        {
                            id: 1,
                            rating: 4,
                            text: "I love my new chain bracelet! It's simple but adds a nice touch to my daily outfit. The only thing I would change is the clasp, which can be a bit hard to open."
                        },
                    ]
                },
            ],
            // user: this.$store.getters.getUser,
            // filteredoneproduct: function (id) {
            //     this.allproductsforone =  this.filter(product => product.id == id);
            //     return  this.allproductsforone;
            // }
            _product: 'lll',
        }
    },
    emits: ['addToCart'],
    // props: {
    //     allproducts: Array
    // },
    methods:{
        addToCart(id, picture, category, description, price){
            localStorage.setItem('myCart', JSON.stringify(id));
            // localStorage.setItem('myCart', JSON.stringify(id, picture, category, description, price));
        },
    },
    mounted() {
        if (this.$route.params?.id) this.id = this.$route.params.id
        document.title = this.$route.meta.pageTitle
        console.log(parseInt(window.location.pathname.split('/')[2]))
    },
    watch: {
        $route(to, from) {
            if (to.params?.id != from.params?.id) {
                this.id = to.params.id;
            }
        }
    },
    components: {
        BaseHeader
    },
}
</script>
<style>
body {
    zoom: 0.8;
}

.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: rgb(253, 246, 235);

}

.wrapper {
    width: 100vw;
    height: 200vw;
    overflow: hidden;
    zoom: 0.98;
}

.df {
    display: flex;
}

.main {
    margin: 20px;
    flex-direction: row;
    gap: 50px;
    height: 420px;
    border-bottom: 2px solid rgb(216, 112, 112);
}

.pic img {
    width: 400px;
    height: 400px;
}

.prod {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
    color: rgb(216, 112, 112);
}

.type {
    font-family: "Trirong", sans-serif;
    font-size: 45px;
    font-weight: 1000;
    text-decoration: none;
}

.description {
    font-size: 30px;
    font-weight: 400;
    color: rgb(131, 34, 34);
}

.longdescription {
    font-size: 15px;
    text-align: start;
    font-weight: 400;
    color: rgb(131, 34, 34);
}

.price {
    font-size: 35px;
    text-align: start;
    font-weight: 600;
    color: rgb(216, 112, 112);
}

.reviews {
    font-size: 30px;
    font-weight: 400;
    color: rgb(131, 34, 34);
    text-align: start;
    font-weight: 600;
}

.revv {
    margin: 20px;
    height: 40px;
    border-bottom: 2px solid rgb(216, 112, 112);
}

.reviewrating {
    font-size: 30px;
    font-weight: 400;
}

.reviewtext {
    font-size: 20px;
    font-weight: 300;
    text-align: start;
    color: rgb(216, 112, 112);
}

.buttonp {
    /* width: 100px; */
    height: 30px;
    color: rgb(255, 228, 233);
    border-radius: 25px;
    padding: 10px 25px;
    font-family: "Trirong", sans-serif;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    background: rgb(216, 112, 112);
    background: linear-gradient(0deg, rgb(248, 141, 141) 0%, rgb(248, 141, 141) 100%);
    border: none;
}

.buttonp:hover {
    background: rgb(255, 172, 172);
    background: linear-gradient(0deg, rgb(239, 166, 166) 0%, rgb(255, 174, 174) 100%);
}
</style>