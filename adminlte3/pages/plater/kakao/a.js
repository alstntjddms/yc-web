const a = new Vue({
  el: "#app",
  data: {
    mode: "default",
    kakao: {
      id: "",
      kakaoId: "",
      kakaoAccessToken: "",
      kakaoRefreshToken: "",
      kakaoEmail: "",
      kakaoNickName: "",
      kakaoGender: "",
      kakaoBirthday: "",
      kakaoRegisterDate: "",
      kakaoLoginDate: "",
      kakaoMsgYn: "",
    },
    kakaos: [],
  },
  mounted: async function () {},
  methods: {},
});

export default a;
