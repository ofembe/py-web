import Vue from 'vue'
import Distance from '../../../src/js/components/distance.vue'

// helper function that mounts and returns the rendered text
function getRenderedText (Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData: propsData }).$mount()
  return vm.$el.textContent
}
describe('Distance', () => {
  it('renders correctly with different props', () => {
    expect(getRenderedText(Distance, {
      distance: {distance: "1 km", duration: "2 min"}
    })).toBe('The shortest distance is 1 km Duration is 2 min by car')
    expect(getRenderedText(Distance, {
      distance: {distance: "2 km", duration: "4 m"}
    })).toBe('The shortest distance is 2 km Duration is 4 min by car')
  })
})
