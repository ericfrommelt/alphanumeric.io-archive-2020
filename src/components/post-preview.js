import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import ReadLink from './read-link'

const PostPreview = ({ post }) => (
  <article
    css={css`
      display: grid;
      margin-top: 0;
      padding-bottom: 1rem;

      :first-of-type {
        margin-top: 1rem;
      }
    `}
  >
    <Link to={post.slug} css={css` margin: 1rem 1rem 0 0; width: 300px;`}>
      <Image
        fluid={post.image.sharp.fluid}
        css={css`
          * {
            margin-top: 0;
          }
        `}
        alt={post.title}
      />
    </Link>
    <div>
      <h3
        css={css`
          font-size: 3rem;
        `}
      ><Link to={post.slug}>{post.title}</Link></h3>
      <p>{post.excerpt}</p>
    </div>
  </article>
);

export default PostPreview;