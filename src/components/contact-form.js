// import * as React from "react";
import React, { useState } from "react"

import { useForm, ValidationError } from "@formspree/react";

import { form, fieldErrors, formErrors } from "./contact-form.module.css";

export default function ContactForm() {
    const [state, handleSubmit] = useForm(process.env.GATSBY_CONTACT_FORM);
  // const [state, handleSubmit] = useForm("xjvlnelr");
  const [modal, setModal] = useState();
  const [modalOpen, setModalOpen] = useState(false);

  if (state.succeeded) {
    return (
      <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
      <section className="modal-card-body">
      <p>Thanks for your submission!</p>
      </section>
      <div
              className="button"
              aria-hidden="true"
              onClick={() => setModalOpen(false)}
            >
              閉じる
            </div>
      </div>
      </div>
    );

  }

  return (

    <div className="modal is-active">
    <div className="modal-background"></div>
    <div className="modal-card">
      <header className="modal-card-head">
        お問い合わせフォーム：
      </header>
      <section className="modal-card-body">
    <form className={form} onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" required/>
      <ValidationError className={fieldErrors} prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" required/>
      <ValidationError className={fieldErrors} prefix="Message" field="message" errors={state.errors} />

      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
      <ValidationError className={formErrors} errors={state.errors} />
    </form>
    </section>
    </div>
      </div>
  );
}
