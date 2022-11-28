"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_PubTitle2 = common_vendor.resolveComponent("PubTitle");
  const _easycom_TestEmits2 = common_vendor.resolveComponent("TestEmits");
  const _easycom_MyPop2 = common_vendor.resolveComponent("MyPop");
  const _easycom_ModelPop2 = common_vendor.resolveComponent("ModelPop");
  const _easycom_HelloWorld2 = common_vendor.resolveComponent("HelloWorld");
  (_easycom_PubTitle2 + _easycom_TestEmits2 + _easycom_MyPop2 + _easycom_ModelPop2 + _easycom_HelloWorld2)();
}
const _easycom_PubTitle = () => "../../components/PubTitle/PubTitle.js";
const _easycom_TestEmits = () => "../../components/TestEmits/TestEmits.js";
const _easycom_MyPop = () => "../../components/MyPop/MyPop.js";
const _easycom_ModelPop = () => "../../components/ModelPop/ModelPop.js";
const _easycom_HelloWorld = () => "../../components/HelloWorld/HelloWorld.js";
if (!Math) {
  (_easycom_PubTitle + _easycom_TestEmits + _easycom_MyPop + _easycom_ModelPop + _easycom_HelloWorld)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const sex = common_vendor.ref(["\u5973", "\u7537", "\u4FDD\u5BC6"]);
    const options = common_vendor.ref(["\u9AD8\u4E2D", "\u5927\u4E13", "\u672C\u79D1", "\u7855\u58EB"]);
    const userEdu = common_vendor.ref(options.value[0]);
    const selectEdu = (e) => {
      userEdu.value = options.value[e.detail.value];
    };
    const res = common_vendor.ref({
      sex: "",
      edu: ""
    });
    const handleSubmit = (e) => {
      res.value.sex = e.detail.value.sex;
      res.value.edu = options.value[+e.detail.value.edu];
    };
    const inputValue = common_vendor.ref("");
    const getChangeValue = (v) => {
      inputValue.value = v;
      console.log(v);
    };
    const state = common_vendor.ref(false);
    const showPop = () => {
      state.value = true;
    };
    const closePop = (newValue) => {
      state.value = newValue;
    };
    const goPage4 = () => {
      common_vendor.index.navigateTo({
        url: "/pages/navtest/index"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "\u9996\u9875\u6807\u9898",
          ["sub-title"]: "\u9996\u9875\u7684\u526F\u6807\u9898"
        }),
        b: common_vendor.o(getChangeValue),
        c: common_vendor.t(inputValue.value),
        d: common_vendor.t(state.value),
        e: common_vendor.o(showPop),
        f: common_vendor.o(closePop),
        g: common_vendor.p({
          state: state.value
        }),
        h: common_vendor.o(($event) => state.value = $event),
        i: common_vendor.p({
          showPop: state.value
        }),
        j: common_vendor.o(goPage4),
        k: common_vendor.f(sex.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index,
            c: item,
            d: item === "\u4FDD\u5BC6"
          };
        }),
        l: common_vendor.t(userEdu.value),
        m: options.value,
        n: common_vendor.o(selectEdu),
        o: common_vendor.o(handleSubmit),
        p: common_vendor.t(res.value)
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5b685826"], ["__file", "C:/Users/ning/Desktop/uni-app-uno-demo/src/pages/home/index.vue"]]);
wx.createPage(MiniProgramPage);
