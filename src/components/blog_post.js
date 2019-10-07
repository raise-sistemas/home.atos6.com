import React, { Component } from "react"
import { injectIntl } from "react-intl"
import axios from "axios"

const dateFormatOptions = {
  year: "numeric",
  month: "long",
  day: "2-digit",
}

class BlogPost extends Component {
  state = {
    loading: false,
    image: null,
    category: "",
  }

  componentDidMount() {
    this.fetchImage()
    this.fetchCategory()
  }

  fetchImage() {
    const { featured_media } = this.props

    axios
      .get(`https://blog.atos6.com/wp-json/wp/v2/media/${featured_media}`)
      .then(({ data: { media_details } }) => {
        this.setState({
          loading: false,
          error: false,
          image: media_details.sizes.medium.source_url,
        })
      })
      .catch(error => {
        this.setState({ loading: false, error, image: null })
      })
  }

  fetchCategory() {
    const { categories } = this.props

    axios
      .get(`https://blog.atos6.com/wp-json/wp/v2/categories/${categories[0]}`)
      .then(({ data }) => {
        this.setState({ loading: false, error: false, category: data.name })
      })
      .catch(error => {
        this.setState({ loading: false, error, category: "" })
      })
  }

  render() {
    const { image, category, loading } = this.state
    const { link, title, date, intl } = this.props

    return (
      <div className="post">
        <div className="image">
          {loading ? (
            intl.formatMessage({ id: "blog.loading.image" })
          ) : (
            <img src={image} alt={title.rendered} />
          )}
        </div>

        <div className="additional-info">
          <span className="category">
            {loading ? (
              intl.formatMessage({ id: "blog.loading.category " })
            ) : (
              <span dangerouslySetInnerHTML={{ __html: category }} />
            )}
          </span>{" "}
          <span className="published-at">
            {intl.formatDate(date, dateFormatOptions)}
          </span>
        </div>

        <div className="title">
          <a href={link} alt={title.rendered} rel="noopener noreferrer">
            <span dangerouslySetInnerHTML={{ __html: title.rendered }} />
          </a>
        </div>
      </div>
    )
  }
}

export default injectIntl(BlogPost)
