import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const CandForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.cand?.id)
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
          name="firstName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          First name
        </Label>
        <TextField
          name="firstName"
          defaultValue={props.cand?.firstName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="firstName" className="rw-field-error" />

        <Label
          name="lastName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Last name
        </Label>
        <TextField
          name="lastName"
          defaultValue={props.cand?.lastName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="lastName" className="rw-field-error" />

        <Label
          name="region"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Region
        </Label>
        <TextField
          name="region"
          defaultValue={props.cand?.region}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="region" className="rw-field-error" />

        <Label
          name="introduce"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Introduce
        </Label>
        <TextField
          name="introduce"
          defaultValue={props.cand?.introduce}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="introduce" className="rw-field-error" />

        <Label
          name="vision"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Vision
        </Label>
        <TextField
          name="vision"
          defaultValue={props.cand?.vision}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="vision" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>
        <TextField
          name="email"
          defaultValue={props.cand?.email}
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
        <TextField
          name="phone"
          defaultValue={props.cand?.phone}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="phone" className="rw-field-error" />

        <Label
          name="twitter"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Twitter
        </Label>
        <TextField
          name="twitter"
          defaultValue={props.cand?.twitter}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="twitter" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CandForm
