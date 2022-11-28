<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'

const msg = ref('hello world')

const goBack = () => {
  uni.navigateBack({})
}

onLoad(e => {
  console.log(e.wd, e.pw)
  console.log(getCurrentPages())
})
</script>

<template>
  <view>
    <view>
      {{ msg }}
    </view>
    <view @click="goBack">
      返回上一页
    </view>
  </view>
</template>
