import {Form, TextField,Submit, TextAreaField, onSubmit} from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import NavBarLayout from 'src/layouts/NavBarLayout'
const FormPage = () => {
  return (
    <>
    <body className = "bg-gray-400 shadow">
    <NavBarLayout></NavBarLayout>
      <h1 className ='text-3xl text-center text-blue-500'>Volunteer Form</h1>
      <Form onSubmit={onSubmit}>
      <TextField name = "input"/>
      <Submit>Save</Submit>
      </Form>
      <p>
        Find me in <tt>./web/src/pages/FormPage/FormPage.js</tt>
      </p>
      <p>
        My default route is named <tt>form</tt>, link to me with `
        <Link to={routes.form()}>Form</Link>`
      </p>
      </body>
    </>
  )
}

export default FormPage
