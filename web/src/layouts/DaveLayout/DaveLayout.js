import { Link, routes } from '@redwoodjs/router'
import PostsLayout from "../PostsLayout/PostsLayout"
import BlogPostsCell from "src/components/BlogPostsCell"
import BlogTileCell from "src/components/BlogTileCell"

// const post = ({ posts }) => {
//   return post.map((posts) => (
//     <article key= {post.id}>
//     <header>
//       <h2>{post.title}</h2>
//     </header>
//     {/* <p>{post.body}</p>
//     <div>Posted at: {post.createdAt}</div> */}
//     </article>
//   ))
// }
const DaveLayout= ({ children }) => {
  return(
  <>
  {children}
    <div className="bg-gray-500 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
  <div className="relative max-w-lg mx-auto lg:max-w-8xl">
    <div>

      <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
       </h2>
      <p className="mt-3 text-xl leading-7 text-gray-100 sm:mt-4">
         Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.
      </p>
    </div>
    <div className="mt-12 grid gap-16 border-t-2 border-gray-100 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
      <div>
        <div>
          <a href="#" className="inline-block">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-indigo-100 text-indigo-800">

            </span>
          </a>
        </div>
        <a href="#" className="block">
          <h3 className="mt-4 text-xl leading-7 font-semibold text-gray-900">

<BlogTileCell></BlogTileCell>


          </h3>
          <p className="mt-3 text-base leading-6 text-gray-500">

          </p>
        </a>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <a href="#">
              <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
            </a>
          </div>
          <div className="ml-3">
            <p className="text-sm leading-5 font-medium text-gray-900">
              <a href="#">
                Paul York
              </a>
            </p>
            <div className="flex text-sm leading-5 text-gray-100">
              <time dateTime="2020-03-16">
                Mar 16, 2020
              </time>
              <span className="mx-1">
                &middot;
              </span>
              <span>
                6 min read
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <a href="#" className="inline-block">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-pink-100 text-pink-800">
              Video
            </span>
          </a>
        </div>
        <a href="#" className="block">
          <h3 className="mt-4 text-xl leading-7 font-semibold text-gray-900">
            How to use search engine optimization to drive sales
          </h3>
          <p className="mt-3 text-base leading-6 text-gray-100">
            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.
          </p>
        </a>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <a href="#">
              <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
            </a>
          </div>
          <div className="ml-3">
            <p className="text-sm leading-5 font-medium text-gray-900">
              <a href="#">
                Dessie Ryan
              </a>
            </p>
            <div className="flex text-sm leading-5 text-gray-100">
              <time dateTime="2020-03-15">
                Mar 15, 2020
              </time>
              <span className="mx-1">
                &middot;
              </span>
              <span>
                4 min read
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <a href="#" className="inline-block">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-green-100 text-green-800">
              Case Study
            </span>
          </a>
        </div>
        <a href="#" className="block">
          <h3 className="mt-4 text-xl leading-7 font-semibold text-gray-900">
            Improve your customer experience
          </h3>
          <p className="mt-3 text-base leading-6 text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.
          </p>
        </a>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <a href="#">
              <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
            </a>
          </div>
          <div className="ml-3">
            <p className="text-sm leading-5 font-medium text-gray-900">
              <a href="#">
                Easter Collins
              </a>
            </p>
            <div className="flex text-sm leading-5 text-gray-500">
              <time dateTime="2020-03-10">
                Mar 10, 2020
              </time>
              <span className="mx-1">
                &middot;
              </span>
              <span>
                11 min read
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


</>
  )}

export default DaveLayout
