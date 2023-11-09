import { timestampToDate, getSosoJwtToken, render } from "../../../framework/computed.js";

new Vue({
    el: '#app',
    data: {
      mode:"default",
      letter:{
        letterId:"",
        userId:"",
        letterContent:"",
        letterFont:"",
        letterFontColor:"",
        letterPaper:"",
        letterWriter:"",
        letterIcon:"",
        letterFontSize:"",
        letterTextAlign:"",
        letterWriteDate:""
      },
      letters: [],
    },
    mounted : async function(){
      // self에 vue객체 설정
      var self = this;
      
      await this.load();

      $('#example1').DataTable({
        "responsive": true, "lengthChange": false, "autoWidth": false,
        // "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"],
        buttons: ["excel", "colvis"],
        data: this.letters,
        columns: [
          { data: 'letterId', title: 'letterId', render: function(data) { return render(data); }},
          { data: 'userId', title: 'userId', render: function(data) { return render(data); }},
          { data: 'letterContent', title: 'letterContent', render: function(data) { return render(data); }},
          { data: 'letterFont', title: 'letterFont', render: function(data) { return render(data); }},
          { data: 'letterFontColor', title: 'letterFontColor', render: function(data) { return render(data); }},
          { data: 'letterPaper', title: 'letterPaper', render: function(data) { return render(data); }},
          { data: 'letterWriter', title: 'letterWriter', render: function(data) { return render(data); }},
          { data: 'letterIcon', title: 'letterIcon', render: function(data) { return render(data); }},
          { data: 'letterFontSize', title: 'letterFontSize', render: function(data) { return render(data); }},
          { data: 'letterTextAlign', title: 'letterTextAlign', render: function(data) { return render(data); }},
          { data: 'letterWriteDate', title: 'letterWriteDate',
            render: function(data) { return data ? timestampToDate(data) : ''; } 
          },
          { data: 'letterReadYn', title: 'letterReadYn', render: function(data) { return render(data); }},
          { data: 'letterDelYn', title: 'letterDelYn', render: function(data) { return render(data); }},
        ],
        order:[[10, "desc"]],
        info: false,
        language: {
          paginate: {
            first: '처음',
            last: '마지막',
            next: '다음',
            previous: '이전'
          },
          info: '총 _TOTAL_개 중 _START_부터 _END_까지 표시중',
          lengthMenu: '_MENU_개씩 보기',
          search: '검색',
          zeroRecords: '검색 결과가 없습니다.'
        }
      }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
      $(document).ready(function() {
        // 모달 토글 이벤트 리스너 등록
        $('#modal-xl').on('show.bs.modal', function(event) {
          // 모달이 열릴 때 실행될 함수
        });
        $('#example1 tbody').on('click', 'tr td:not(:first-child)', function() {
          // 데이터 가져오기
          var data = $('#example1').DataTable().row(this).data();
          self.letter.letterId = data.letterId;
          self.letter.userId = data.userId;
          self.letter.letterContent = data.letterContent;
          self.letter.letterFont = data.letterFont;
          self.letter.letterFontColor = data.letterFontColor;
          self.letter.letterPaper = data.letterPaper;
          self.letter.letterWriter = data.letterWriter;
          self.letter.letterIcon = data.letterIcon;
          self.letter.letterFontSize = data.letterFontSize;
          self.letter.letterTextAlign = data.letterTextAlign;
          self.letter.letterWriteDate = data.letterWriteDate;

          // 모달 열기
          $('#modal-xl').modal('toggle');
        });
        // 모달 닫기
        self.closeModal(self);
      });
    },
    methods:{
      load: async function(){
        this.letters = await axios.get('https://plater.kr/api/letterall', {
          headers: {
            'sosoJwtToken': "Bearer " + getSosoJwtToken()
          }
        }).then(function(response){
          console.log(response.data);
          return response.data;
        }).catch(function(error) {
          console.log(error);
          window.parent.location.reload()
        });
      },
      clickUpdate : async function(){
        console.log("clickUpdate");
        this.mode = "update";
      },
      closeModal: function(self){
        $('#modal-xl').on('hidden.bs.modal', function (e) {
          self.mode = "read"; 
          self.manager.id = "";
          self.manager.name = "";
          self.manager.authKey = "";
          self.manager.code = "";
        });
      }
    }
  });