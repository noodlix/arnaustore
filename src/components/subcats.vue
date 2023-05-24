<template>
    <select v-model="_category" @change="sendCategory">
        <option>chain</option>
        <option>bracelet</option>
        <option>necklace</option>
        <option>rings</option>
        <option>sunglasses</option>
        <option>makeup</option>
    </select>
</template>
<script>
export default {
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
    },
}
</script>