<template>
  <div>
    <v-dialog v-model="dialog">
      <v-card>...</v-card>
    </v-dialog>

    <v-btn @click.stop="dialog = true">
      Open Dialog
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  data: () => ({
    dialog: false
  })
}
</script>
