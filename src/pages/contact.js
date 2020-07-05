import React from 'react';
import { useForm } from 'react-hook-form';
import { MdContactMail } from 'react-icons/md';

import { Title, ContentArea, Error } from 'utils/Styles/Elements';
import {
  Form,
  FieldArea,
  Label,
  Input,
  TextArea,
  Button,
} from 'utils/Styles/contact-style';

const Contact = () => {
  const { register, handleSubmit, errors } = useForm();

  function submit(data) {
    console.log(data);
  }

  return (
    <>
      <Title>
        Contact Me
        <MdContactMail />
      </Title>
      <ContentArea style={{ justifyContent: 'center' }}>
        <Form>
          <FieldArea>
            <Label htmlFor="name">Name:</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Nome"
              ref={register({ required: true })}
            />
            {errors.name && errors.name.type === 'required' && (
              <Error>Campo obrigatório!</Error>
            )}
          </FieldArea>

          <FieldArea>
            <Label htmlFor="email">E-mail:</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Seu melhor e-mail"
              ref={register({ required: true })}
            />
            {errors.email && errors.email.type === 'required' && (
              <Error>Campo obrigatório!</Error>
            )}
          </FieldArea>

          <FieldArea>
            <Label htmlFor="textarea">Mensagem:</Label>
            <TextArea
              type="text"
              name="textarea"
              id="textarea"
              placeholder="Digite sua mensagem aqui..."
              ref={register({ required: true })}
            />
            {errors.textarea && errors.textarea.type === 'required' && (
              <Error>Campo obrigatório!</Error>
            )}
          </FieldArea>

          <Button type="submit" onClick={handleSubmit(submit)}>
            Enviar
          </Button>
        </Form>
      </ContentArea>
    </>
  );
};

export default Contact;
