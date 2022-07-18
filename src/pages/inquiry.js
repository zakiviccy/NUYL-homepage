import React, { useState } from "react"
import { withPrefix } from "gatsby";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Layout from "../components/Layout";

const returnQuestion1 = () => {
  const question1 = [
    { value: "このプロジェクトについて" },
    { value: "公開している教材について" },
    { value: "技術的な質問" },
    { value: "より良くするために" },
  ];
  return question1;
}

const returnQuestion2 = () => {
  const question2 = [
    { value: "高校・予備校生" },
    { value: "名古屋大学・大学院の学生" },
    { value: "名大以外の大学・大学院の学生" },
    { value: "自主学習者" },
    { value: "高校・予備校の先生・職員" },
    { value: "大学・大学院の教職員" },
    { value: "その他" },
  ];
  return question2;
}

const returnPrefectures = () => {
  const prefectures = [
    { value: "" },
    { value: "北海道" },
    { value: "青森" },
    { value: "岩手" },
    { value: "宮城" },
    { value: "秋田" },
    { value: "山形" },
    { value: "福島" },
    { value: "茨城" },
    { value: "栃木" },
    { value: "群馬" },
    { value: "埼玉" },
    { value: "千葉" },
    { value: "東京" },
    { value: "神奈川" },
    { value: "新潟" },
    { value: "富山" },
    { value: "石川" },
    { value: "福井" },
    { value: "山梨" },
    { value: "長野" },
    { value: "岐阜" },
    { value: "静岡" },
    { value: "愛知" },
    { value: "三重" },
    { value: "滋賀" },
    { value: "京都" },
    { value: "大阪" },
    { value: "兵庫" },
    { value: "奈良" },
    { value: "和歌山" },
    { value: "鳥取" },
    { value: "島根" },
    { value: "岡山" },
    { value: "広島" },
    { value: "山口" },
    { value: "徳島" },
    { value: "香川" },
    { value: "愛媛" },
    { value: "高知" },
    { value: "福岡" },
    { value: "佐賀" },
    { value: "長崎" },
    { value: "熊本" },
    { value: "大分" },
    { value: "宮崎" },
    { value: "鹿児島" },
    { value: "沖縄" },
    { value: "海外" },
  ];
  return prefectures;
}

const Contact = ({ className }) => {
  const [modal, setModal] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  // const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const question1 = returnQuestion1();
  const question2 = returnQuestion2();
  const prefectures = returnPrefectures();
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
            <p>{data.Question1}</p>
            <h5>2. あなたは：</h5>
            <p>{data.Question2}</p>
            <h5>3. お住まいの都道府県：</h5>
            <p>{data.Prefecture}</p>
            <h5>4. 件名をご記入下さい：</h5>
            <p>{data.Subject}</p>
            <h5>5. 内容を具体的にご記入下さい：</h5>
            <p>{data.Content}</p>
            <h5>6. お名前：</h5>
            <p>{data.Name}</p>
            <h5>7. 連絡可能なメールアドレス：</h5>
            <p>{data.Email}</p>
          </section>
          <footer className="modal-card-foot">
            <form
              name="contact"
              // action="https://formspree.io/mqkyenab"
              method="POST"
            >
              <input
                type="hidden"
                name="ご意見・ご質問の種類"
                value={data.Question1}
              />
              <input
                type="hidden"
                name="あなたは"
                value={data.Question2}
              />
              <input
                type="hidden"
                name="お住まいの都道府県"
                value={data.Prefecture}
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
            {question1.map(e => (
              <div>
                <label className="radio">
                  <input {...register("Question1", { required: true })} type="radio" value={e.value} />
                    {e.value}
                </label>
              </div>
            ))}
          </div>
          {errors.Question1 && <span className="has-text-danger">この項目は選択必須です。</span>}
        </div>

        <div className="question-and-form">
          <h3>2. あなたは：</h3>
          <div className="control">
            {question2.map(e => (
              <div>
                <label className="radio">
                  <input {...register("Question2", { required: true })} type="radio" value={e.value} />
                    {e.value}
                </label>
              </div>
            ))}
          </div>
          {errors.Question2 && <span className="has-text-danger">この項目は選択必須です。</span>}
        </div>

        <div className="question-and-form">
          <h3>3. お住まいの都道府県：</h3>
          <div className="control">
            <div className="select">
              <select {...register("Prefecture", { required: true })} >
                {prefectures.map(e => (
                  <option value={e.value}>
                    {e.value ? e.value : "未選択"}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {errors.Prefecture && <span className="has-text-danger">この項目は選択必須です。</span>}
        </div>

        <div className="question-and-form">
          <h3>4. 件名をご記入下さい：</h3>
          <p>
            （例：□□に関する教材も公開してほしい、△△先生の授業教材も公開してほしい、など）
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
          <h3>5. 内容を具体的にご記入下さい：</h3>
          <div className="control columns">
            <div className="column is-half">
              <label className="label">
                <textarea {...register("Content", {required: true})} className="textarea" />
              </label>
            </div>
          </div>
          {errors.Content && <span className="has-text-danger">この項目は入力必須です。</span>}
        </div>

        <div className="question-and-form">
          <h3>6. お名前：</h3>
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
          <h3>7. 連絡可能なメールアドレス：</h3>
          <div className="control columns">
            <div className="column is-one-third">
              <label className="label">
                <input {...register("Email", {required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})} className="input"/>
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
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url(${withPrefix("/")}img/ITS-VLC.png)`,
        }}
      >
        <h1 className="has-text-weight-bold is-size-1 header-title">
          お問い合わせ
        </h1>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="content">
              <p>
                「名大の授業」についてのお問合せは以下のフォームからお願いします。
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