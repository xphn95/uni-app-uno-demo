"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "HelloWorld",
  setup(__props) {
    const msg = common_vendor.ref("hello easycom!!");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(msg.value)
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/ning/Desktop/uni-app-uno-demo/src/components/HelloWorld/HelloWorld.vue"]]);
wx.createComponent(Component);
