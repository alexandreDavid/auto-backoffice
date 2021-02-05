<template>
  <q-page padding>
    <h5
      class="q-mb-md q-mt-none full-width row justify-between items-start content-start"
    >
      <span>{{ config.name }}</span>
      <q-btn
        v-if="!isEditing"
        color="secondary"
        label="Edit"
        icon="edit"
        @click="edit"
      />
    </h5>
    <div class="q-gutter-md">
      <q-input
        v-for="field in config.fields"
        :key="field.value"
        :label="field.label"
        v-model="infos[field.value]"
        dense
        :readonly="!isEditing"
      />
    </div>
    <div v-if="isEditing" class="q-pa-md q-gutter-sm">
      <q-btn flat color="accent" label="Cancel" @click="cancelEdition" />
      <q-btn color="primary" label="Save" icon="save" @click="saveEdition" />
    </div>
  </q-page>
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
      isEditing: false,
      infosBeforeEdit: {},
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
  methods: {
    edit() {
      this.isEditing = true;
      this.infosBeforeEdit = { ...this.infos };
    },
    cancelEdition() {
      this.isEditing = false;
      this.infos = this.infosBeforeEdit;
    },
    saveEdition() {
      this.isEditing = false;
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
