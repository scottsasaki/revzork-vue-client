<template>
  <section>
    Events
    <div v-for="(event, index) in history" :key="index" class="event">
      <!-- Interactive Response -->
      <div v-if="event.responseType === 2">
        {{ event.response.description }}

        <div class="actions">
          <CommandMove :exits="event.response.exits" />
          <CommandLook :exits="event.response.exits" />
        </div>
      </div>

      <!-- dead end, let user do previous things -->
      <div v-if="event.responseType === 0">
        {{ event.response }}
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import CommandMove from "./CommandMove.vue";
import CommandLook from "./CommandLook.vue";

export default {
  name: "EventList",
  components: {
    CommandMove,
    CommandLook,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["history"]),
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.event:not(:empty) {
  opacity: 0.5;
  max-width: 30rem;
  padding: 1rem;
  margin: 0.5rem;
  border: 2px solid #ccc;
  border-radius: 1rem;
}
.event:last-of-type {
  opacity: 1;
}
</style>
