import Button from './Button'

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {}
}

const ButtonTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: '<Button v-bind="$props" />'
})

const BlockButtonTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: '<Button block v-bind:text=text v-bind:block=block />'
})

export const Primary = ButtonTemplate.bind({})
Primary.args = {
  text: 'Button'
}

export const BlockButton = BlockButtonTemplate.bind({})
BlockButton.args = {
  text: 'Button',
  block: true
}
