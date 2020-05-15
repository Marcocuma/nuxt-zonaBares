import { mount } from '@vue/test-utils'
import hero from '~/components/hero'

describe('HeroComponent', () => {
  const SLOT_CONTENT = '<p>Titulo de pruebas</p>'
  const wrapper = mount(hero, {
    slots: {
      header: SLOT_CONTENT
    }
  })
  test('is render inside slot', () => {
    expect(wrapper.html()).toContain(SLOT_CONTENT)
  })
})