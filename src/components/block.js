import React from "react"
import PropTypes from "prop-types"

const Block = ({ imageOnLeft, image, secondImage, title, description }) => (
  <div className={`block ${imageOnLeft ? "gray-background" : "" }`}>
    <div className={`container ${imageOnLeft ? "image-on-left" : ""}`}>
      <div className="column">
        <div className="title">{title}</div>

        <div className="description">
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>

      <div className="column center image">
        {secondImage ? <img src={secondImage} alt={title} className="second-image" /> : null}

        <img src={image} alt={title} className={secondImage ? "first-image" : ""} />
      </div>
    </div>
  </div>
)

Block.propTypes = {
  imageOnLeft: PropTypes.bool.isRequired,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

Block.defaultProps = {
  imageOnLeft: false,
}

export default Block
