// $(".menuSearch").html(await $.get("menuSearch.html"));
// $(".searchLoadingModal").html(await $.get("searchLoadingModal.html"));
// $(".menuModal").html(await $.get("menuModal.html"));

const a = new Vue({
  el: "#app",
  data: {
    arrData: [
      {
        name: "홍길동",
        artist: "20세",
        typeCode: "1",
        genreCode: [1],
        grade: "1",
      },
      {
        name: "김나라",
        artist: "21세",
        typeCode: "2",
        genreCode: [1, 2, 3],
        grade: "2",
      },
      {
        name: "가나다",
        artist: "22세",
        typeCode: "3",
        genreCode: [1, 5],
        grade: "3",
      },
      {
        name: "홍길동",
        artist: "20세",
        typeCode: "1",
        genreCode: [1],
        grade: "1",
      },
      {
        name: "김나라",
        artist: "21세",
        typeCode: "2",
        genreCode: [1, 2, 3],
        grade: "2",
      },
      {
        name: "가나다",
        artist: "22세",
        typeCode: "3",
        genreCode: [1, 5],
        grade: "3",
      },
      {
        name: "홍길동",
        artist: "20세",
        typeCode: "1",
        genreCode: [1],
        grade: "1",
      },
      {
        name: "김나라",
        artist: "21세",
        typeCode: "2",
        genreCode: [1, 2, 3],
        grade: "2",
      },
      {
        name: "가나다",
        artist: "22세",
        typeCode: "3",
        genreCode: [1, 5],
        grade: "3",
      },
      {
        name: "홍길동",
        artist: "20세",
        typeCode: "1",
        genreCode: [1],
        grade: "1",
      },
      {
        name: "김나라",
        artist: "21세",
        typeCode: "2",
        genreCode: [1, 2, 3],
        grade: "2",
      },
      {
        name: "가나다",
        artist: "22세",
        typeCode: "3",
        genreCode: [1, 5],
        grade: "3",
      },
      {
        name: "홍길동",
        artist: "20세",
        typeCode: "1",
        genreCode: [1],
        grade: "1",
      },
      {
        name: "김나라",
        artist: "21세",
        typeCode: "2",
        genreCode: [1, 2, 3],
        grade: "2",
      },
      {
        name: "가나다",
        artist: "22세",
        typeCode: "3",
        genreCode: [1, 5],
        grade: "3",
      },
      {
        name: "홍길동",
        artist: "20세",
        typeCode: "1",
        genreCode: [1],
        grade: "1",
      },
      {
        name: "김나라",
        artist: "21세",
        typeCode: "2",
        genreCode: [1, 2, 3],
        grade: "2",
      },
      {
        name: "가나다",
        artist: "22세",
        typeCode: "3",
        genreCode: [1, 5],
        grade: "3",
      },
      {
        name: "홍길동",
        artist: "20세",
        typeCode: "1",
        genreCode: [1],
        grade: "1",
      },
      {
        name: "김나라",
        artist: "21세",
        typeCode: "2",
        genreCode: [1, 2, 3],
        grade: "2",
      },
      {
        name: "가나다",
        artist: "22세",
        typeCode: "3",
        genreCode: [1, 5],
        grade: "3",
      },
      {
        name: "홍길동",
        artist: "20세",
        typeCode: "1",
        genreCode: [1],
        grade: "1",
      },
      {
        name: "김나라",
        artist: "21세",
        typeCode: "2",
        genreCode: [1, 2, 3],
        grade: "2",
      },
      {
        name: "가나다",
        artist: "22세",
        typeCode: "3",
        genreCode: [1, 5],
        grade: "3",
      },
      {
        name: "홍길동",
        artist: "20세",
        typeCode: "1",
        genreCode: [1],
        grade: "1",
      },
      {
        name: "김나라",
        artist: "21세",
        typeCode: "2",
        genreCode: [1, 2, 3],
        grade: "2",
      },
      {
        name: "가나다",
        artist: "22세",
        typeCode: "3",
        genreCode: [1, 5],
        grade: "3",
      },
      {
        name: "홍길동",
        artist: "20세",
        typeCode: "1",
        genreCode: [1],
        grade: "1",
      },
      {
        name: "김나라",
        artist: "21세",
        typeCode: "2",
        genreCode: [1, 2, 3],
        grade: "2",
      },
      {
        name: "가나다",
        artist: "22세",
        typeCode: "3",
        genreCode: [1, 5],
        grade: "3",
      },
      {
        name: "홍길동",
        artist: "20세",
        typeCode: "1",
        genreCode: [1],
        grade: "1",
      },
      {
        name: "김나라",
        artist: "21세",
        typeCode: "2",
        genreCode: [1, 2, 3],
        grade: "2",
      },
      {
        name: "가나다",
        artist: "22세",
        typeCode: "3",
        genreCode: [1, 5],
        grade: "3",
      },
      {
        name: "홍길동",
        artist: "20세",
        typeCode: "1",
        genreCode: [1],
        grade: "1",
      },
      {
        name: "김나라",
        artist: "21세",
        typeCode: "2",
        genreCode: [1, 2, 3],
        grade: "2",
      },
      {
        name: "가나다",
        artist: "22세",
        typeCode: "3",
        genreCode: [1, 5],
        grade: "3",
      },
      {
        name: "홍길동",
        artist: "20세",
        typeCode: "1",
        genreCode: [1],
        grade: "1",
      },
      {
        name: "김나라",
        artist: "21세",
        typeCode: "2",
        genreCode: [1, 2, 3],
        grade: "2",
      },
      {
        name: "가나다",
        artist: "22세",
        typeCode: "3",
        genreCode: [1, 5],
        grade: "3",
      },
      {
        name: "홍길동",
        artist: "20세",
        typeCode: "1",
        genreCode: [1],
        grade: "1",
      },
      {
        name: "김나라",
        artist: "21세",
        typeCode: "2",
        genreCode: [1, 2, 3],
        grade: "2",
      },
      {
        name: "가나다",
        artist: "22세",
        typeCode: "3",
        genreCode: [1, 5],
        grade: "3",
      },
      {
        name: "홍길동",
        artist: "20세",
        typeCode: "1",
        genreCode: [1],
        grade: "1",
      },
      {
        name: "김나라",
        artist: "21세",
        typeCode: "2",
        genreCode: [1, 2, 3],
        grade: "2",
      },
      {
        name: "가나다",
        artist: "22세",
        typeCode: "3",
        genreCode: [1, 5],
        grade: "3",
      },
      {
        name: "홍길동",
        artist: "20세",
        typeCode: "1",
        genreCode: [1],
        grade: "1",
      },
      {
        name: "김나라",
        artist: "21세",
        typeCode: "2",
        genreCode: [1, 2, 3],
        grade: "2",
      },
      {
        name: "가나다",
        artist: "22세",
        typeCode: "3",
        genreCode: [1, 5],
        grade: "3",
      },
      {
        name: "홍길동",
        artist: "20세",
        typeCode: "1",
        genreCode: [1],
        grade: "1",
      },
      {
        name: "김나라",
        artist: "21세",
        typeCode: "2",
        genreCode: [1, 2, 3],
        grade: "2",
      },
      {
        name: "가나다",
        artist: "22세",
        typeCode: "3",
        genreCode: [1, 5],
        grade: "3",
      },
      {
        name: "홍길동",
        artist: "20세",
        typeCode: "1",
        genreCode: [1],
        grade: "1",
      },
      {
        name: "김나라",
        artist: "21세",
        typeCode: "2",
        genreCode: [1, 2, 3],
        grade: "2",
      },
      {
        name: "가나다",
        artist: "22세",
        typeCode: "3",
        genreCode: [1, 5],
        grade: "3",
      },
      {
        name: "홍길동",
        artist: "20세",
        typeCode: "1",
        genreCode: [1],
        grade: "1",
      },
      {
        name: "김나라",
        artist: "21세",
        typeCode: "2",
        genreCode: [1, 2, 3],
        grade: "2",
      },
      {
        name: "가나다",
        artist: "22세",
        typeCode: "3",
        genreCode: [1, 5],
        grade: "3",
      },
      {
        name: "홍길동",
        artist: "20세",
        typeCode: "1",
        genreCode: [1],
        grade: "1",
      },
      {
        name: "김나라",
        artist: "21세",
        typeCode: "2",
        genreCode: [1, 2, 3],
        grade: "2",
      },
      {
        name: "가나다",
        artist: "22세",
        typeCode: "3",
        genreCode: [1, 5],
        grade: "3",
      },
    ],
  },
  mounted: async function () {
    // var grid = new tui.Grid({
    //   el: document.getElementById("grid"),
    //   columns: [
    //     {
    //       header: "이름",
    //       name: "name",
    //     },
    //     {
    //       header: "나이",
    //       name: "value",
    //       editor: "text",
    //     },
    //   ],
    // });

    // 변수이름 겹칠 위험있음
    window.grid = new tui.Grid({
      el: document.getElementById("grid"),
      scrollX: true,
      scrollY: true,
      rowHeaders: ["rowNum", "checkbox"],
      draggable: true,
      bodyHeight: 500,
      // columnOptions: {
      //   frozenCount: 1,
      // },
      columns: [
        {
          header: "Name",
          name: "name",
          editor: "text",
          resizable: true,
        },
        {
          header: "Artist",
          name: "artist",
          editor: "text",
          resizable: true,
        },
        {
          header: "Type",
          name: "typeCode",
          formatter: "listItemText",
          editor: {
            type: "select",
            options: {
              listItems: [
                { text: "Deluxe", value: "1" },
                { text: "EP", value: "2" },
                { text: "Single", value: "3" },
              ],
            },
          },
        },
        {
          header: "Genre",
          name: "genreCode",
          formatter: "listItemText",
          editor: {
            type: "checkbox",
            options: {
              listItems: [
                { text: "Pop", value: "1" },
                { text: "Rock", value: "2" },
                { text: "R&B", value: "3" },
                { text: "Electronic", value: "4" },
                { text: "etc.", value: "5" },
              ],
            },
          },
          copyOptions: {
            useListItemText: true, // when this option is used, the copy value is concatenated text
          },
        },
        {
          header: "Grade",
          name: "grade",
          copyOptions: {
            useListItemText: true,
          },
          formatter: "listItemText",
          editor: {
            type: "radio",
            options: {
              listItems: [
                { text: "★☆☆", value: "1" },
                { text: "★★☆", value: "2" },
                { text: "★★★", value: "3" },
              ],
            },
          },
        },
      ],
    });
    // 테마 지정
    tui.Grid.applyTheme("striped");
    // grid.on("beforeChange", (ev) => {
    //   console.log("before change:", ev);
    // });

    grid.on("afterChange", (ev) => {
      // 데이터 변경시 다시 vue data로 바인드
      console.log("after change:", ev);
      this.arrData[ev.changes[0].rowKey][ev.changes[0].columnName] =
        ev.changes[0].value;
      console.log(this.arrData);
    });

    grid.on("checkAll", (ev) => {
      console.log("check!", ev);
    });

    grid.resetData(this.arrData);

    this.hideLoadingOverlay();
  },
  methods: {
    hideLoadingOverlay: async function () {
      const overlay = $("#overlay");
      overlay.animate({ top: "100%", opacity: 0 }, 500, function () {
        overlay.hide();
      });
    },
    addNewRow: function () {
      this.arrData.push({
        name: "",
        artist: "",
        typeCode: "",
        genreCode: [],
        grade: "",
      });

      // Refresh the grid data
      console.log(this.arrData);
      grid.resetData(this.arrData);
    },
  },
});

export default a;
