var app = new Vue({
  el: '#comments',
  data: {
    commentList: [{
      id: '',
      commentText: ''
    }],
    newComment: {
      id: '',
      commentText: ''
    }
  },

  methods:{
    fetchUser(){
      fetch('api/comments/')
      .then(response => response.json())
      .then(json => {
        this.commentList=json;
        console.log(this.commentList);
      });
    },

    createComment() {
      fetch('api/comments/create.php', {
        method:'POST',
        body: JSON.stringify(this.newComment),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        this.commentList = json;
        this.newComment = this.newCommentData();
      });

      console.log("Creating (POSTing)...!");
      console.log(this.newComment);
    },
    newCommentData() {
      return {
        id: "",
        commentText: ""
      }
    }

  },
  created() {
    this.fetchUser();
  }
});
