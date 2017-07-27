import Vue from 'vue'
import Error from '../../../src/js/components/error.vue'

describe('Error', () => {
  it('renders the correct message', () => {
    const Ctor = Vue.extend(Error)
    const vm = new Ctor().$mount()
    expect(vm.$el.textContent).toBe('Error processing request. Please try again later')
  })
})
