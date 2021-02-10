<template>
  <div
    class="bg-white text-grey-8 q-py-xs"
    height-hint="58"
    v-if="$q.screen.lt.md"
  >
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        @click="$emit('close')"
        aria-label="Menu"
        icon="menu"
      />

      <q-btn flat no-caps no-wrap class="q-ml-xs">
        <q-icon :name="icon" color="red" size="28px" />
        <q-toolbar-title shrink class="text-weight-bold">
          FineJoss
        </q-toolbar-title>
      </q-btn>
    </q-toolbar>

    <q-separator class="q-my-xs" />
  </div>
  <q-list padding>
    <q-item
      v-for="link in config"
      :key="link.key"
      v-ripple
      clickable
      :active="link.route === $route.path"
      active-class="bg-grey-3 text-dark text-bold"
      @click="$router.push(link.route)"
    >
      <q-item-section avatar>
        <q-icon
          :color="link.route === $route.path ? 'red' : 'grey'"
          :name="link.icon"
        />
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ link.text }}</q-item-label>
      </q-item-section>
    </q-item>

  </q-list>
</template>

<style>
</style>

<script>

import { fab500px } from '@quasar/extras/fontawesome-v5'
export default {
  name: 'ConfigList',
  emits: ['close'],
  data () {
    return {
      icon: fab500px,
      config: [
        { icon: 'table_view', text: 'Models', route: '/admin/models' },
        { icon: 'lock', text: 'Rights', route: '/admin/rights' },
        { icon: 'supervisor_account', text: 'Users', route: '/admin/users' }
      ]
    }
  }
}
</script>
