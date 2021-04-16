import React from "react"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <div className="pt-28">
      <h1>Page not Found</h1>
      <p>Sorry! You just hit a route that doesn&#39;t exist...</p>
    </div>
  </>
)

export default NotFoundPage
