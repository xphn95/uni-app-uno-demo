"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_PubTitle2 = common_vendor.resolveComponent("PubTitle");
  const _easycom_TestProps2 = common_vendor.resolveComponent("TestProps");
  (_easycom_PubTitle2 + _easycom_TestProps2)();
}
const _easycom_PubTitle = () => "../../components/PubTitle/PubTitle.js";
const _easycom_TestProps = () => "../../components/TestProps/TestProps.js";
if (!Math) {
  (_easycom_PubTitle + _easycom_TestProps)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const navArr = common_vendor.ref([
      {
        id: 1,
        title: "\u9996\u9875"
      },
      {
        id: 2,
        title: "\u5217\u8868"
      },
      {
        id: 3,
        title: "\u8868\u5355"
      }
    ]);
    const navActiveId = common_vendor.ref(1);
    const clickNav = (index) => {
      navActiveId.value = index;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "\u8868\u5355\u9875\u6807\u9898",
          ["sub-title"]: "\u8868\u5355\u9875\u526F\u6807\u9898"
        }),
        b: common_vendor.p({
          msg: "\u8868\u5355\u9875\u6D4B\u8BD5\u6587\u5B57"
        }),
        c: common_vendor.f(navArr.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: item.id,
            c: item.id === navActiveId.value ? 1 : "",
            d: common_vendor.o(($event) => clickNav(item.id), item.id)
          };
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-654a95cb"], ["__file", "C:/Users/ning/Desktop/uni-app-uno-demo/src/pages/form/index.vue"]]);
wx.createPage(MiniProgramPage);
