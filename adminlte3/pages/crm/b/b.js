import { render } from "../../../framework/computed.js";
$(".bSearch").html(await $.get("bSearch.html"));
$(".bModal").html(await $.get("bModal.html"));

var a = new Vue({
  el: "#app",
  data: {
    mode: "default",
    a: {
      id1: "",
      id2: "",
      id3: "",
      id4: "",
      id5: "",
      id6: "",
      id7: "",
      id8: "",
      id9: "",
      id10: "",
    },
    as: [
      {
        id1: "1",
        id2: "2",
        id3: "3",
        id4: "4",
        id5: "5",
        id6: "6",
        id7: "7",
        id8: "8",
        id9: "9",
        id10: "10",
      },
      {
        id1: "11",
        id2: "22",
        id3: "33",
        id4: "44",
        id5: "55",
        id6: "66",
        id7: "77",
        id8: "88",
        id9: "99",
        id10: "1010",
      },
      {
        id1: "111",
        id2: "222",
        id3: "333",
        id4: "444",
        id5: "555",
        id6: "666",
        id7: "777",
        id8: "888",
        id9: "999",
        id10: "101010",
      },
    ],
    clients: [{ name: "minsu" }, { name: "zzz" }],
  },
  mounted: async function () {
    // if (self !== top) {
    //   alert("정상적으로 켜짐");
    // } else {
    //   alert("따로 켜짐");
    // }

    // 기본 jqueyr설정들
    $(".modal-dialog").draggable({
      handle: ".modal-header",
    });
  },
  methods: {
    clickData: async function (item) {
      this.a = item;
      $("#modal-xl").modal("toggle");
    },
    search: async function () {
      console.log(window);
      console.log(this);
      $("#loadingModal").modal("show");
      setTimeout(() => {
        console.log("3초 후에 풀림");
        $("#loadingModal").modal("hide");
      }, 3000);
    },
    create: async function () {
      this.a = {};
      $("#modal-xl").modal("toggle");
    },
    deleteClient: async function () {},
    addClient: async function () {},
  },
});

export default a;
