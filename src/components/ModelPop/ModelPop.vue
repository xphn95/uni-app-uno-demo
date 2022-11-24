<script setup lang="ts">
interface Props {
  showPop: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showPop: false
})

interface Emits {
  (event: 'update:showPop', newValue: boolean): void
}

const emits = defineEmits<Emits>()

const handleClose = () => {
  emits('update:showPop', false)
}
</script>

<template>
  <view>---方块样式---</view>
  <view
    w-300rpx
    :class="props.showPop ? 'h-300rpx' : ''"
    bg-pink-2
  />
  <button
    type="warn"
    size="mini"
    @click="handleClose"
  >
    关闭
  </button>
</template>
