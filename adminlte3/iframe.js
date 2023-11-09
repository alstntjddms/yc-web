import {
  getSosoJwtToken,
  getExpirationFromToken,
  getNameFromToken,
  getCookie,
} from "./framework/computed.js";

new Vue({
  el: "#app",
  data: {
    name: "전민수",
    minsu: true,
    timeDisplay: "59:59",
    menuItems: [],
  },
  created: async function () {},
  mounted: async function () {
    // this.checkJwtToken();
    // this.name = await this.setName();
    // if (this.name == "전민수") {
    //   this.minsu = true;
    // }
    // const jwt = getCookie("sosoJwtToken");
    // if (jwt) {
    //   setInterval(() => {
    //     // if(getCookie("sosoJwtToken") == ""){
    //     //   window.location.href = './login.html';
    //     // }
    //     const expiration = getExpirationFromToken(jwt);
    //     const remaining = this.getTimeRemaining(expiration);
    //     this.timeDisplay =
    //       remaining.hours === "00"
    //         ? `${remaining.minutes}:${remaining.seconds}`
    //         : `${remaining.hours}:${remaining.minutes}:${remaining.seconds}`;
    //   }, 1000);
    // } else {
    //   // window.location.href = './login.html';
    // }
    // 로딩 오버레이를 숨기는 함수를 비동기 함수 내에서 호출
    await axios
      .get("http://localhost:8081/api/kace/menu/1")
      .then((res) => {
        this.menuItems = res.data;
        this.Toast.fire({
          icon: "success",
          title: "로그인 성공",
        });
      })
      .catch((e) => {
        this.Toast.fire({
          icon: "error",
          title: "서버에 이상이 있습니다.",
        });
        console.log(e);
      });
    await this.hideLoadingOverlay();
  },
  methods: {
    checkJwtToken: async function () {
      if (getSosoJwtToken() == null) {
        console.log("checkJwtToken");
        window.location.href = "./login.html";
      }
    },
    setName: async function () {
      return getNameFromToken(getCookie("sosoJwtToken")).aud;
    },
    refresh: function () {
      const iframe = $(".tab-content .tab-pane.active.show iframe");
      if (iframe.length) iframe.attr("src", iframe.attr("src"));
    },
    logout: function () {
      $.removeCookie("sosoJwtToken", { path: "/" });
      window.location.href = "./login.html";
    },
    getTimeRemaining: function (expiration) {
      const total = new Date(expiration).getTime() - new Date().getTime();
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      return {
        total,
        hours: hours < 10 ? `0${hours}` : hours,
        minutes: minutes < 10 ? `0${minutes}` : minutes,
        seconds: seconds < 10 ? `0${seconds}` : seconds,
      };
    },
    // 로딩 오버레이 보이기
    showLoadingOverlay: async function () {
      document.getElementById("overlay").style.display = "block";
    },

    // 로딩 오버레이 숨기기
    hideLoadingOverlay: function () {
      const overlay = $("#overlay");
      overlay.animate({ top: "100%", opacity: 0 }, 500, function () {
        overlay.hide();
      });
    },
  },
});
