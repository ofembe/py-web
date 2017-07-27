import Vue from 'vue'
import Hello from '../../../src/js/components/hello.vue'

describe('Hello', () => {
  // Mount an instance and inspect the render output
  it('renders the correct message', () => {
    const Ctor = Vue.extend(Hello)
    const vm = new Ctor().$mount()
    expect(vm.$el.textContent).toBe('Welcome to Vue.js Moovup Demo App')
  })
})
