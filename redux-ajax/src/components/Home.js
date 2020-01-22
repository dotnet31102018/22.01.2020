import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Pokeball from './../pokeball.png'
import { connect } from 'react-redux';
// connects is a fucn which return HOC 

class Home extends Component {
  /*
  // first way
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => this.props.addPosts(json))
  }
  */

  render() {
    console.log(this.props)
    console.log(this.props)
    const { posts } = this.props
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card2" key={post.id}>
            <img src={Pokeball} alt="a pokeball" />
            <div className="card-content">
              <Link to={'/posts/' + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
        <div className="center">No posts to show</div>
      );

    return (
      <div>
        <div className="container">
          <h4 className="center">Home</h4>
          {postList}
        </div>
      </div>
    )
  }
}

/*
// first way
const mapDispatchToProps = (dispatch) => {
  return {
    addPosts: (new_posts) => {
      dispatch({
        type: 'AJAX_POSTS',
        data: new_posts
      })
    }
  }
}
*/

const mapStateToProps = (state) => {
  // this will take data from the state
  // and put it into the component props
  return {
    // will create props.posts on the component
    // from the state.posts
    posts: state.posts
  }
}

// first way
// export default connect(mapStateToProps, mapDispatchToProps)(Home)
export default connect(mapStateToProps)(Home)