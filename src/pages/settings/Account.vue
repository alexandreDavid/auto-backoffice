<template>
  <h4>Profile</h4>
  <div class="row reverse-sm">
    <div class="col-12 col-md-4">
      <div class="text-subtitle2">Profile picture</div>
      <q-avatar size="200px">
        <img src="https://cdn.quasar.dev/img/avatar.png">
      </q-avatar>
    </div>
    <div class="col-12 col-md-8 q-pr-none q-pr-md-xl">
      <q-input v-model="name" outlined label="Name" class="q-mb-md" />
      <q-input v-model="mail" outlined type="email" :label="$t('mail')" />
    </div>
  </div>
  <h4>Trending settings</h4>
  spoken language
  <h4>delete account</h4>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    return {
      name: ref(''),
      mail: ref('')
    }
  }
}
</script>
