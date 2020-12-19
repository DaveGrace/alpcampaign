import {Form, TextField,Submit, TextAreaField} from '@redwoodjs/forms'
import MemsLayout from 'src/layouts/MemsLayout'
import MemsCell from 'src/components/MemsCell'
import NavBarLayout from 'src/layouts/NavBarLayout'
//import index from 'src/index.css'
const MemsPage = () => {
  const onSubmit = (data)=> {
    console.log(data)
  }
  return (
    <>
  <NavBarLayout></NavBarLayout>

    <MemsLayout>
    <Form onSubmit={onSubmit}>
      <TextField name = "input"/>
      <Submit>Save</Submit>
    </Form>
      <MemsCell />
    </MemsLayout>
    </>
  )
}

export default MemsPage
