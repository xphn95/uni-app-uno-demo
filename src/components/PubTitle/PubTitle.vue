<script setup lang="ts">
interface Props {
  title?: string,
  subTitle?: string
}
const props = withDefaults(defineProps<Props>(), {
  title: '文章的标题',
  subTitle: '文章的副标题'
})
// const title = ref('文章的标题')

</script>

<template>
  <view
    py-60rpx
    px-30rpx
    text-center
  >
    <view
      text-50rpx
      fw-600
      c-bluegray-5
    >
      {{ props.title }}
    </view>
    <view
      text-28rpx
      c-warmgray-5
    >
      {{ props.subTitle }}
    </view>
    <view
      inline-block
      w-80rpx
      h-8rpx
      b-rd-10rpx
      bg-emerald-5
    />
  </view>
</template>
