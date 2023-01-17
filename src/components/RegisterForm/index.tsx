import { Formik, Field, ErrorMessage } from 'formik';
import { ReactElement } from 'react';
import { registerServices } from '../../services/auth.services';
import * as Yup from 'yup';

const Schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords is not equals').required(),
  name: Yup.string().required(),
  age: Yup.number().required(),
})

export default function RegisterForm(): ReactElement {
  return (
    <div className='w-full flex justify-center text-center'>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          age: 0,
        }}
        validationSchema={Schema}
        onSubmit={(values, { setSubmitting, resetForm })=>{
          const {name, password, email, age} = values
          registerServices({name, password, email, age, katas: []})
            .then((response) => {
              setSubmitting(false)
              resetForm()
              console.log(response)
            })
            .catch((error) => {
              setSubmitting(false)
              resetForm()
              console.log(error)
            })
        }}
      >
        {({
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="flex py-2 flex-col gap-1">
              <Field type="text" name="name" className="input" placeholder="name" />
              <Field type="email" name="email" className="input" placeholder="email" />
              <Field type="password" name="password" className="input" placeholder="password" />
              <Field type="password" name="confirmPassword" className="input" placeholder="confirm password" />
              <Field type="number" name="age" className="input" placeholder="age" />
              <ErrorMessage name='confirmPassword' />
            </div>
            <button
              className="px-6 py-3 bg-slate-600 text-white rounded disabled:opacity-20"
              type="submit"
              disabled={isSubmitting}
            >
              Enviar
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}
