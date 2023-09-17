import React from 'react'
import BlogsReviewCard from './blogscard'

function Blogswrapper() {
  return (
    <div className='flex flex-col gap-6 px-64 py-14'>
        <p className='text-3xl '>Top Stories</p>
        <BlogsReviewCard/>
        <BlogsReviewCard/>
        <BlogsReviewCard/>
        <BlogsReviewCard/>
        <BlogsReviewCard/>
    </div>
  )
}

export default Blogswrapper