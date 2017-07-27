import Vue from 'vue'
import App from '../../src/js/App.vue'

describe('hello.vue', () => {
  it('sets the correct default data', () => {
    expect(typeof App.data).toBe('function')
    const defaultData = App.data()
    expect(defaultData.distance).toBe(0)
  })
})
