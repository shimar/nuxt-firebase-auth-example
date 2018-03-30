<template lang="pug">
.container
  h1 index
  input(type='button'
        value='Logout'
        @click='doLogout')
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'logout'
    ]),

    doLogout () {
      this.logout()
        .then(() => {
          this.$router.push('/login')
        })
        .catch((err) => console.log(err))
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
