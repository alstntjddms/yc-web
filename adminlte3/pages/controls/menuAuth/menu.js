$(".searchLoadingModal").html(await $.get("searchLoadingModal.html"));
$(".menuModal").html(await $.get("menuModal.html"));

const a = new Vue({
  el: "#app",
  data: {
    mode: "default",
    user: {},
    users: [],
    menuAuth: {},
    menuAuths: [],
    menus: [],
  },
  mounted: async function () {
    const self = this;

    // 데이터 로드
    await this.loadData();

    // 기본 jqueyr설정들
    $(".modal-dialog").draggable({
      handle: ".modal-header",
    });
    $(".modal").on("hidden.bs.modal", function () {
      self.mode = "default";
    });
    this.hideLoadingOverlay();
  },
  methods: {
    loadData: async function () {
      // 유저 로드
      await axios.get("http://localhost:8081/api/kace/users").then((res) => {
        this.users = res.data;
        console.log(this.users);
      });

      // 모든 메뉴 목록 로드
      await axios.get("http://localhost:8081/api/kace/menus").then((res) => {
        this.menus = res.data;
      });

      // 첫번째 유저 메뉴권한 로드(초기세팅)
      await axios
        .get("http://localhost:8081/api/kace/menu/auth/1")
        .then((res) => {
          console.log(res.data);
          this.menuAuths = res.data;
          this.user = this.users[0];
        });
    },
    clickUser: async function (user) {
      this.user = user;
      await axios
        .get("http://localhost:8081/api/kace/menu/auth/" + user.ac_ID)
        .then((res) => {
          console.log(res.data);
          this.menuAuths = res.data;
        });
    },

    clickMenuAuth: async function (menuAuth) {
      // $("#loadingModal").modal("show");
      this.menuAuth = menuAuth;
      $("#modal-xl").modal("toggle");
      // $("#loadingModal").modal("hide");
    },
    clickAddMenu: async function () {
      // this.mode = "add";
      // this.menu = {
      //   menuCode: "",
      //   menuTitle: "",
      //   menuIcon: "",
      //   menuLink: "",
      //   menuBadgeText: "",
      //   menuClass: "",
      //   parentCode: "",
      // };
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
    clickUpdateMenuAuth: async function () {
      this.mode = "update";
    },
    updateMenuAuth: async function () {
      await axios
        .put("http://localhost:8081/api/kace/menu/auth", this.menuAuth)
        .then((res) => {
          console.log(res);
          $("#modal-xl").modal("toggle");
          this.Toast.fire({
            icon: "success",
            title: "메뉴 권한 수정 성공!!!",
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
