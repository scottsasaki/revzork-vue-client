<template>
  <CommandLook />
  <img alt="Vue logo" src="./assets/logo.png" />

  <event-list />

  <character-inventory />
</template>

<script>
import CharacterInventory from "./components/CharacterInventory.vue";
import CommandLook from "./components/CommandLook.vue";
import EventList from "./components/EventList.vue";

export default {
  name: "App",
  components: {
    CharacterInventory,
    CommandLook,
    EventList,
  },
  computed: {},
  methods: {},
};
</script>

<style>
@import "./reset.css";
body {
  line-height: 1.5rem;
}

#app {
  font-family: "Open Sans", "Helvetica", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Press Start 2P";
}
</style>
