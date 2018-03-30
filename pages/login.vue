<template lang="pug">
.container
  h1 login
  input(type='button'
        value='Login in with Google'
        @click='doLogin')
</template>

<script>
import firebase from '@/plugins/firebase'
import { mapActions } from 'vuex'

export default {
  async mounted () {
    let user = await new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => resolve(user))
    })
    this.setUser(user) // setUser is mapped action from vuex
    if (user) {
      this.$router.push('/') // if non-null user given, go to root page.
    }
  },

  methods: {
    ...mapActions([
      'login',
      'setUser'
    ]),

    doLogin () {
      this.login()
        .then(() => console.log('resloved'))
        .catch((err) => console.log(err))
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
