import { useStorage } from '@vueuse/core'

export const items = useStorage('items', [])
