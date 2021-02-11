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
    <div class="q-gutter-y-md">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="definition" label="Definition" />
          <q-tab name="list" label="List" />
          <q-tab name="details" label="Details" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="definition">
            <div class="text-h6">Definition</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="list">
            <div class="text-h6">List</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="details">
            <div class="text-h6">Details</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
    <div v-if="isEditing" class="q-pa-md q-gutter-sm">
      <q-btn flat color="accent" :label="$t('cancel')" @click="cancelEdition" />
      <q-btn color="primary" :label="$t('save')" icon="save" @click="saveEdition" />
    </div>
  </q-page>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'AdminModelsType',
  props: {
    type: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const store = useStore()

    return {
      config: computed(() => store.getters.getConfig(props.type)),
      tab: ref('definition')
    }
  },
  data () {
    return {
      infos: {},
      isEditing: false,
      infosBeforeEdit: {}
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
