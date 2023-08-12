import { mount } from '@vue/test-utils'

import Information from '@/components/CardDetails/Information.vue'

describe('Information', () => {
    test('should be Vue instance', () => {
        const wrapper = mount(Information, {
        propsData: {
            name: 'TEST',
            value: 'info'
        }
        })
        expect(wrapper.vm).toBeTruthy()
    })

    test('should render name', () => {
        const wrapper = mount(Information, {
        propsData: {
            name: 'TEST',
            value: 'info'
        }
        })
        expect(wrapper.find('#informationName').text()).toBe('TEST')
    })

    test('should render value', () => {
        const wrapper = mount(Information, {
        propsData: {
            name: 'TEST',
            value: 'info'
        }
        })
        expect(wrapper.find('#informationValue').text()).toBe('info')
    })
})