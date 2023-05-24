<template>
    <div class="searchsort df">
        <form v-on:submit="sendSearch">
            <input v-model="_search" class="search" type="text" placeholder="search">
        </form>
        <select  v-model="_sort" @change="sendSort" class="sort">
            <option>ascending</option>
            <option>descending</option>
        </select>
    </div>
</template>
<script>
export default {
    name: 'search-sort-bar',
    data() {
        return {
            _search: '',
            _sort: '',
        }
    },
    emits: ['sendSearch, chageSort'],
    methods: {
        sendSearch() {
            this.$emit('sendSearch', this._search)
        },
        sendSort() {
            this.$emit('sendSort', this._sort)
        }
    }
}
</script>
<style>
.searchsort {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 10px;
}

.search {
    border-color: rgb(216, 112, 112);
}

::placeholder {
    color: rgb(216, 112, 112);
}

.sort {
    border-color: rgb(216, 112, 112);
    color: rgb(216, 112, 112);
}

option {
    border-radius: 0;
}
</style>