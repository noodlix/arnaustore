<template>
    <div class="products df">
        <div v-for="elem in allproducts.filter(elem => elem.category == cat)" :key="elem.id" class="product1 df">
            <div class="prdesc df">{{ elem.description }}</div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            allproducts: [
                {
                    id: 1,
                    description: 'солнцезащитные очки🔥',
                    price: '🏷1800тг',
                    category: 'sunglasses'
                },
                {
                    id: 2,
                    description: 'массивные кольца💞',
                    price: '🏷1200тг',
                    category: 'rings'
                },
                {
                    id: 3,
                    description: 'Y2K кольца💓',
                    price: '🏷500тг',
                    category: 'rings'
                },
                {
                    id: 4,
                    description: 'колечки в виде бабочек🦋',
                    price: '🏷700тг',
                    category: 'rings'
                },
                {
                    id: 5,
                    description: 'элегантные колечки✨',
                    price: '🏷900тг',
                    category: 'rings'
                },
                {
                    id: 6,
                    description: 'колечки кристаллы💞',
                    price: '🏷1200тг',
                    category: 'rings'
                },
                {
                    id: 7,
                    description: 'парные колечки 💜',
                    price: '🏷1200тг',
                    category: 'rings'
                },
                {
                    id: 8,
                    description: 'розовые колечки💗',
                    price: '🏷1000тг',
                    category: 'rings'
                },
                {
                    id: 9,
                    description: 'серебристые колечки🤍',
                    price: '🏷750тг',
                    category: 'rings'
                },
                {
                    id: 10,
                    description: 'цепочка',
                    price: '🏷"1500тг',
                    category: 'chain'
                },
                {
                    id: 11,
                    description: 'браслет',
                    price: '🏷"550тг',
                    category: 'bracelet'
                },
                {
                    id: 12,
                    description: 'разноцветный браслетик',
                    price: '🏷"900тг',
                    category: 'bracelet'
                },
                {
                    id: 13,
                    description: 'ожерелье',
                    price: '🏷"1700тг',
                    category: 'necklace'
                },
                {
                    id: 14,
                    description: 'милое ожерелье',
                    price: '🏷"1100тг',
                    category: 'necklace'
                },
                {
                    id: 15,
                    description: 'очки сердечки',
                    price: '🏷"1800тг',
                    category: 'sunglasses'
                },
                {
                    id: 16,
                    description: 'персиковые румяна',
                    price: '🏷"1200тг',
                    category: 'makeup'
                },
                {
                    id: 17,
                    description: 'натуральные румяна',
                    price: '🏷"1900тг',
                    category: 'makeup'
                },
                {
                    id: 19,
                    description: 'цепочка',
                    price: '🏷"1200тг',
                    category: 'chain'
                },
            ],
        }
    },
    props: {
        cat: String
    },
}
</script>