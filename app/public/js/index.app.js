var app = new Vue({
  el:'#userInfo',
  data: {
      userImage:'',
      userThumbnail:'',
      userName:'',
      userOrgin:'',
      userDOB:'',
      userAge:'',
      userEmail:'',
    },
    created() {
      this.fetchUser();
    },
    methods:{
      fetchUser:function() {
        fetch('https://randomuser.me/api/')
        .then( response => response.json())
        .then( data => {
          var userData = data.results[0];
          console.log(userData);
          this.userName = userData.name.first + " " + userData.name.last;
          this.userOrigin = userData.country;
          this.userDOB = userData.dob.date;
          this.userAge = userData.dob.age;
          this.userEmail = userData.email;
          this.userImage = userData.picture.large;
          this.userThumbnail = userData.picture.thumbnail;
        })
          .fetch('./dummy/randomuser.me-sample.json')
          .then(response => response.json())
          .then(data => {
            var userData = data.results;
            console.log(userData);
            this.userName = userData.name.first + " " + userData.name.last;
            this.userOrigin = userData.country;
            this.userDOB = userData.dob.date;
            this.userAge = userData.dob.age;
            this.userEmail = userData.email;
            this.userImage = userData.picture.large;
            this.userThumbnail = userData.picture.thumbnail;
          });
      }
    }
  })
        // .catch((error))=>{
        //   .fetch('./js/randomuser.me-sample.json')
        //   .then(response => response.json())
        //   .then(data => {
        //     var userData = data.results;
        //     console.log(userData);
        //     this.userName = userData.name.first + " " + userData.name.last;
        //     this.userOrigin = userData.country;
        //     this.userDOB = userData.dob.date;
        //     this.userAge = userData.dob.age;
        //     this.userEmail = userData.email;
        //     this.userImage = userData.picture.large;
        //     this.userThumbnail = userData.picture.thumbnail;
        //   });
