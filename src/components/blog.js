import React, { Component } from "react"
import { injectIntl } from "react-intl"
import axios from "axios"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamation } from '@fortawesome/free-solid-svg-icons'

import BlogPost from "./blog_post"

library.add(faExclamation)

class Blog extends Component {
  state = {
    loading: false,
    error: false,
    posts: [],
  }

  componentDidMount() {
    this.fetchPosts()
  }

  fetchPosts() {
    this.setState({ loading: true })

    axios
      .get(`https://blog.atos6.com/wp-json/wp/v2/posts?per_page=3&page=1`)
      .then(({ data }) => {
        this.setState({ loading: false, error: false, posts: data })
      })
      .catch(error => {
        this.setState({ loading: false, error, posts: [] })
      })
  }

  renderPosts() {
    const { posts } = this.state

    if (posts && posts.length === 0) {
      return null
    }

    return posts.map((post, index) => <BlogPost {...post} key={index} />)
  }

  render() {
    const { error, loading } = this.state
    const { intl } = this.props

    const handleRenderPosts = () => {
      if (error) {
        return (
          <div className="error">
            <FontAwesomeIcon icon={faExclamation} size="lg" /> {intl.formatMessage({ id: "blog.error.posts" })}
          </div>
        )
      } else if (loading) {
        return (
          <div>
            {intl.formatMessage({ id: "blog.loading.posts" })}
          </div>
        )
      }

      return this.renderPosts()
    }

    return (
      <div className="blog">
        <div className="container section-title">
          {intl.formatMessage({ id: "blog.section" })}
        </div>

        <div className="container">
          {handleRenderPosts()}
        </div>

        <div className="container action">
          <a
            href="https://blog.atos6.com"
            rel="noopener noreferrer"
            className="btn-default"
          >
            {intl.formatMessage({ id: "blog.button" })}
          </a>
        </div>
      </div>
    )
  }
}

export default injectIntl(Blog)
