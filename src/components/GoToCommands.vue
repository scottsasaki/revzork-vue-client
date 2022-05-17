<template>
  <section class="commands">
    <button
      @click="goToOrigin()"
      title="Returns you to the start of the Labyrinth.  Will add a Death to your counter."
    >
      Origin
    </button>
    <button
      @click="goToRecall()"
      title="Returns you to the start of the current Puzzle.  Will add a Death to your counter."
    >
      Recall
    </button>
    <button
      @click="goToResume()"
      title="Returns you to Trophy Room of the last Puzzle you have solved.  Will add a Death to your counter."
    >
      Resume
    </button>
    <button
      @click="goToTeleport()"
      title="Returns you to Entrance Room of a given Puzzle (slug).  Will add a Death to your counter.  WARNING!  If you skip ahead beyond a Puzzle you have yet to solve, the Puzzle you teleport to may be unsolvable."
    >
      Teleport
    </button>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "GoToCommands",
  methods: {
    ...mapActions(["goToOrigin", "goToRecall", "goToResume", "goToTeleport"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.commands button {
  margin-right: 0.25rem;
}

.commands {
  margin-bottom: 1rem;
}
</style>
