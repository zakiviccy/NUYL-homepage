// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
// import React from 'react';

import { useForm, ValidationError } from '@formspree/react'
import React, { useState } from 'react'
import Layout from '../components/Layout'
// import { Link } from 'gatsby'
import { FaPhoneAlt } from '@react-icons/all-files/fa/FaPhoneAlt'
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope'

// const [state, handleSubmit] = useForm('xjvlnelr', {
//   data: {
//     subject: 'Someone joined the newsletter',
//     pageTitle: function() {
//       // This function will be evaluated at submission time
//       return document.title;
//     }
//   }
// });

const returnQuestion = () => {
  const question = [
    { value: '  山里研で行っている研究について' },
    { value: '  公開している教材について' },
    { value: '  共同研究，講演，取材のお申し込み' },
    { value: '  その他' },
  ]
  return question
}
function ContactForm() {
  const [state, handleSubmit] = useForm('xjvlnelr')
  /* ↓state変数を定義 */
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [cquestion, setQuestion] = useState('')
  const [message, setMessage] = useState('')
  // const [modal, setModal] = useState('')
  // const [modalOpen, setModalOpen] = useState(false)
  const question = returnQuestion()
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
    // if (setModal) {
    //   ;<p> hello </p>
    // }
    return (
      <section>
        <p>
          お問い合わせくださり，ありがとうございます．以下の内容で承りました．
        </p>
        <p>
          回答にはお時間をいただきます．また，お問い合わせいただいた内容によっては回答しない場合もあります．
          <br />
          予めご了承ください．
        </p>

        <p>お急ぎの場合は当方秘書までご連絡ください．</p>
        <p>秘書（石川 愛子，白石 栄里子）</p>
        <ul>
          <li>
            <FaPhoneAlt />
            &nbsp; &nbsp;052-789-2743
          </li>
          <li>
            <FaEnvelope />
            &nbsp; &nbsp;secretary (at) katayama.nuee.nagoya-u.ac.jp
          </li>
        </ul>
        <hr />
        <div className="question-and-form">
          <h1 class="title">1. お問い合わせ</h1>
          <div className="control">
            <div>
              <label className="label">{cquestion}</label>
            </div>
          </div>

          <h1 class="title">2. 内容：</h1>
          <div className="control columns">
            <div className="column is-half">
              <label className="label">{message}</label>
            </div>
          </div>

          <h1 class="title">3. お名前：</h1>
          <div className="control columns">
            <div className="column is-one-third">
              <label className="label">{name}</label>
            </div>
          </div>

          <h1 class="title">4. 連絡可能なメールアドレス：</h1>
          <div className="control columns">
            <div className="column is-one-third">
              <label className="label">{email}</label>
            </div>
          </div>
        </div>
      </section>
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
        <h1 class="title">1. ご意見・ご質問の種類を１つ選んでください：</h1>
        <div className="control">
          {question.map((e) => (
            <div>
              <label className="radio" for="question">
                <input
                  id={e.value}
                  name="question"
                  value={e.value}
                  type="radio"
                  onChange={(event) => setQuestion(event.target.value)}
                  required
                />
                {e.value}
              </label>
            </div>
          ))}
        </div>
        <br />
      </div>

      <div className="question-and-form">
        <h1 class="title">2. お問い合わせ内容を具体的にご記入下さい：</h1>
        <div className="control columns">
          <div className="column is-half">
            <label className="label">
              <textarea
                id="message"
                name="message"
                value={message}
                type="text"
                onChange={(event) => setMessage(event.target.value)}
                className="textarea"
                required
              />
            </label>
          </div>
        </div>
        <br />
      </div>

      <div className="question-and-form">
        <h1 class="title">3. お名前：</h1>
        <div className="control columns">
          <div className="column is-one-third">
            <label className="label" for="name">
              <input
                className="input"
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
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
        <br />
      </div>

      <div className="question-and-form">
        <h1 class="title">4. 連絡可能なメールアドレス：</h1>
        <div className="control columns">
          <div className="column is-one-third">
            <label className="label" for="email">
              <input
                className="input"
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                className="has-text-danger"
                errors={state.errors}
              />
            </label>
          </div>
        </div>
      </div>

      <div style={{ paddingTop: '3rem' }}>
        <input
          type="submit"
          className="button is-primary is-large modal-button"
          // onClick={() => setModalOpen(true)}
          value="お問い合わせの送信"
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
