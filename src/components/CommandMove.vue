<template>
  <section>
    <button
      v-for="(direction, index) in exits"
      :key="index"
      @click="move(`${direction}`)"
    >
      Move {{ direction }}
    </button>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CommandMove",
  props: {
    exits: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["moveDirection"]),

    async move(direction) {
      this.moveDirection(direction);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
