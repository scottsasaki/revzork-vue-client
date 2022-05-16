<template>
  <section>
    <h5>Inventory</h5>
    <div class="inventory-container">
      <div v-for="(item, index) in inventory" :key="index" class="item">
        <div class="label">
          <code>{{ item.slug }}</code>
        </div>
        <div class="actions">
          <button @click="useDoodad(item.slug)">Use</button>
        </div>

        <!-- <div>{{ item.inventoryMessage }}</div>
        <div>used: {{ !item.neverUsed }}</div>
        <div>PuzzleSlug: {{ item.puzzleSlug }}</div> -->
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CharacterInventory",
  computed: {
    ...mapGetters(["inventory"]),
  },
  methods: {
    ...mapActions(["fetchInventory", "useDoodad"]),
  },
  mounted() {
    this.fetchInventory();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inventory-container {
  padding: 0.25rem;
  padding: 0.25rem;
  width: 20rem;
  background: #4e2107;
}

.item {
  display: flex;
  font-size: 0.75rem;
  text-transform: uppercase;
  gap: 0.25rem;
  grid-template-columns: 16rem 3rem;
  box-shadow: 1px 2px 8px 1px rgb(7 0 0 / 13%) inset;
  margin: 0.25rem;
  background: rgb(0 0 0 / 12%);
  padding: 0.25rem;
  font-weight: 700;
  text-shadow: 1px 1px #000;
  color: #ffedc0;
}

.label {
  flex-grow: 1;
}

button {
  border: 0;
  padding: 0.25rem;
  text-transform: uppercase;
  font-size: 0.75rem;
  background: #c35211;
}
</style>
