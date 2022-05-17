<template>
  <div class="app-container">
    <!-- Unauth -->
    <template v-if="!apiKey">
      <InputApiKey />
    </template>

    <!-- Authed -->
    <template v-if="apiKey">
      <section class="app-container__left"></section>
      <section class="app-container__center">
        <img alt="RevZork" src="./assets/logo.svg" />
        <CommandLook />

        <EventList />
      </section>
      <section class="app-container__right">
        <CharacterMe />
        <GoToCommands />

        <CharacterInventory />

        <a
          href="https://revzork.revunit.com/"
          target="_blank"
          rel="noopener noreferrer"
          >Leaderboard ↗</a
        >
      </section>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CharacterInventory from "./components/CharacterInventory.vue";
import CharacterMe from "./components/CharacterMe.vue";
import GoToCommands from "./components/GoToCommands.vue";
import CommandLook from "./components/CommandLook.vue";
import EventList from "./components/EventList.vue";
import InputApiKey from "./components/InputApiKey.vue";

export default {
  name: "App",
  components: {
    CharacterInventory,
    CharacterMe,
    CommandLook,
    EventList,
    InputApiKey,
    GoToCommands,
  },
  computed: {
    ...mapGetters(["apiKey"]),
  },
  methods: {},
};
</script>

<style>
@import "./reset.css";

body {
  line-height: 1.25em;
  color: #ccc;
  background-color: #121212;
  padding: 1rem;
}

#app {
  font-family: "Open Sans", "Helvetica", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Press Start 2P";
}

.app-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 1rem;
}

.app-container__center {
  display: flex;
  flex-direction: column;
  align-items: center;

  max-height: calc(100vh - 2rem);
  overflow-y: auto;
}
</style>
