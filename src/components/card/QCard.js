export default {
  name: 'QCard',
  props: {
    square: Boolean,
    dark: Boolean,
    flat: Boolean,
    inline: Boolean
  },
  computed: {
    classes () {
      return {
        'q-card--dark': this.dark,
        'q-card--square no-border-radius': this.square,
        'q-card--flat no-shadow': this.flat,
        'inline-block': this.inline
      }
    }
  },
  render (h) {
    return h('div', {
      staticClass: 'q-card generic-border-radius',
      'class': this.classes
    }, this.$slots.default)
  }
}
