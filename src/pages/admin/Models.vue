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
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card" v-for="conf in config" :key="conf.key">
        <q-card-section>
          <div class="text-h6">{{ conf.name }}</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>
        <q-card-section>
          Lorem
        </q-card-section>
        <q-card-actions>
          <q-btn flat @click="$router.push(`/admin/models/${conf.key}`)">Ouvrir</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'AdminModels',
  setup () {
    const store = useStore()

    return {
      config: computed(() => store.state.config)
    }
  }
}
</script>
