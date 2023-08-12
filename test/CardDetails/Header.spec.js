import { mount } from '@vue/test-utils'

import Header from '@/components/CardDetails/Header.vue'

describe('Header', () => {
    test('should be Vue instance', () => {
        const wrapper = mount(Header, {
        propsData: {
            cardName: 'TEST'
        }
        })
        expect(wrapper.vm).toBeTruthy()
    })

    test('should render card name', () => {
        const wrapper = mount(Header, {
        propsData: {
            cardName: 'TEST'
        }
        })
        expect(wrapper.find('#headerText').text()).toBe('TEST')
    })
})
