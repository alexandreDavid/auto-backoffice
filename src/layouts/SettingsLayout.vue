<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <navbar @toggle-drawer="leftDrawerOpen = !leftDrawerOpen" />

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      content-class="bg-grey-2"
      :width="240"
    >
      <q-scroll-area class="fit">
        <config-list @close="leftDrawerOpen = false" />
      </q-scroll-area>
    </q-drawer> -->

    <q-page-container>
      <div class="q-page q-pa-xl">
        <div class="row q-mb-md">
          <div>Test</div>
        </div>
        <div class="fit row wrap justify-between items-start content-start">
          <div class="col-md-3 col-12 q-pr-lg">
            List
          </div>
          <div class="col-md-9 col-12">
            <router-view />
          </div>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import Navbar from 'src/components/Navbar.vue'

export default {
  name: 'SettingsLayout',
  components: { Navbar },
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
