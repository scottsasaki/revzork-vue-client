<template>
  <div>
    <section class="events">
      <div v-for="(event, index) in history" :key="index" class="event">
        <!-- Interactive Response -->
        <div v-if="event.responseType === 2" class="interactive">
          <div>
            {{ event.response.description }}
          </div>
          <div class="sidebar">
            <NoteList :notes="event.response.notes" />
            <CorpseList :corpses="event.response.corpses" />
          </div>
        </div>

        <!-- dead end, let user do previous things -->
        <div v-if="event.responseType === 1">
          {{ event.response }}
        </div>

        <!-- dead end, let user do previous things -->
        <div v-if="event.responseType === 0">
          {{ event.response }}
        </div>
      </div>
    </section>

    <section>
      <!-- Actions for last interative event -->
      <div v-if="history.length" class="actions">
        <div class="actions">
          <CommandMove :exits="lastEventWithActions.response.exits" />
          <CommandLook :exits="lastEventWithActions.response.exits" />
          <CommandDoodad :doodads="lastEventWithActions.response.doodads" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CommandMove from "./CommandMove.vue";
import CommandLook from "./CommandLook.vue";
import CommandDoodad from "./CommandDoodad.vue";
import CorpseList from "./CorpseList.vue";
import NoteList from "./NoteList.vue";

export default {
  name: "EventList",
  components: {
    CommandMove,
    CommandLook,
    CommandDoodad,
    CorpseList,
    NoteList,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["history"]),
    lastEventWithActions() {
      return this.history.find((event) => event.responseType === 2);
    },
    lastEventWithActionsIndex() {
      return this.history.findIndex((event) => event.responseType === 2);
    },
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.events {
  margin-bottom: 1rem;
}

.actions {
  margin: 0.75rem;
}

.interactive {
  display: flex;
  gap: 0.5rem;
}

.event:not(:empty) {
  opacity: 0.5;
  padding: 1rem;
  margin: 0.5rem;
  border: 2px solid #ccc;
  border-radius: 1rem;
}

.event:last-of-type {
  opacity: 1;
}
</style>
