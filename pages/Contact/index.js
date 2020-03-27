import React from 'react';

import Global from '../../src/components/SwitchProvider';
import Layout from '../../src/components/Layout';
import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';

import { PageStyle, Title, ContentArea } from '../../src/utils/globalStyles';
import { Styles, Form } from './styles';

const Contact = () => (
  <Global>
    <Layout title="Contact me">
      <PageStyle>
        <Header />
        <Styles>
          <Title>Contact Me</Title>
          <ContentArea style={{ justifyContent: 'center' }}>
            <Form>
              <div className="form-area">
                <div className="form--input-area">
                  <label htmlFor="name">Name:</label>
                  <input type="text" name="name" id="name" placeholder="Nome" />
                </div>
                <div className="form--input-area">
                  <label htmlFor="email">E-mail:</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Seu melhor e-mail"
                  />
                </div>
                <div className="form--input-area">
                  <label htmlFor="textarea">Mensagem:</label>
                  <textarea
                    type="text"
                    name="textarea"
                    id="textarea"
                    placeholder="Digite sua mensagem aqui"
                  />
                  <button type="submit">Enviar</button>
                </div>
              </div>
            </Form>
          </ContentArea>
        </Styles>
        <Footer />
      </PageStyle>
    </Layout>
  </Global>
);

export default Contact;
