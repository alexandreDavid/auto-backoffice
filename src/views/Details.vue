<template>
  <div class="flex flex-center">
    <h1 v-once>{{ infos.title }}</h1>
    <div v-for="field in config.fields" :key="field.value">
      <label>{{ field.label }}</label>
      {{ infos[field.value] }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Details",
  props: {
    type: {
      type: String,
      required: true,
    },
    id: {
      type: [Number, String],
      required: true,
    },
  },
  data() {
    return {
      infos: {},
    };
  },
  computed: {
    config() {
      return this.$store.getters.getConfig(this.type);
    },
  },
  created() {
    this.infos = {
      id: this.id,
      label: "Label test",
      title: "testada",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
