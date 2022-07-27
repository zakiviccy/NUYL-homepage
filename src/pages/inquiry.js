import React, { useState } from "react"
// import { useForm, ValidationError } from '@formspree/react';
// import { withPrefix } from "gatsby";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Layout from "../components/Layout";

// function ContactForm() {
//   const [state, handleSubmit] = useForm("xjvlnelr");
//   if (state.succeeded) {
//       return <p>Thanks for joining!</p>;
//   }

const returnQuestion = () => {
  const question = [
    { value: "山里研で行っている研究について" },
    { value: "公開している教材について" },
    { value: "共同研究，取材のお申し込みについて" },
    { value: "その他" },
  ];
  return question;
}


const Contact = ({ className }) => {
  const [modal, setModal] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  // const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { register, handleSubmit, formState: { errors } } = useForm();
  // const { register, handleSubmit, formState: { errors } } = useForm("xjvlnelr");
  const question = returnQuestion();

  const onSubmit = data => {
    setModalOpen(true);
    const content = (
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <div className="modal-card-title" style={{ fontSize : "1.5rem"}}>
              入力内容の確認
            </div>
            <div
              aria-hidden="true"
              className="button delete"
              aria-label="close_button"
              onClick={() => setModalOpen(false)}
            ></div>
          </header>
          <section className="modal-card-body">
            <h5>1. ご意見・ご質問の種類を１つ選んでください：</h5>
            <p>{data.Question}</p>
            <h5>2. 件名をご記入下さい：</h5>
            <p>{data.Subject}</p>
            <h5>3. 内容を具体的にご記入下さい：</h5>
            <p>{data.Content}</p>
            <h5>4. お名前：</h5>
            <p>{data.Name}</p>
            <h5>5. 連絡可能なメールアドレス：</h5>
            <p>{data.Email}</p>
          </section>
          <footer className="modal-card-foot">
            <form
              name="contact"
              action="https://formspree.io/xjvlnelr"
              method="POST"
            >
              <input
                type="hidden"
                name="ご意見・ご質問の種類"
                value={data.Question}
              />
             <input
                type="hidden"
                name="件名"
                value={data.Subject}
              />
              <input
                type="hidden"
                name="内容"
                value={data.Content}
              />
              <input
                type="hidden"
                name="お名前"
                value={data.Name}
              />
              <input
                type="hidden"
                name="メールアドレス"
                value={data.Email}
              />
              <div style={{ marginRight: "0.5rem"}}>
                <input
                  type="submit"
                  className="button is-success"
                  value="送信"
                />
              </div>
            </form>
            <div
              className="button"
              aria-hidden="true"
              onClick={() => setModalOpen(false)}
            >
              閉じる
            </div>
          </footer>
        </div>
      </div>
      );
    setModal(content);
  }


  return (
    <div className={className}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="question-and-form">
          <h3>1. ご意見・ご質問の種類を１つ選んでください：</h3>
          <div className="control">
            {question.map(e => (
              <div>
                <label className="radio">
                  <input {...register("Question", { required: true })} type="radio" value={e.value} />
                    {e.value}
                </label>
              </div>
            ))}
          </div>
          {errors.Question && <span className="has-text-danger">この項目は選択必須です。</span>}
        </div>

        <div className="question-and-form">
          <h3>2. 件名をご記入下さい：</h3>
          <p>
            （例：□□の研究について詳しく知りたい、△△の教材も公開してほしい、など）
          </p>
          <div className="control columns">
            <div className="column is-half">
              <label className="label">
                <textarea {...register("Subject", {required: true})} className="textarea" />
              </label>
            </div>
          </div>
          {errors.Subject && <span className="has-text-danger">この項目は入力必須です。</span>}
        </div>

        <div className="question-and-form">
          <h3>3. 内容を具体的にご記入下さい：</h3>
          <div className="control columns">
            <div className="column is-half">
              <label className="label">
                {/* <textarea {...register("Content", {required: true})} className="textarea" /> */}
                <textarea
        id="message"
        name="message"
      />
              </label>
            </div>
          </div>
          {errors.Content && <span className="has-text-danger">この項目は入力必須です。</span>}
        </div>

        <div className="question-and-form">
          <h3>4. お名前：</h3>
          <div className="control columns">
            <div className="column is-one-third">
              <label className="label">
                <input {...register("Name", {required: true})} className="input" />
              </label>
            </div>
          </div>
          {errors.Name && <span className="has-text-danger">この項目は入力必須です。</span>}
        </div>

        <div className="question-and-form">
          <h3>5. 連絡可能なメールアドレス：</h3>
          <div className="control columns">
            <div className="column is-one-third">
              <label className="label">
                {/* <input {...register("Email", {required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})} className="input"/> */}
                <input className="input"
        id="email"
        type="email" 
        name="email"
        {...register("Email", {required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})}
      />
            {/* <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      /> */}
              </label>
            </div>
          </div>
          {errors.Email?.type === "required" && <span className="has-text-danger">この項目は入力必須です。</span>}
          {errors.Email?.type === "pattern" && <span className="has-text-danger">正確なメールアドレスを記入してください。</span>}
        </div>

        <div className="has-text-centered" style={{ paddingTop : "1rem"}}>
          <input type="submit" className="button is-primary is-large modal-button" value="入力内容の確認"/>
        </div>
      </form>
      {modalOpen ? modal : null}
    </div>
  );
};

const Form = styled(Contact)`
  .question-and-form {
    padding: 0.5rem 0;
  }
`;

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
              <p>
                「山里研究室」についてのお問合せは以下のフォームからお願いします。
              </p>
              <p>ご意見・ご質問をお待ちしております。</p>
              <p>
                以下のフォームをすべてご記入のうえ、「入力内容の確認」ボタンを押して下さい。
              </p>
              <Form />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FormPage;