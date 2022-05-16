<template>
  <section class="list" v-if="corpses.length">
    <h6>Corpses</h6>
    <div
      v-for="corpse in corpses"
      :key="corpse.slug"
      :title="corpse.lookMessage"
      class="corpse"
    >
      {{ corpse.slug }}
    </div>
  </section>
</template>

<script>
export default {
  name: "CorpseList",
  props: {
    corpses: {
      type: Array,
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

.corpse {
  white-space: nowrap;
  background: rgb(0 0 0 / 12%);
  padding: 0.25rem;
  font-weight: 700;
  font-size: 0.65rem;
  text-shadow: 1px 1px #000;
  color: #ffedc0;
}
</style>
