import type { NextPage } from 'next'
import {ReactNode} from "react";
import {BlogLayout} from "../components/layouts/blog";

const Blog: NextPage = () => {
  return (
      <div>
          Blog
      </div>
  )
}

//@ts-ignore
Blog.getLayout = function getLayout(page: ReactNode) {
    return (
        <BlogLayout>
            {page}
        </BlogLayout>
    )
}

export default Blog
