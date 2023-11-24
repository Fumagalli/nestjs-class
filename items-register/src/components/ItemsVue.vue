<script>
export default {
    data() {
        return {
            items: []
        }
    },
    mounted() {
        this.getItems();
    },
    methods: {
        async getItems() {
            const response = await fetch('http://localhost:3000/items');
            const data = await response.json();

            this.items = data;
        }
    },
}
</script>

<template>
    <div>
        <h1>Items</h1>

        <div v-if="items">
            <div v-for="(item, index) in items" key={index}>
                <RouterLink :to="`/items/${item.id}`">#{{ item.id }} - {{ item.name }}</RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
