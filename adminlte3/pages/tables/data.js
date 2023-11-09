new Vue({
    el: '#app',
    data: {
        name: "전민수",
    },
    mounted : async function(){
        this.sendCode(3599);
    },
    methods:{
        sendCode : async function(authCode){
            return await axios.post('https://plater.kr/api/auth', authCode, { headers: {
              'Content-Type': 'text/plain'
          }}).then(function(response){
              console.log(response.data);
              return response.data;
            }).catch(function(error) {
              console.error(error);
            });
       }
    }
  });