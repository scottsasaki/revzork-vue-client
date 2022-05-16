<template>
  <form @submit="saveKey" class="unauth">
    <img alt="RevZork" src="../assets/logo.svg" />
    <div>API KEY</div>
    <input type="text" v-model="key" />
    <button type="submit">Play</button>
  </form>
</template>

<script>
export default {
  name: "InputApiKey",
  data() {
    return {
      key: "",
    };
  },
  methods: {
    saveKey() {
      this.$store.commit("setApiKey", this.key);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.unauth {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
</style>
