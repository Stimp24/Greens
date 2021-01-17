import * as React from 'react'

function Gallery({ props, image, title }) {
      return (
            <figure className="figure">
                  <img className="img-responsive" src={image} alt={title} />
                  <figcaption className="figure-caption text-center text-small">{title}</figcaption>
            </figure>
      )
}

export default Gallery