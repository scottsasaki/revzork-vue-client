<template>
  <section class="list" v-if="notes.length">
    <h6>Notes</h6>
    <div
      v-for="note in notes"
      :key="note.slug"
      :title="note.lookMessage"
      class="note"
    >
      {{ note.slug }}
    </div>
  </section>
</template>

<script>
export default {
  name: "NoteList",
  props: {
    notes: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h6 {
  font-size: 0.75rem;
}

.list {
  background: #4e2107;
}

.note {
  white-space: nowrap;
  background: rgb(0 0 0 / 12%);
  padding: 0.25rem;
  font-weight: 700;
  font-size: 0.65rem;
  text-shadow: 1px 1px #000;
  color: #ffedc0;
}
</style>
