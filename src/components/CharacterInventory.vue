<template>
  <section>
    <h5>Inventory</h5>
    <div v-for="(item, index) in inventory" :key="index" class="item">
      <code>{{ item.slug }}</code>
      <div>{{ item.inventoryMessage }}</div>
      <div>used: {{ !item.neverUsed }}</div>
      <div>PuzzleSlug: {{ item.puzzleSlug }}</div>
    </div>
  </section>
</template>

<script>
import apiClient from "../api.js";

export default {
  name: "CharacterInventory",
  data() {
    return {
      inventory: null,
    };
  },
  methods: {
    async getAllData() {
      try {
        const res = await apiClient.get("/character/inventory");
        const response = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };
        this.inventory = response.data.response;
      } catch (err) {
        console.log(err.response.data);
        // this.inventory = this.fortmatResponse(err.response?.data) || err;
      }
    },
  },
  mounted() {
    this.getAllData();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  margin-bottom: 1rem;
}
</style>
