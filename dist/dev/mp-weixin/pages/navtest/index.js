"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const msg = common_vendor.ref("hello world");
    const goBack = () => {
      common_vendor.index.navigateBack({});
    };
    common_vendor.onLoad((e) => {
      console.log(e.wd, e.pw);
      console.log(getCurrentPages());
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(msg.value),
        b: common_vendor.o(goBack)
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/ning/Desktop/uni-app-uno-demo/src/pages/navtest/index.vue"]]);
wx.createPage(MiniProgramPage);
