<template>
  <section>
    <button v-if="!exits" @click="lookAround()">Look Around</button>

    <button
      v-for="(exit, index) in exits"
      :key="index"
      @click="lookDirection(exit)"
    >
      Look {{ exit }}
    </button>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CommandLook",
  props: {
    exits: {
      type: Array,
    },
  },
  methods: {
    ...mapActions(["lookAround", "lookDirection"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
