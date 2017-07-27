import Vue from 'vue'
import Validation from '../../../src/js/components/validation.vue'

describe('Validation', () => {
  // Mount an instance and inspect the render output
  it('renders the correct message', () => {
    const Ctor = Vue.extend(Validation)
    const vm = new Ctor().$mount()
    expect(vm.$el.textContent).toBe('All fields are required')
  })
})
