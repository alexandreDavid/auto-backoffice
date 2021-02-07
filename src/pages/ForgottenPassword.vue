<template>
  <q-layout class="bg-grey">
    <q-page padding>
      <q-card class="fixed-center">
        <q-card-section>
          <q-btn @click="$router.go(-1)" flat label="retour" />
          <h5>Mot de passe oublié</h5>
          <p>Saisissez votre email pour réinitialiser votre mot de passe</p>
          <q-input
            label="E-mail"
            type="email"
            v-model="email"
          />
          <div class="q-pa-md q-gutter-sm">
            <q-btn color="primary" label="Envoyer le mail" @click="sendMail(email)" :disabled="!email" />
          </div>
          <div class="q-pa-md q-gutter-sm" v-show="sent">
            <p>Email envoyé.Veuillez cliquer sur le lien reçu dans votre boite mail pour réinitialiser votre mot de passe.</p>
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
