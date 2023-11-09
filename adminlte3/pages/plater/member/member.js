import { timestampToDate, getSosoJwtToken } from "../../../framework/computed.js";

new Vue({
    el: '#app',
    data: {
      mode:"default",
      member:{
        userId:"",
        id:"",
        userNickName:"",
        userOpenDate:"",
        userDate:"",
      },
      members: [],
    },
    mounted : async function(){
      // self에 vue객체 설정
      var self = this;

      await this.load();

      $('#example1').DataTable({
        "responsive": true, "lengthChange": false, "autoWidth": false,
        // "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"],
        buttons: ["excel", "colvis"],
        data: this.members,
        columns: [
          { data: 'userId', title: 'userId' },
          { data: 'id', title: 'id' },
          { data: 'userNickName', title: 'userNickName' },
          { data: 'userOpenDate', title: 'userOpenDate',
            render: function(data) { return data ? timestampToDate(data) : ''; } 
          },
          { data: 'userDate', title: 'userDate',
            render: function(data) { return data ? timestampToDate(data) : ''; } 
          }],
        order:[[0, "desc"]],
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
          self.member.userId = data.userId;
          self.member.id = data.id;
          self.member.userNickName = data.userNickName;
          self.member.userOpenDate = data.userOpenDate;
          self.member.userDate = data.userDate;
          // 모달 열기
          $('#modal-xl').modal('toggle');
        });
        // 모달 닫힘 이벤트 처리
        $('#modal-xl').on('hidden.bs.modal', function (e) {
          self.mode = "default";
        });
      });
    },
    methods:{
      load: async function(){
        this.members = await axios.get('https://plater.kr/api/memberall', {
          headers: {
            'sosoJwtToken': "Bearer " + getSosoJwtToken()
          }
        }).then(function(response){
          console.log(response.data);
          return response.data;
        }).catch(function(error) {
          window.parent.location.reload()
        });
      },
      clickUpdate : async function(){
        console.log("clickUpdate");
        this.mode = "update";
      },
    }
  });