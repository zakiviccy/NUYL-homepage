// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
// import React from 'react';

import { useForm, ValidationError } from '@formspree/react'
import React, { useState } from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
// const [state, handleSubmit] = useForm('xjvlnelr', {
//   data: {
//     subject: 'Someone joined the newsletter',
//     pageTitle: function() {
//       // This function will be evaluated at submission time
//       return document.title;
//     }
//   }
// });

function ContactForm() {
  const [state, handleSubmit] = useForm('xjvlnelr')
  /* ↓state変数を定義 */
  const [text, setText] = useState('')
  const [modal, setModal] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  // const [state, handleSubmit] = useForm('xjvlnelr', {
  //   data: {
  //     subject: 'Someone joined the newsletter',
  //     pageTitle: function() {
  //       // This function will be evaluated at submission time
  //       return document.title;
  //     }
  //   }
  // });

  if (state.succeeded) {
    if (setModal) {
      ;<p> hello </p>
    }
    return (
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal title</p>
          <Link to="/">
          <button class="delete" aria-label="close"></button>
          </Link>
        </header>
          <section className="modal-card-body">
            <p>Thanks {text} for your submission!</p>
            <p>{modal}</p>
          </section>
          <footer class="modal-card-foot">
            <Link to="/">
          <button class="button is-success">Save changes</button>
          <button class="button" onClick={() => setModalOpen(false)}>Cancel</button>
          </Link>
        </footer>
        </div>
        </div>

    )
  }
  // if (state.submitting) {
  //   return (

  //     {/* <button type="submit" disabled={state.submitting}>
  //       Submit
  //     </button> */}
  //   </form>
  // );
  //  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="question-and-form">
        <h3>4. お名前：</h3>
        <div className="control columns">
          <div className="column is-one-third">
            <label className="label">
              <input
                className="input"
                id="name"
                name="name"
                value={text}
                onChange={(event) => setText(event.target.value)}
                required
              />

              <ValidationError
                prefix="name"
                field="text"
                name="name"
                errors={state.errors}
                className="has-text-danger"
              />
            </label>
          </div>
        </div>
      </div>

      <div className="has-text-centered" style={{ paddingTop: '1rem' }}>
        <input
          type="submit"
          className="button is-primary is-large modal-button"
          onClick={() => setModalOpen(true)}
          value="入力内容の確認"
        />
      </div>
    </form>
  )
}

const FormPage = () => {
  return (
    <Layout>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-1 header-title">
                お問い合わせ
              </h1>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default FormPage
