<template>
  <q-layout class="bg-grey">
    <q-page padding>
      <q-card class="fixed-center">
        <q-card-section>
          <q-btn @click="$router.go(-1)" flat :label="$t('back')" icon="keyboard_arrow_left" />
          <h5>{{ $t('forgottenPassword') }}</h5>
          <p>{{ $t('enterMail') }}</p>
          <q-input
            :label="$t('mail')"
            type="email"
            name="email"
            v-model="email"
          />
          <div class="q-pa-md q-gutter-sm">
            <q-btn color="primary" :label="$t('sendMail')" @click="sendMail(email)" :disabled="!email" />
          </div>
          <div class="q-pa-md q-gutter-sm" v-show="sent">
            <p>{{ $t('emailSuccess') }}</p>
          </div>
         </q-card-section>
      </q-card>
    </q-page>
  </q-layout>
</template>

<script>
import { auth } from 'boot/firebase'

export default {
  name: 'forgotten-password',
  data () {
    return {
      email: '',
      sent: false
    }
  },
  methods: {
    async sendMail (email) {
      try {
        await auth.sendPasswordResetEmail(email)
        this.sent = true
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
