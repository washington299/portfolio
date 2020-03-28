import React from 'react';
import { useForm } from 'react-hook-form';
import { MdContactMail } from 'react-icons/md';

import Global from '../../src/components/App';
import Layout from '../../src/components/Layout';

import {
  Title,
  ContentArea,
  Error,
} from '../../src/utils/Global/GlobalStyleComponents';
import { Styles, Form } from './styles';

const Contact = () => {
  const { register, handleSubmit, errors } = useForm();

  function submit(data) {
    console.log(data);
  }

  return (
    <Global>
      <Layout title="Contact me">
        <Title>
          Contact Me
          <MdContactMail />
        </Title>
        <Styles>
          <ContentArea style={{ justifyContent: 'center' }}>
            <Form>
              <div className="form-area">
                <div className="form--input-area">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nome"
                    ref={register({ required: true })}
                  />
                  {errors.name && errors.name.type === 'required' && (
                    <Error>Campo obrigatório!</Error>
                  )}
                </div>
                <div className="form--input-area">
                  <label htmlFor="email">E-mail:</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Seu melhor e-mail"
                    ref={register({ required: true })}
                  />
                  {errors.email && errors.email.type === 'required' && (
                    <Error>Campo obrigatório!</Error>
                  )}
                </div>
                <div className="form--input-area">
                  <label htmlFor="textarea">Mensagem:</label>
                  <textarea
                    type="text"
                    name="textarea"
                    id="textarea"
                    placeholder="Digite sua mensagem aqui..."
                    ref={register({ required: true })}
                  />
                  {errors.textarea && errors.textarea.type === 'required' && (
                    <Error>Campo obrigatório!</Error>
                  )}
                  <button type="submit" onClick={handleSubmit(submit)}>
                    Enviar
                  </button>
                </div>
              </div>
            </Form>
          </ContentArea>
        </Styles>
      </Layout>
    </Global>
  );
};

export default Contact;
