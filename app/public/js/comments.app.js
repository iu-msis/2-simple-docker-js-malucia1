commentsApp = new Vue ({
  el: '#commentsTableID',
  data: {
    comments: [{
      id: '',
      commentText: '',
    }],
    commentNew: {
      id: '',
      commentText: '',
    }
  },
  methods: {
    fetchUser(){
      fetch('api/comments/')
      .then(response => response.json())
      .then(json +. {
        this.comments=json;
        console.log(this.comments);
      });
    },
    createComment(){
      fetch('api/comments/create.php', {
        method: 'POST',
        body: JSON.stringify(this.commentNew),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then(response => response.json() )
      .then( json => {
        console.log("Returned from post: ", json);
        this.comments.push(json[0]);
        this.commentNew = this.commentNewData();
      });
      console.log("Creating (POSTing)...!");
      console.log(this.commentNew);
    },
    commentNewData(){
      return{
        id: '',
        commentText: ''
      }
    },
    created(){
      this.fetchUser();
    }
});
