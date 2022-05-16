<template>
  <section class="character-me__container">
    <h5>Me</h5>
    <div class="container" v-if="me.response">
      <div class="item">name: {{ me.response.adventurer.name }}</div>
      <div class="item">deaths: {{ me.response.adventurer.deaths }}</div>
      location
      <div class="item">slug: {{ me.response.location.puzzle.slug }}</div>
      <div class="item">name: {{ me.response.location.puzzle.name }}</div>
      <div class="item">room: {{ me.response.location.puzzle.room.slug }}</div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CharacterMe",
  computed: {
    ...mapGetters(["me"]),
  },
  methods: {
    ...mapActions(["fetchMe"]),
  },
  mounted() {
    this.fetchMe();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.character-me__container {
  margin-bottom: 1rem;
}

.container {
  padding: 0.25rem;
  padding: 0.25rem;
  width: 20rem;
  background: #4e2107;
}

.item {
  display: flex;
  font-size: 0.75rem;
  text-transform: uppercase;
  box-shadow: 1px 2px 8px 1px rgb(7 0 0 / 13%) inset;
  margin: 0.25rem;
  background: rgb(0 0 0 / 12%);
  padding: 0.25rem;
  font-weight: 700;
  text-shadow: 1px 1px #000;
  color: #ffedc0;
  flex-grow: 1;
}
</style>
