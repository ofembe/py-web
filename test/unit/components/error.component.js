import Vue from 'vue'
import Error from '../../../src/js/components/error.vue'

describe('Error', () => {
  // Mount an instance and inspect the render output
  it('renders the correct message', () => {
    const Ctor = Vue.extend(Error)
    const vm = new Ctor().$mount()
    expect(vm.$el.textContent).toBe('Error processing request. Please try again later')
  })
})
