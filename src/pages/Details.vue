<template>
  <q-page padding>
    <h5
      class="q-mb-md q-mt-none full-width row justify-between items-start content-start"
    >
      <span>{{ config.name }}</span>
      <q-btn
        v-if="!isEditing"
        color="secondary"
        :label="$t('edit')"
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
      <q-btn flat color="accent" :label="$t('cancel')" @click="cancelEdition" />
      <q-btn color="primary" :label="$t('save')" icon="save" @click="saveEdition" />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Details',
  props: {
    type: {
      type: String,
      required: true
    },
    id: {
      type: [Number, String],
      required: true
    }
  },
  data () {
    return {
      infos: {},
      isEditing: false,
      infosBeforeEdit: {}
    }
  },
  computed: {
    config () {
      return this.$store.getters.getConfig(this.type)
    }
  },
  created () {
    if (this.id === 'new') {
      this.isEditing = true
    } else {
      this.infos = {
        id: this.id,
        label: 'Label test',
        title: 'testada'
      }
    }
  },
  methods: {
    edit () {
      this.isEditing = true
      this.infosBeforeEdit = { ...this.infos }
    },
    cancelEdition () {
      this.isEditing = false
      if (this.id === 'new') {
        this.$router.go(-1)
      }
      this.infos = this.infosBeforeEdit
    },
    saveEdition () {
      this.isEditing = false
    }
  }
}
</script>
