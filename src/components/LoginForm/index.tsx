import { Formik, Field } from 'formik';
import { ReactElement } from 'react';
import { loginServices } from '../../services/auth.services';
import * as Yup from 'yup';

const Schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required()
})


export default function LoginForm(): ReactElement {
  return (
    <div className='w-full flex justify-center text-center'>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={Schema}
        onSubmit={(values, { setSubmitting, resetForm })=>{
          loginServices(values).then((response) => {
            setSubmitting(false)
            resetForm()
            console.log(response)
          }).catch((error) => {
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
              <Field type="email" name="email" className="input" />
              <Field type="password" name="password" className="input" />
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
