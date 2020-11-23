<template>
  <div class="container">
    <Header />
  </div>
</template>

<script>
import Header from '../../Organisms/Header/Header'
export default {
  components: { Header },
  mounted() {
    console.log('Component mounted.')
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 3em 10px;
}
</style>
