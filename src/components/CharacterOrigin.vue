<template>
  <button @click="goToOrigin()">Go to origin/die</button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CharacterOrigin",
  methods: {
    ...mapActions(["goToOrigin"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
