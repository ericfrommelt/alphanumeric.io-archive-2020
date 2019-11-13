import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import usePosts from "../hooks/use-posts"
import PostPreview from "../components/post-preview"

export default () => {
  const posts = usePosts()

  return (
    <>
      <Layout>
        <SEO title="Home" />
        <h2>Posts</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Layout>
    </>
  )
}


