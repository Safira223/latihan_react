import React, { Component, Fragment } from "react";
import Post from "../../../component/Post/Post";
import "./BlogPost.css";
import axios from "axios";

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      id: 1,
      title: "",
      body: "",
      userId: 1,
    },
    isUpdate: false
  };

  getPostAPI = () => {
    axios.get("http://localhost:3004/posts?_sort=id&_order=desc").then((result) => {
      // console.log(result.data);
      this.setState({
        post: result.data,
      });
    });
  };

  postDataToAPI = () => {
    axios
      .post("http://localhost:3004/posts", this.state.formBlogPost)
      .then((result) => {
        console.log(result);
        this.getPostAPI();
        this.setState({
          formBlogPost: {
            id: 1,
            title: "",
            body: "",
            userId: 1,
          }
        })
      }, (err) => {
        console.log('error :', err)
      });
  };

  putDataToAPI = () => {
    axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost)
    .then((result) => {
      console.log(result)
      this.getPostAPI();
      this.setState({
        isUpdate: false,
        formBlogPost: {
          id: 1,
          title: "",
          body: "",
          userId: 1,
        }
      })
    })
  }

  handleRemove = (data) => {
    console.log(data);
    axios.delete(`http://localhost:3004/posts/${data}`)
    .then((result) => {
      console.log(result)
      this.getPostAPI();
    });
  };

  handleUpdate = (data) => {
    console.log(data);
    this.setState({
      formBlogPost: data,
      isUpdate: true
    })
  }

  handleFormChange = (event) => {
    // console.log('form change', event.target)
    let formBlogPostNew = { ...this.state.formBlogPost };
    let timestamp = new Date().getTime();
    if(!this.state.isUpdate) {
      formBlogPostNew["id"] = timestamp;
    }
    formBlogPostNew[event.target.name] = event.target.value;
    this.setState({
      formBlogPost: formBlogPostNew,
    });
  };

  handleSubmit = () => {
    if(this.state.isUpdate) {
      this.putDataToAPI(); // update data
    } else {
      this.postDataToAPI(); // tambah data
    }
  };

  // handleDetail = (id) => {
  //   let history = useHistory();
  //   this.props.history.push(`/detail-post/${id}`)
  // }

  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(json => {
    //       this.setState({
    //           post: json
    //       })
    //   })

    this.getPostAPI();
  }

  render() {
    return (
      <Fragment>
        <h3>Halaman Blog Post</h3>
        <hr />
        <div className="form-add-post">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={this.state.formBlogPost.title}
            placeholder="add title"
            onChange={this.handleFormChange}
          />
          <label htmlFor="body">Blog Content</label>
          <textarea
            name="body"
            id="body"
            value={this.state.formBlogPost.body}
            cols="30"
            rows="10"
            placeholder="add description"
            onChange={this.handleFormChange}
          />
          <button className="btn-submit" onClick={this.handleSubmit}>
            Simpan
          </button>
        </div>
        {this.state.post.map((post) => {
          return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail} />;
        })}
      </Fragment>
    );
  }
}

export default BlogPost;
