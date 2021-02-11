<template>
  <q-page padding>
    <h5
      class="q-mb-md q-mt-none full-width row justify-between items-start content-start"
    >
      <span>Users</span>
      <q-btn
        color="secondary"
        :label="$t('add')"
        icon="add"
        @click="$router.push('/admin/users/new')"
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
  name: 'AdminUsers'
}
</script>
