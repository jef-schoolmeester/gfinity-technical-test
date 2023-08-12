import { mount } from '@vue/test-utils'

import StatisticComponent from '@/components/CardDetails/Statistic.vue'

const mockStatistics = {
    shortPassing: 84,
    freeKick: 74,
    crossing: 81,
    average: 81,
    vision: 84,
    longPassing: 69,
    curve: 87
}

describe('StatisticComponent', () => {
    test('should be Vue instance', () => {
        const wrapper = mount(StatisticComponent, {
        propsData: {
            name: 'pace',
            statistic: mockStatistics
        }
        })
        expect(wrapper.vm).toBeTruthy()
    })

    test('should render name and average', () => {
        const wrapper = mount(StatisticComponent, {
        propsData: {
            name: 'TEST',
            statistic: mockStatistics
        }
        })
        const labelText = wrapper.find('#statisticLabel').text()
        expect(labelText).toContain('TEST')
        expect(labelText).toContain('81')
    })

    test('should render all stat items', () => {
        const wrapper = mount(StatisticComponent, {
        propsData: {
            name: 'TEST',
            statistic: mockStatistics
        }
        })
        const items = wrapper.findAll('#statisticItem')
        expect(items.length).toBe(6)
    })
})