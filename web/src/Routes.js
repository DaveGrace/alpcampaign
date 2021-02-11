// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/blog-post/{id:Int}" page={BlogPostPage} name="blogPost" />
      <Route path="/paramtest" page={ParamtestPage} name="paramtest" />
      <Route path="/cands/new" page={NewCandPage} name="newCand" />
      <Route path="/cands/{id:Int}/edit" page={EditCandPage} name="editCand" />
      <Route path="/cands/{id:Int}" page={CandPage} name="cand" />
      <Route path="/cands" page={CandsPage} name="cands" />
      <Route path="/form" page={FormPage} name="form" />
      <Route path="/david" page={DavidPage} name="david" />
      <Route path="/orgs/new" page={NewOrgPage} name="newOrg" />
      <Route path="/orgs/{id:Int}/edit" page={EditOrgPage} name="editOrg" />
      <Route path="/orgs/{id:Int}" page={OrgPage} name="org" />
      <Route path="/orgs" page={OrgsPage} name="orgs" />
      <Route path="/mems/new" page={NewMemPage} name="newMem" />
      <Route path="/mems/{id:Int}/edit" page={EditMemPage} name="editMem" />
      <Route path="/mems/{id:Int}" page={MemPage} name="mem" />
      <Route path="/mems" page={MemsPage} name="mems" />
      <Route path="/posts/new" page={NewPostPage} name="newPost" />
      <Route path="/posts/{id:Int}/edit" page={EditPostPage} name="editPost" />
      <Route path="/posts/{id:Int}" page={PostPage} name="post" />
      <Route path="/posts" page={PostsPage} name="posts" />
      <Route path="/candidate" page={CandidatePage} name="candidate" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
