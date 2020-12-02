<template>
  <v-btn v-bind="$attrs">
    {{ text }}
    text
  </v-btn>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
