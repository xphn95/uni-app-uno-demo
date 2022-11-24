"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_PubTitle2 = common_vendor.resolveComponent("PubTitle");
  _easycom_PubTitle2();
}
const _easycom_PubTitle = () => "../../components/PubTitle/PubTitle.js";
if (!Math) {
  _easycom_PubTitle();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.f(10, (item, k0, i0) => {
      return {
        a: item
      };
    }),
    b: common_vendor.t(222),
    c: common_vendor.f(3, (item, k0, i0) => {
      return {
        a: `/static/homepage/banner${item}.jpg`,
        b: item
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-335db125"], ["__file", "C:/Users/ning/Desktop/uni-app-uno-demo/src/pages/list/index.vue"]]);
wx.createPage(MiniProgramPage);
