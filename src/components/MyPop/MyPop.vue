<script setup lang="ts">
interface Props {
  state: boolean
}
const props = withDefaults(defineProps<Props>(), {
  state: false
})
interface Emits {
  (e: 'close-pop', value: boolean): void
}
const emits = defineEmits<Emits>()

const closePop = () => {
  emits('close-pop', false)
}
</script>

<template>
  <view>
    <view>---方块样式---</view>
    <view
      w-300rpx
      :class="props.state ? 'h-300rpx' : 'h-0'"
      bg-pink-3
    />
    <button
      size="mini"
      @click="closePop"
    >
      关闭
    </button>
  </view>
</template>
