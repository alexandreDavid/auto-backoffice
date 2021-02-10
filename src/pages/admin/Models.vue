<template>
  <q-page padding>
    <h5
      class="q-mb-md q-mt-none full-width row justify-between items-start content-start"
    >
      <span>Models</span>
      <q-btn
        color="secondary"
        :label="$t('add')"
        icon="add"
        @click="$router.push('/admin/models/new')"
      />
    </h5>
    <q-card class="my-card">
      <q-card-section>
        Lorem
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'AdminModels',
  props: {
    type: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      config: {},
      list: [],
      fields: [],
      filters: [],
      queries: {}
    }
  }
}
</script>
