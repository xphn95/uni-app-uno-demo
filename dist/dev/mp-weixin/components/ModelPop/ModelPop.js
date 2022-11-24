"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "ModelPop",
  props: {
    showPop: { type: Boolean, required: true, default: false }
  },
  emits: ["update:showPop"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const handleClose = () => {
      emits("update:showPop", false);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.n(props.showPop ? "h-300rpx" : ""),
        b: common_vendor.o(handleClose)
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-26ca4acf"], ["__file", "C:/Users/ning/Desktop/uni-app-uno-demo/src/components/ModelPop/ModelPop.vue"]]);
wx.createComponent(Component);
