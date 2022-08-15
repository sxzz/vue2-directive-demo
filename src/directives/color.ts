import { Directive } from 'vue'

export const vColor: Directive = {
  bind(el, binding) {
    el.style.color = binding.value
  },
}
