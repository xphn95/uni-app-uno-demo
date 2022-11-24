"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "TestProps",
  props: {
    msg: { type: String, required: false, default: "\u8FD9\u91CC\u662F\u4E00\u6BB5\u6587\u5B57" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(props.msg)
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-608272e6"], ["__file", "C:/Users/ning/Desktop/uni-app-uno-demo/src/components/TestProps/TestProps.vue"]]);
wx.createComponent(Component);
