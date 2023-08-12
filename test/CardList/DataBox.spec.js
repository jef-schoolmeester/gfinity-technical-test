import { mount } from '@vue/test-utils'
import DataBox from '@/components/CardList/DataBox'

describe('DataBox', () => {
  test('should be Vue instance', () => {
    const wrapper = mount(DataBox, {
      propsData: {
        value: 'TEST'
      }
    })
    expect(wrapper.vm).toBeTruthy()
  })

  test('should render the value text', () => {
    const wrapper = mount(DataBox, {
      propsData: {
        value: 'TEST'
      }
    })
    expect(wrapper.text()).toBe("TEST")
  })

  test('should display base colors', () => {
    const wrapper = mount(DataBox, {
      propsData: {
        value: 'TEST',
        invertColors: false
      }
    })
    const roundedBoxClasses = wrapper.find('#roundedBox').classes()
    expect(roundedBoxClasses.find((value) => value.includes('bg-white'))).toBeFalsy()
    expect(roundedBoxClasses.find((value) => value.includes('text-black'))).toBeFalsy()
  })

  test('should invert colors', () => {
    const wrapper = mount(DataBox, {
      propsData: {
        value: 'TEST',
        invertColors: true
      }
    })
    const roundedBoxClasses = wrapper.find('#roundedBox').classes()
    expect(roundedBoxClasses.find((value) => value.includes('bg-white'))).toBeTruthy()
    expect(roundedBoxClasses.find((value) => value.includes('text-black'))).toBeTruthy()
  })

  test('should not have borders', () => {
    const wrapper = mount(DataBox, {
      propsData: {
        value: 'TEST',
        hasBorders: false
      }
    })
    const roundedBoxClasses = wrapper.find('#roundedBox').classes()
    expect(roundedBoxClasses.find((value) => value.includes('border-2'))).toBeFalsy()
    expect(roundedBoxClasses.find((value) => value.includes('border-white'))).toBeFalsy()
  })

  test('should display borders', () => {
    const wrapper = mount(DataBox, {
      propsData: {
        value: 'TEST',
        hasBorders: true
      }
    })
    const roundedBoxClasses = wrapper.find('#roundedBox').classes()
    expect(roundedBoxClasses.find((value) => value.includes('border-2'))).toBeTruthy()
    expect(roundedBoxClasses.find((value) => value.includes('border-white'))).toBeTruthy()
  })

  test('should be medium size', () => {
      const wrapper = mount(DataBox, {
      propsData: {
        value: 'TEST',
        isLarge: false
      }
    })
    const roundedBoxClasses = wrapper.find('#roundedBox').classes()
    expect(roundedBoxClasses.find((value) => value.includes('w-11'))).toBeTruthy()
    expect(roundedBoxClasses.find((value) => value.includes('w-20'))).toBeFalsy()
  })

  test('should be large size', () => {
      const wrapper = mount(DataBox, {
      propsData: {
        value: 'TEST',
        isLarge: true
      }
    })
    const roundedBoxClasses = wrapper.find('#roundedBox').classes()
    expect(roundedBoxClasses.find((value) => value.includes('w-11'))).toBeFalsy()
    expect(roundedBoxClasses.find((value) => value.includes('w-20'))).toBeTruthy()
  })
})
