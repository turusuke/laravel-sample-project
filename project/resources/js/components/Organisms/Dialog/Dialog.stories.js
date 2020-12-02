import Dialog from './Dialog'

export default {
  title: 'Organisms/Dialog',
  component: Dialog,
  argTypes: {}
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Dialog },
  template: '<Dialog v-bind="$props" />'
})

export const Primary = Template.bind({})
Primary.args = {}
