<template>
  <q-layout class="bg-grey">
    <q-page padding>
      <q-card class="fixed-center">
        <q-card-section>
          <h5>FineJoss</h5>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <q-input
            label="E-mail"
            type="email"
            v-model="email"
          />
          <q-input
            label="Mot de passe"
            type="password"
            v-model="password"
          />
          <div class="q-pa-md q-gutter-sm">
            <q-btn color="primary" label="Se connecter" @click="login(email, password)" :disabled="!email || !password" />
            <q-btn flat color="secondary" to="/forgotten-password" label="Mot de passe oublié ?" />
          </div>
         </q-card-section>
      </q-card>
    </q-page>
  </q-layout>
</template>

<script>
import { mapActions } from 'vuex'
import { auth } from 'boot/firebase'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  async created () {
    await auth.signOut()
    this.setAuthToken('')
  },
  methods: {
    ...mapActions([
      'setAuthToken'
    ]),
    async login (email, password) {
      try {
        const { user } = await auth.signInWithEmailAndPassword(email, password)
        // const snapshot = await db.collection('users').doc(user.uid).get()
        // const details = snapshot.data()
        console.log(user)
        this.setAuthToken(`OK: ${email}`)
        this.$router.push('/')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
