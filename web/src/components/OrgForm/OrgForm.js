import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const OrgForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.org?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>
        <TextField
          name="email"
          defaultValue={props.org?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="email" className="rw-field-error" />

        <Label
          name="phone"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Phone
        </Label>
        <NumberField
          name="phone"
          defaultValue={props.org?.phone}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="phone" className="rw-field-error" />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        <TextField
          name="name"
          defaultValue={props.org?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="rw-field-error" />

        <Label
          name="street_address"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Street address
        </Label>
        <TextField
          name="street_address"
          defaultValue={props.org?.street_address}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="street_address" className="rw-field-error" />

        <Label
          name="suburb"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Suburb
        </Label>
        <TextField
          name="suburb"
          defaultValue={props.org?.suburb}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="suburb" className="rw-field-error" />

        <Label
          name="state"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          State
        </Label>
        <TextField
          name="state"
          defaultValue={props.org?.state}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="state" className="rw-field-error" />

        <Label
          name="postcode"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Postcode
        </Label>
        <NumberField
          name="postcode"
          defaultValue={props.org?.postcode}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="postcode" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default OrgForm
