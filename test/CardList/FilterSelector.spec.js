import { mount } from '@vue/test-utils'
import FilterSelector from '@/components/CardList/FilterSelector'

describe('FilterSelector', () => {
  test('should be Vue instance', () => {
    const wrapper = mount(FilterSelector, {
      propsData: {
        name: 'Test',
        property: 'name',
        currentSort: ['name', 'asc']
      }
    })
    expect(wrapper.vm).toBeTruthy()
  })

  test('should render name', () => {
    const wrapper = mount(FilterSelector, {
      propsData: {
        name: 'Test',
        property: 'name',
        currentSort: ['name', 'asc']
      }
    })
    expect(wrapper.text()).toBe('Test')
  })

  test('should not display sort', () => {
    const wrapper = mount(FilterSelector, {
      propsData: {
        name: 'Test',
        property: 'name',
        currentSort: ['test', 'asc']
      }
    })
    expect(wrapper.vm.$data.isSortedAsc).toBeFalsy()
    expect(wrapper.vm.$data.isSortedDesc).toBeFalsy()
  })

  test('should display asc sort', () => {
    const wrapper = mount(FilterSelector, {
      propsData: {
        name: 'Test',
        property: 'name',
        currentSort: ['name', 'asc']
      }
    })
    expect(wrapper.vm.$data.isSortedAsc).toBeTruthy()
    expect(wrapper.vm.$data.isSortedDesc).toBeFalsy()
  })

  test('should display desc sort', () => {
    const wrapper = mount(FilterSelector, {
      propsData: {
        name: 'Test',
        property: 'name',
        currentSort: ['name', 'desc']
      }
    })
    expect(wrapper.vm.$data.isSortedAsc).toBeFalsy()
    expect(wrapper.vm.$data.isSortedDesc).toBeTruthy()
  })

  test('should update data', async () => {
    const wrapper = mount(FilterSelector, {
      propsData: {
        name: 'Test',
        property: 'name',
        currentSort: ['name', 'desc']
      }
    })
    expect(wrapper.vm.$data.isSortedAsc).toBeFalsy()
    expect(wrapper.vm.$data.isSortedDesc).toBeTruthy()

    await wrapper.setProps({
      name: 'Test',
      property: 'name',
      currentSort: ['name', 'asc']
    })

    expect(wrapper.vm.$data.isSortedAsc).toBeTruthy()
    expect(wrapper.vm.$data.isSortedDesc).toBeFalsy()

    await wrapper.setProps({
      name: 'Test',
      property: 'name',
      currentSort: ['test', 'asc']
    })

    expect(wrapper.vm.$data.isSortedAsc).toBeFalsy()
    expect(wrapper.vm.$data.isSortedDesc).toBeFalsy()
  })
})
