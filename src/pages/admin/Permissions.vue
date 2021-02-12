<template>
  <q-page padding>
    <h5
      class="q-my-none full-width row justify-between items-start content-start"
    >
      <span class="q-mb-md">{{ $t('permissions') }}</span>
      <q-btn
        color="secondary"
        :label="$t('add')"
        icon="add"
        @click="$router.push('/admin/permissions/new')"
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
  name: 'AdminRights'
}
</script>
