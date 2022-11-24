<template>
  <PubTitle />
  <view c-amber-5>
    list
  </view>
  <text select-none>
    select
  </text>
  <scroll-view
    border="red 1px solid"
    box-border
    scroll-x
  >
    <view
      whitespace-nowrap
      class="
        [&>view]:w-220rpx
        [&>view]:h-220rpx
        [&>view]:inline-block
        [&>view]:bg-rose-2
        [&>view]:mr-2
        [&>view:last-child]:mr-0
      "
    >
      <view
        v-for="item of 10"
        :key="item"
      >
        {{ 222 }}
      </view>
    </view>
  </scroll-view>
  <swiper
    indicator-dots
    circular
    autoplay
  >
    <swiper-item
      v-for="item of 3"
      :key="item"
      flex
      justify-center
      items-center
      class="
        [&:first-child]:bg-rose-3
        [&:nth-child(2)]:bg-orange-2
        [&:last-child]:bg-lime-2
      "
    >
      <image
        :src="`/static/homepage/banner${item}.jpg`"
        mode="aspectFill"
        w-full
        h-full
      />
    </swiper-item>
  </swiper>
  <video src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4" />
</template>

<script setup lang="ts">

</script>
