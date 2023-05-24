<template>
    <div class="header2 df">
        <div class="categories df">
            <!-- <button @click="changeCategory()" class="category">Chains</button> -->
            <!-- <button @click="changeCategory(bracelet)" class="category">Bracelets</button>
          <button @click="changeCategory(necklace)" class="category">Necklaces</button>
          <button @click="changeCategory(rings)" class="category">Rings</button>
          <button @click="changeCategory(sunglasses)" class="category">Sunglasses</button>
          <button @click="changeCategory(make-up)" class="category">Make-Up</button> -->
            Choose a category:
            <select class="select" v-model="_category" @change="sendCategory">
                <option>[object Object]</option>
                <option>chain</option>
                <option>bracelet</option>
                <option>necklace</option>
                <option>rings</option>
                <option>sunglasses</option>
                <option>makeup</option>
            </select>
        </div>
    </div>
</template>
<script>
export default {
    name: 'categories',
    data() {
        return {
            _category: '',
        }
    },
    emits: ['sendCategory'],
    methods: {
        sendCategory() {
            this.$emit('sendCategory', this._category)
        }
    }
}
</script>
<style>
.df {
    display: flex;
}

.header2 {
    height: 50px;
    width: 100vw;
    background-color: rgb(253, 246, 235);
    flex-direction: column;
    justify-content: center;
    border-bottom: 2px solid rgb(216, 112, 112);

}

.categories {
    flex-direction: row;
    gap: 20px;
    text-decoration: underline rgb(216, 112, 112);
    color: rgb(216, 112, 112);
    font-size: 25px;
    font-family: "Trirong", serif;
}

.category {
    background-color: rgb(253, 246, 235);
    border: none;
    text-decoration: underline rgb(216, 112, 112);
    color: rgb(216, 112, 112);
    font-size: 15px;
    font-family: "Trirong", serif;
}

.select {
    border: 2px solid rgb(216, 112, 112);
}
</style>