import {Form,
       TextField,
       Submit,
       TextAreaField,
       onSubmit,
      FieldError,
    Label,} from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import NavBarLayout from 'src/layouts/NavBarLayout'
import formTemplate from 'web/src/formTemplate.css'
import {useMutation} from '@redwoodjs/web'

const CREATE_CONTACT = gql`
mutation CreateVolMutation($input:CreateVolInput!) {
  createVol(input:$input) {
    id
  }
}
`
const FormPage = () => {
  const [create] = useMutation(CREATE_CONTACT)
  const onSubmit = (data) => {
    create({variables:{input: data}})
    console.log(data)
  }
  return (
    <>
    <body className = "bg-gray-400 shadow">
    <NavBarLayout></NavBarLayout>
      <h1 className ='text-3xl text-center text-blue-500'>Volunteer Form</h1>
      <Form onSubmit={onSubmit}>

      <h2>Personal Details</h2>
      <div className="flex-col, justify-end" >
            <Label name="Title"
                  errorClassname="error"
                  >Title</Label>
            <TextField
                  name = "Title"
                  validation={{required:true}}
                  errorClassName = "error"
                  />
            <FieldError name= "Title" className="error"/>

            <Label name="FirstName"
                  errorClassname="error"
                  >First Name</Label>
            <TextField
                  name = "FirstName"
                  validation={{required:true}}
                  errorClassName = "error"
                  />
            <FieldError name= "FirstName" className="error"/>

            <Label name="LastName"
                  errorClassname="LastName"
                  >LastName</Label>
            <TextField
                  name = "LastName"
                  validation={{required:true}}
                  errorClassName = "error"
                  />
            <FieldError name= "LastName" className="error"/>

            <Label name="MPhone"
                  errorClassname="error"
                  >Mobile Phone</Label>
            <TextField
                  name = "MPhone"
                  validation={{required:true}}
                  errorClassName = "error"
                  />
            <FieldError name= "MPhone" className="error"/>

            <Label name="Email"
                  errorClassname="error"
                  >E-Mail</Label>
            <TextField
                  name = "Email"
                  validation={{required:true}}
                  errorClassName = "error"
                  />
            <FieldError name= "Email" className="error"/>

      </div>
      <h2>Location Details</h2>
      <div>

      <Label name="Saddress"
             errorClassname="error"
             >Street Address</Label>
      <TextField
             name = "Saddress"
             validation={{required:true}}
             errorClassName = "error"
             />
      <FieldError name= "Saddress" className="error"/>

      <Label name="Town"
             errorClassname="error"
             >Town</Label>
      <TextField
             name = "Town"
             validation={{required:true}}
             errorClassName = "error"
             />
      <FieldError name= "Town" className="error"/>

      <Label name="PCode"
             errorClassname="error"
             >Post code</Label>
      <TextField
             name = "PCode"
             validation={{required:true}}
             errorClassName = "error"
             />
      <FieldError name= "PCode" className="error"/>

      </div>
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
