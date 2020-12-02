<template>
  <v-app>
    <v-main class="container">
      <v-container>
        <Header />
        <h1>Hello World</h1>
      </v-container>
      <Dialog />
    </v-main>
  </v-app>
</template>

<script>
import Header from '../../Organisms/Header/Header'
import Dialog from '../../Organisms/Dialog/Dialog'

export default {
  name: 'Top',
  components: { Dialog, Header },
  mounted() {
    console.log('Component mounted.')
  }
}
</script>

<style lang="scss" scoped>
.container {
  border: 1px solid;
}
</style>
