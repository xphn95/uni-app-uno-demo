<template>
  <PubTitle
    title="首页标题"
    sub-title="首页的副标题"
  />
  <TestEmits
    @changeValue="getChangeValue"
  />
  <view>{{ inputValue }}</view>
  <button @click="showPop">
    开启{{ state }}
  </button>
  <MyPop
    :state="state"
    @closePop="closePop"
  />
  <ModelPop v-model:showPop="state" />
  <navigator url="/pages/navtest/index?wd=uni&pw=123">
    跳转到page4
  </navigator>
  <view
    text-rose-3
    @click="goPage4"
  >
    跳转到page4
  </view>
  <form @submit="handleSubmit">
    <view class="[&>view]:my-2">
      <view>
        <radio-group
          name="sex"
          class="[&>radio]:mr-2 [&>radio:last-child]:mr-0"
        >
          <radio
            v-for="item, index in sex"
            :key="index"
            :value="item"
            :checked="item === '保密'"
          >
            {{ item }}
          </radio>
        </radio-group>
      </view>
      <view>
        <picker
          name="edu"
          value=""
          mode="selector"
          :range="options"
          @change="selectEdu"
        >
          <view>选择学历: {{ userEdu }}</view>
        </picker>
      </view>
      <view>
        <button
          form-type="submit"
          type="primary"
        >
          提交
        </button>
        <button form-type="reset">
          重置
        </button>
      </view>
    </view>
  </form>
  {{ res }}
  <HelloWorld />
</template>

<script setup lang="ts">
import type { SelectorPickerProps } from '@uni-helper/uni-app-types'

// 性别
type Sex = Array<'女'|'男'|'保密'>
const sex = ref<Sex>(['女', '男', '保密'])

// 学历
type Options = Array<'高中'|'大专'|'本科'|'硕士'>
const options = ref<Options>(['高中', '大专', '本科', '硕士'])
const userEdu = ref(options.value[0])

const selectEdu: SelectorPickerProps['onChange'] = (e) => {
  const index = e?.detail?.value ?? 0
  userEdu.value = options.value[index]
}

// 结果
interface MyFormProps {
  sex: string,
  edu: string
}

const res = ref<MyFormProps>({
  sex: '',
  edu: ''
})

// 提交

const handleSubmit = (e: any) => {
  res.value.sex = e.detail.value.sex
  res.value.edu = options.value[+e.detail.value.edu]
}

// 获取子组件传来的值
const inputValue = ref<string>('')
const getChangeValue = (v: string): void => {
  inputValue.value = v
  console.log(v)
}

// 方块显示
const state = ref<boolean>(false)
const showPop = () => {
  state.value = true
}
const closePop = (newValue: boolean) => {
  state.value = newValue
}

const goPage4 = () => {
  uni.navigateTo({
    url: '/pages/navtest/index'
  })
}
</script>
