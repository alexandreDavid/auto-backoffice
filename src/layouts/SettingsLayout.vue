<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <navbar @toggle-drawer="leftDrawerOpen = !leftDrawerOpen" />

    <q-page-container>
      <div class="q-page q-pa-xl">
        <div class="row q-mb-md">
          <div>Test</div>
        </div>
        <div class="fit row wrap justify-between items-start content-start">
          <div class="col-sm-3 col-12 q-pr-none q-pr-sm-lg">
            <q-list bordered separator>
              <q-item-label header>{{ $t('settings') }}</q-item-label>

              <q-separator />

              <q-item clickable v-ripple v-for="(link, key) in list"
                :key="key" :active="link.route === $route.path"
                @click="$router.push(link.route)">
                <q-item-section>
                  <q-item-label>{{ link.label }}</q-item-label>
                </q-item-section>
              </q-item>

            </q-list>
          </div>
          <div class="col-sm-9 col-12">
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
      list: [
        { label: this.$t('account'), route: '/settings/account' },
        { label: this.$t('security'), route: '/settings/security' },
        { label: this.$t('appearance'), route: '/settings/appearance' },
        { label: this.$t('billing'), route: '/settings/billing' }
      ]
    }
  }
}
</script>
