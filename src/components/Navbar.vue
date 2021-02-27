<template>
  <q-header class="bg-white text-grey-8 q-py-xs" height-hint="58">
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        @click="$emit('toggleDrawer')"
        aria-label="Menu"
        icon="menu"
      />

      <q-btn flat no-caps no-wrap class="q-ml-xs" v-if="$q.screen.gt.xs" @click="$router.push('/')">
        <q-icon :name="icon" color="red" size="28px" />
        <q-toolbar-title shrink class="text-weight-bold">
          FineJoss
        </q-toolbar-title>
      </q-btn>

      <q-space />

      <div class="YL__toolbar-input-container row no-wrap">
        <q-input
          dense
          outlined
          square
          v-model="search"
          placeholder="Search"
          class="bg-white col"
        />
        <q-btn
          class="YL__toolbar-input-btn"
          color="grey-3"
          text-color="grey-8"
          icon="search"
          unelevated
        />
      </div>

      <q-space />

      <div class="q-gutter-sm row items-center no-wrap">
        <q-btn
          round
          dense
          flat
          color="grey-8"
          icon="settings"
          v-if="$q.screen.gt.sm"
          @click="$router.push('/admin')"
        >
          <q-tooltip>Administration</q-tooltip>
        </q-btn>
        <q-btn
          round
          dense
          flat
          color="grey-8"
          icon="apps"
          v-if="$q.screen.gt.sm"
        >
          <q-tooltip>Apps</q-tooltip>
        </q-btn>
        <q-btn
          round
          dense
          flat
          color="grey-8"
          icon="message"
          v-if="$q.screen.gt.sm"
        >
          <q-tooltip>Messages</q-tooltip>
        </q-btn>
        <q-btn round dense flat color="grey-8" icon="notifications">
          <q-badge color="red" text-color="white" floating> 2 </q-badge>
          <q-tooltip>Notifications</q-tooltip>
        </q-btn>
        <q-btn round flat>
          <q-avatar size="26px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <q-tooltip>Account</q-tooltip>
          <q-menu auto-close>
            <q-list style="min-width: 100px">
              <q-item clickable>
                <q-item-section>New tab</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>New incognito tab</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-item-section>Recent tabs</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>History</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Downloads</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable @click="$router.push('/settings/account')">
                <q-item-section>{{ $t('settings') }}</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-item-section>Help &amp; Feedback</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable @click="logout" class="text-negative">
                <q-item-section>{{ $t('logout') }}</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { auth } from 'boot/firebase'

import { fab500px } from '@quasar/extras/fontawesome-v5'

export default {
  name: 'Navbar',
  emits: ['toggleDrawer'],
  setup () {
    const store = useStore()
    const router = useRouter()

    return {
      leftDrawerOpen: ref(false),
      search: ref(''),
      icon: fab500px,
      logout: async () => {
        await auth.signOut()
        store.commit('setAuthToken', '')
        router.go('/login')
      }
    }
  }
}
</script>

<style lang="sass">
.YL
  &__toolbar-input-container
    min-width: 100px
    width: 55%
  &__toolbar-input-btn
    border-radius: 0
    border-style: solid
    border-width: 1px 1px 1px 0
    border-color: rgba(0,0,0,.24)
    max-width: 60px
    width: 100%
  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem
    &:hover
      color: #000
</style>
