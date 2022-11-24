<script setup lang="ts">
interface Emits {
  (e: 'changeValue', value: string): void
}
const emit = defineEmits<Emits>()

interface InputEvent {
  detail: {
    cursor: number,
    value: string
  },
  [props: string]: any
}

const handleInput = (e: InputEvent) => {
  emit('changeValue', e.detail.value)
}

</script>

<template>
  <view>
    <input
      type="text"
      @input="handleInput"
    >
  </view>
</template>
