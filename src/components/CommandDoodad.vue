<template>
  <section>
    <button
      v-for="doodad in doodads"
      :key="doodad.slug"
      @click="getDoodad(doodad.slug)"
    >
      Pickup {{ doodad.slug }}
    </button>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CommandDoodad",
  props: {
    doodads: {
      type: Array,
    },
  },
  methods: {
    ...mapActions(["getDoodad"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
