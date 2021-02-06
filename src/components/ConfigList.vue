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
      :active="activeLink === link.key"
      active-class="bg-grey-3 text-dark text-bold"
      @click="$router.push(`/${link.key}`)"
    >
      <q-item-section avatar>
        <q-icon
          :color="activeLink === link.key ? 'red' : 'grey'"
          :name="link.icon"
        />
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ link.name }}</q-item-label>
      </q-item-section>
    </q-item>

    <q-item
      v-for="link in links1"
      :key="link.text"
      v-ripple
      clickable
      @click="$router.push(`/${link.text}`)"
    >
      <q-item-section avatar>
        <q-icon color="grey" :name="link.icon" />
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ link.text }}</q-item-label>
      </q-item-section>
    </q-item>

    <q-separator class="q-my-md" />

    <!-- <q-item v-for="link in links2" :key="link.text" v-ripple clickable>
      <q-item-section avatar>
        <q-icon color="grey" :name="link.icon" />
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ link.text }}</q-item-label>
      </q-item-section>
    </q-item>

    <q-separator class="q-mt-md q-mb-xs" />

    <q-item-label header class="text-weight-bold text-uppercase">
      More from Youtube
    </q-item-label>

    <q-item v-for="link in links3" :key="link.text" v-ripple clickable>
      <q-item-section avatar>
        <q-icon color="grey" :name="link.icon" />
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ link.text }}</q-item-label>
      </q-item-section>
    </q-item>

    <q-separator class="q-my-md" />

    <q-item v-for="link in links4" :key="link.text" v-ripple clickable>
      <q-item-section avatar>
        <q-icon color="grey" :name="link.icon" />
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ link.text }}</q-item-label>
      </q-item-section>
    </q-item>

    <q-separator class="q-mt-md q-mb-lg" />

    <div class="q-px-md text-grey-9">
      <div class="row items-center q-gutter-x-sm q-gutter-y-xs">
        <a
          v-for="button in buttons1"
          :key="button.text"
          class="YL__drawer-footer-link"
          href="javascript:void(0)"
        >
          {{ button.text }}
        </a>
      </div>
    </div>
    <div class="q-py-md q-px-md text-grey-9">
      <div class="row items-center q-gutter-x-sm q-gutter-y-xs">
        <a
          v-for="button in buttons2"
          :key="button.text"
          class="YL__drawer-footer-link"
          href="javascript:void(0)"
        >
          {{ button.text }}
        </a>
      </div>
    </div> -->
  </q-list>
</template>

<style>
</style>

<script>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

import { fab500px, fabYoutube } from "@quasar/extras/fontawesome-v5";
export default {
  name: "ConfigList",
  setup() {
    const route = useRoute();
    const activeLink = ref();

    watch(
      () => route.params,
      async (newParams) => {
        activeLink.value = newParams.type;
      }
    );

    return { activeLink };
  },
  emits: ["close"],
  data() {
    return {
      icon: fab500px,
      links1: [
        { icon: "home", text: "Home" },
        { icon: "whatshot", text: "Trending" },
        { icon: "subscriptions", text: "Subscriptions" },
      ],
      links2: [
        { icon: "folder", text: "Library" },
        { icon: "restore", text: "History" },
        { icon: "watch_later", text: "Watch later" },
        { icon: "thumb_up_alt", text: "Liked videos" },
      ],
      links3: [
        { icon: fabYoutube, text: "YouTube Premium" },
        { icon: "local_movies", text: "Movies & Shows" },
        { icon: "videogame_asset", text: "Gaming" },
        { icon: "live_tv", text: "Live" },
      ],
      links4: [
        { icon: "settings", text: "Settings" },
        { icon: "flag", text: "Report history" },
        { icon: "help", text: "Help" },
        { icon: "feedback", text: "Send feedback" },
      ],
      buttons1: [
        { text: "About" },
        { text: "Press" },
        { text: "Copyright" },
        { text: "Contact us" },
        { text: "Creators" },
        { text: "Advertise" },
        { text: "Developers" },
      ],
      buttons2: [
        { text: "Terms" },
        { text: "Privacy" },
        { text: "Policy & Safety" },
        { text: "Test new features" },
      ],
    };
  },
  computed: {
    config() {
      return this.$store.state.config;
    },
  },
};
</script>
