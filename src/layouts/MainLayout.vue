<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <navbar @toggle-drawer="leftDrawerOpen = !leftDrawerOpen" />

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      content-class="bg-grey-2"
      :width="240"
    >
      <q-scroll-area class="fit">
        <config-list @close="leftDrawerOpen = false" />
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import ConfigList from 'components/ConfigList.vue'
import Navbar from 'src/components/Navbar.vue'

export default {
  name: 'MainLayout',
  components: { ConfigList, Navbar },
  setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  }
}
</script>
