"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "PubTitle",
  props: {
    title: { type: String, required: false, default: "\u6587\u7AE0\u7684\u6807\u9898" },
    subTitle: { type: String, required: false, default: "\u6587\u7AE0\u7684\u526F\u6807\u9898" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(props.title),
        b: common_vendor.t(props.subTitle)
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1c1d3c2f"], ["__file", "C:/Users/ning/Desktop/uni-app-uno-demo/src/components/PubTitle/PubTitle.vue"]]);
wx.createComponent(Component);
