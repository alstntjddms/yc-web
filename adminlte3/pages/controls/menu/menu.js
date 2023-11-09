$(".menuSearch").html(await $.get("menuSearch.html"));
$(".searchLoadingModal").html(await $.get("searchLoadingModal.html"));
$(".menuModal").html(await $.get("menuModal.html"));

const a = new Vue({
  el: "#app",
  data: {
    mode: "default",
    menu: {
      menuCode: "",
      menuTitle: "",
      menuIcon: "",
      menuLink: "",
      menuBadgeText: "",
      menuClass: "",
      parentCode: "",
    },
    menus: [],
  },
  mounted: async function () {
    const self = this;

    await this.loadData();

    $(".modal-dialog").draggable({
      handle: ".modal-header",
    });
    $(".modal").on("hidden.bs.modal", function (e) {
      self.mode = "default";
    });

    this.hideLoadingOverlay();
  },
  methods: {
    loadData: async function () {
      await axios.get("http://localhost:8081/api/kace/menus").then((res) => {
        this.menus = res.data;
      });
    },
    clickData: async function (menu) {
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
    clickAddMenu: async function () {
      this.mode = "add";
      this.menu = {
        menuCode: "",
        menuTitle: "",
        menuIcon: "",
        menuLink: "",
        menuBadgeText: "",
        menuClass: "",
        parentCode: "",
      };
      $("#modal-xl").modal("toggle");
    },
    addMenu: async function () {
      await axios
        .post("http://localhost:8081/api/kace/menu", this.menu)
        .then((res) => {
          console.log(res);
          $("#modal-xl").modal("toggle");
          this.Toast.fire({
            icon: "success",
            title: "메뉴 저장 성공!!!",
          });
        });
      await this.loadData();
    },
    clickUpdateMenu: async function () {
      this.mode = "update";
    },
    updateMenu: async function () {
      await axios
        .put("http://localhost:8081/api/kace/menu", this.menu)
        .then((res) => {
          console.log(res);
          $("#modal-xl").modal("toggle");
          this.Toast.fire({
            icon: "success",
            title: "메뉴 수정 성공!!!",
          });
        });
      await this.loadData();
    },
    deleteMenu: async function () {
      if (confirm("메뉴를 삭제하시겠습니까?")) {
        await axios
          .delete(
            "http://localhost:8081/api/kace/menu?menuCode=" + this.menu.menuCode
          )
          .then((res) => {
            console.log(res);
            $("#modal-xl").modal("toggle");
            this.Toast.fire({
              icon: "success",
              title: "메뉴 삭제 성공!!!",
            });
          });
        await this.loadData();
      }
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
