<script lang="ts">
export default {
  data() {
    return {
      item: null
    }
  },
  mounted() {
    this.getItemDetails();
  },
  methods: {
    async getItemDetails() {
      const response = await fetch(`http://localhost:3000/items/${this.$route.params.id}`);
      const data = await response.json();

      this.item = data;
    }
  },
}
</script>

<template>
  <main>
    <div v-if="!item">
      <h1>Carregando</h1>
    </div>

    <div v-if="item">
      <h1>{{ item.name }} #{{ item.id }}</h1>
      <p>Publico? {{ item.public }}</p>

      <br />
      <p>Descrição:</p>
      <p>{{ item.listing.description }}</p>
      
      <br />
      <p>Nota: {{ item.listing.rating }}</p>

      <br />
    
      <div v-if="item.comments">
        <h2>Comentarios</h2>
        <p v-for="(comment, index) in item.comments" v-key="{ index }">
          {{ comment.id }} - {{ comment.content }}
        </p>
      </div>

      <br />
      <hr />
      <br />

      <div v-if="item.tags">
        <h2>Tags</h2>
        <p v-for="(tag, index) in item.tags" v-key="{ index }">
          {{ tag.id }} - {{ tag.content }}
        </p>
      </div>

      <br />
      <hr />
    </div>
  </main>
</template>

