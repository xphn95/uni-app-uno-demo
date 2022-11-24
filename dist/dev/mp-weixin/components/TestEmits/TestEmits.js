"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "TestEmits",
  emits: ["changeValue"],
  setup(__props, { emit }) {
    const handleInput = (e) => {
      emit("changeValue", e.detail.value);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(handleInput)
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/ning/Desktop/uni-app-uno-demo/src/components/TestEmits/TestEmits.vue"]]);
wx.createComponent(Component);
