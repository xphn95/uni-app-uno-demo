<script setup lang="ts">
interface TestProps {
  msg?: string
}

const props = withDefaults(defineProps<TestProps>(), {
  msg: '这里是一段文字'
})

</script>

<template>
  <view
    c-purple-3
    fw-700
    text-30px
    text-center
  >
    {{ props.msg }}
  </view>
</template>
