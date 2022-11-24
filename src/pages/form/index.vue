<template>
  <PubTitle
    title="表单页标题"
    sub-title="表单页副标题"
  />
  <TestProps msg="表单页测试文字" />
  <button
    size="mini"
    type="primary"
  >
    确认提交
  </button>
  <button
    size="mini"
    type="primary"
    :plain="true"
  >
    确认提交
  </button>
  <button
    size="mini"
    type="primary"
    :plain="true"
    :loading="true"
  >
    确认提交
  </button>
  <navigator
    url="/pages/index/index"
    open-type="reLaunch"
  >
    首页
  </navigator>
  <navigator
    url="/pages/list/index"
    open-type="reLaunch"
  >
    列表
  </navigator>
  <navigator
    url="/pages/form/index"
    open-type="reLaunch"
  >
    表单
  </navigator>
  <view
    bg-yellow-3
    w-full
    h-1
  />
  <view
    flex
    justify-around
    items-center
    bg-gray-2
  >
    <view
      v-for="item in navArr"
      :key="item.id"
      flex-1
      leading-90rpx
      text-center
      class="[&.active]:bg-rose-4 [&.active]:c-white"
      :class="{active: item.id === navActiveId}"
      @click="clickNav(item.id)"
    >
      {{ item.title }}
    </view>
  </view>
</template>

<script setup lang="ts">
interface NavArr {
  id: number,
  title: string
}

interface ClickNav {
  (index: number): void
}

const navArr = ref<Array<NavArr>>([
  {
    id: 1,
    title: '首页'
  },
  {
    id: 2,
    title: '列表'
  },
  {
    id: 3,
    title: '表单'
  }
])

const navActiveId = ref(1)

const clickNav: ClickNav = (index) => {
  navActiveId.value = index
}
</script>
