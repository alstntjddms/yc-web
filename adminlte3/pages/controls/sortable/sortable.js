// $(".menuSearch").html(await $.get("menuSearch.html"));
// $(".searchLoadingModal").html(await $.get("searchLoadingModal.html"));
// $(".menuModal").html(await $.get("menuModal.html"));

const a = new Vue({
  el: "#app",
  data: {
    mode: "default",
    menu: {
      menuCode: null,
      menuTitle: null,
      menuIcon: null,
      menuLink: null,
      menuBadgeText: null,
      menuClass: null,
      parentCode: null,
    },
    menus: [],
    list: [
      { name: "mine", title: "vue" },
      { name: "it", title: "v-for" },
      { name: "record", title: "list" },
    ],
  },
  mounted: async function () {
    await axios.get("http://localhost:8081/api/kace/menus").then((res) => {
      this.menus = res.data;
    });
    this.hideLoadingOverlay();
    $(".modal-dialog").draggable({
      handle: ".modal-header",
    });
  },
  methods: {
    clickData: async function (menu) {
      console.log(menu);
      this.menu = menu;
      $("#modal-xl").modal("toggle");
    },
    search: async function () {
      $("#loadingModal").modal("show");
      setTimeout(() => {
        console.log("3초 후에 풀림");
        $("#loadingModal").modal("hide");
      }, 3000);
    },
    // 로딩 오버레이 숨기기
    hideLoadingOverlay: async function () {
      const overlay = $("#overlay");
      overlay.animate({ top: "100%", opacity: 0 }, 500, function () {
        overlay.hide();
      });
    },
  },
});

export default a;

// 정상적으로 열렸는지 감지코드
// if (self !== top) {
//   alert("정상적으로 켜짐");
// } else {
//   alert("따로 켜짐");
// }
