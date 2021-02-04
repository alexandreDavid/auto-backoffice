<template>
  <div class="flex flex-center">
    <h1 v-once>{{ config.name }}</h1>
    <div>Filters</div>
    <div>
      <table>
        <thead>
          <th v-for="field in config.fields" :key="field.value">
            {{ field.label }}
          </th>
          <th></th>
        </thead>
        <tr v-for="row in list" :key="row.id">
          <td v-for="field in config.fields" :key="field.id">
            {{ row[field.value] }}
          </td>
          <td><button @click="$router.push(`/${type}/${row.id}`)">Edit</button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    type: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      list: [
        {
          id: 1,
          label: "Label 1",
        },
        {
          id: 2,
          label: "Label 2",
        },
        {
          id: 3,
          label: "Label 3",
        },
      ],
    };
  },
  computed: {
    config() {
      return this.$store.getters.getConfig(this.type);
    },
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
