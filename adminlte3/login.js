import { getSosoJwtToken } from "./framework/computed.js";

new Vue({
  el: "#app",
  data: {
    id: "",
    pw: "",
    errMsg: "",
    name: "",
    aud: "",
    auth: "미진행",
  },
  mounted: async function () {
    // await this.checkJwtToken();
    if (this.name == "") {
      // if (confirm("갈래?")) {
      await this.login();
      // }
    } else {
      const newUrl = window.location.href.split("#")[0]; // "#"을 기준으로 URL을 자름
      history.replaceState({}, "", newUrl);
    }
  },
  created: function () {
    this.extractIdToken();
  },
  methods: {
    extractIdToken: function () {
      const idToken = new URL(window.location.href).hash.split("id_token=")[1];
      if (idToken) {
        // &state= 이후의 문자열 제거
        const cleanedIdToken = idToken.split("&state=")[0];
        this.idToken = cleanedIdToken;
        console.log("Extracted id_token:", this.idToken);

        axios
          .post(
            "http://10.38.104.162:8081/api/kace/validateToken",
            this.idToken,
            {
              headers: {
                "Content-Type": "text/plain",
              },
            }
          )
          .then((res) => {
            if (res.data == "id_token인증됨") {
              this.auth = "인증 성공";
            } else {
              this.auth = "인증 실패";
            }
          });

        const jwtToken = this.idToken; // 주어진 JWT를 여기에 넣으세요

        // JWT의 페이로드 부분을 가져옵니다.
        const payloadBase64 = jwtToken.split(".")[1];
        const payload = JSON.parse(atob(payloadBase64));

        // "name" 값을 가져옵니다.
        this.name = payload.name;
        this.aud = payload.aud;
      }
    },
    login: async function () {
      // window.location.href("https://login.microsoftonline.com/6369db95-476d-4bbe-8b2b-f6f3926531fb/v2.0");
      window.location.href =
        "https://login.microsoftonline.com/6369db95-476d-4bbe-8b2b-f6f3926531fb/oauth2/v2.0/authorize?" +
        "client_id=5a8cdf85-1801-4862-8844-724f72ccfbfe" +
        "&response_type=id_token" +
        "&redirect_uri=http%3A%2F%2Flocalhost:5500/login.html?abc=1234" +
        "&response_mode=fragment" +
        "&scope=openid+profile+email" +
        "&state=12345" +
        "&nonce=678910";
      // window.open(
      //   "https://login.microsoftonline.com/6369db95-476d-4bbe-8b2b-f6f3926531fb/oauth2/v2.0/authorize?" +
      //     "client_id=5a8cdf85-1801-4862-8844-724f72ccfbfe" +
      //     "&response_type=id_token" +
      //     "&redirect_uri=http%3A%2F%2Flocalhost:5500/login.html?abc=1234" +
      //     "&response_mode=fragment" +
      //     "&scope=openid+profile+email" +
      //     "&state=12345" +
      //     "&nonce=678910",
      //   "test",
      //   "width=600px, height=550px"
      // );
    },
    logout: async function () {
      window.location.href =
        "https://login.microsoftonline.com/common/oauth2/v2.0/logout?post_logout_redirect_uri=http://localhost:5500/login.html";
    },
    sendCode: async function () {
      return await axios
        .post("https://plater.kr/api/auth", this.authCode, {
          headers: {
            "Content-Type": "text/plain",
          },
        })
        .then(function (response) {
          console.log(response.data);
          return response.data;
        })
        .catch(function (error) {
          console.error(error);
          return false;
        });
    },
    checkJwtToken: async function () {
      if (getSosoJwtToken() != null) {
        console.log("login");
        window.location.href = "./iframe.html";
      }
    },
  },
});
