<template>
  <section v-for="doodad in doodads" :key="doodad.slug">
    <button @click="getDoodad(doodad.slug)">Pickup {{ doodad.slug }}</button>

    <button @click="inspectDoodad(doodad.slug)">
      Inspect {{ doodad.slug }}
    </button>

    <button @click="useDoodad(doodad.slug)">Use {{ doodad.slug }}</button>

    <div>
      Use {{ doodad.slug }} with ...
      <select name="useWithItem" id="useWithItem" v-model="item">
        <option v-for="item in inventory" :key="item.slug">
          {{ item.slug }}
        </option>
      </select>

      <button @click="useDoodadWithItem(doodad.slug)">Use With</button>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CommandDoodad",
  props: {
    doodads: {
      type: Array,
    },
  },
  data() {
    return {
      item: "",
    };
  },
  computed: {
    ...mapGetters(["inventory"]),
  },
  methods: {
    ...mapActions(["getDoodad", "inspectDoodad", "useDoodad", "useDoodadWith"]),
    useDoodadWithItem(slug) {
      const arr = [this.item, slug];
      this.useDoodadWith(arr);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
