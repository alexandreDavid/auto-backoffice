<template>
  <q-page padding>
    <h5
      class="q-my-none full-width row justify-between items-start content-start"
    >
      <span class="q-mb-md">{{ config.name }}</span>
      <q-btn
        color="secondary"
        :label="$t('add')"
        icon="add"
        @click="$router.push(`/models/${type}/new`)"
      />
    </h5>
    <q-card flat class="q-mb-lg" v-if="filters.length">
      <q-card-section class="row q-px-none">
        <q-input
          clearable
          dense
          v-for="(filter, key) in filters"
          :key="key"
          class="col-12 col-sm-6 col-md-4 q-px-md"
          v-model="queries[filter.query]"
          :label="filter.label"
          change="setFilter"
        />
      </q-card-section>
    </q-card>
    <q-markup-table v-if="fields.length">
      <thead>
        <tr>
          <th v-for="field in fields" :key="field.value" class="text-left">
            {{ field.label }}
          </th>
          <th></th>
        </tr>
      </thead>
      <tr v-for="row in list" :key="row.id">
        <td v-for="field in fields" :key="field.id">
          {{ row[field.value] }}
        </td>
        <td class="text-right">
          <q-btn
            flat
            @click="$router.push(`/models/${type}/${row.id}`)"
            color="primary"
            :label="$t('details')"
          />
        </td>
      </tr>
    </q-markup-table>
  </q-page>
</template>

<script>
export default {
  name: 'List',
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
  },
  watch: {
    type () {
      this.onTypeChanges()
    },
    queries: {
      deep: true,
      handler (query) {
        Object.keys(query).forEach(
          (key) => query[key] === null && delete query[key]
        )
        this.$router.push({ query: query })
      }
    }
  },
  created () {
    this.onTypeChanges()
    if (this.$route.query) {
      this.queries = { ...this.$route.query }
    }
  },
  methods: {
    onTypeChanges () {
      this.config = this.$store.getters.getConfig(this.type)
      const list = this.config.list
      if (!list) {
        this.list = []
        this.fields = []
        this.filters = []
        return
      }
      if (list.data.type === 'static') {
        this.list = list.data.values
      }
      if (list.fields) {
        this.fields = this.config.list.fields
      } else {
        this.fields = this.config.fields
      }
      this.filters = list.filters || []
    }
  }
}
</script>
