"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "MyPop",
  props: {
    state: { type: Boolean, required: true, default: false }
  },
  emits: ["close-pop"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const closePop = () => {
      emits("close-pop", false);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.n(props.state ? "h-300rpx" : "h-0"),
        b: common_vendor.o(closePop)
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5e96604a"], ["__file", "C:/Users/ning/Desktop/uni-app-uno-demo/src/components/MyPop/MyPop.vue"]]);
wx.createComponent(Component);
