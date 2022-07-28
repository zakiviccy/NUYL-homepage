// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const returnQuestion = () => {
  const question = [{ value: "山里研で行っている研究について" }, { value: "公開している教材について" }, { value: "共同研究，取材のお申し込みについて" }, { value: "その他" }];
  return question;
};

// const [state, submit] = useForm("{your-form-id}", {
//   data: {
//     subject: "Someone joined the newsletter",
//     pageTitle: function () {
//       // This function will be evaluated at submission time
//       return document.title;
//     },
//   },
// });

function ContactForm() {
  // const { register, handleSubmit, formState: { errors } } = useForm();
  // const [modal, setModal] = useState();
  // const [modalOpen, setModalOpen] = useState(false);
  const question = returnQuestion();
  const [state, data, register, handleSubmit] = useForm("xjvlnelr");
  if (state.submitting) {
    return (
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <div className="modal-card-title" style={{ fontSize: "1.5rem" }}>
              入力内容の確認
            </div>
            {/* <div aria-hidden="true" className="button delete" aria-label="close_button" onClick={() => setModalOpen(false)}></div> */}
          </header>
          <section className="modal-card-body">
            {/* <h5>1. ご意見・ご質問の種類を１つ選んでください：</h5>
            <p>{data.Question}</p>
            <h5>2. 件名をご記入下さい：</h5>
            <p>{data.Subject}</p>
            <h5>3. 内容を具体的にご記入下さい：</h5>
            <p>{data.Content}</p>
            <h5>4. お名前：</h5>
            <p>{data.Name}</p> */}
            <h5>5. 連絡可能なメールアドレス：</h5>
            <p>{data.email}</p>
          </section>
          <footer className="modal-card-foot">
            <form name="contact" action="https://formspree.io/xjvlnelr" method="POST">
              {/* <input type="hidden" name="ご意見・ご質問の種類" value={data.Question} />
              <input type="hidden" name="件名" value={data.Subject} />
              <input type="hidden" name="内容" value={data.Content} />
              <input type="hidden" name="お名前" value={data.Name} /> */}
              {/* <input type="hidden" name="メールアドレス" value={data.Email} /> */}
              <div style={{ marginRight: "0.5rem" }}>
                <input type="submit" className="button is-success" value="送信" />
              </div>
            </form>
            {/* <div className="button" aria-hidden="true" onClick={() => setModalOpen(false)}>
              閉じる
            </div> */}
          </footer>
        </div>
      </div>
    );
  }
  if (state.succeeded) {
    return <p>State succeeded</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      {/* <input className="input" id="email" type="email" name="email" {...register("Email", { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} /> */}
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
