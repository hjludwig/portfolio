import React from "react";
import styled from "styled-components";
import { sectionPadding } from "../styles/mixins";
import { ms } from "../styles/global.css";
import { SolidButton } from "./common/Button";

const Heading = styled.h2`
  /* text-transform: uppercase; */
  text-align: center;
`;
const Wrapper = styled.div`
  ${sectionPadding};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #efefef;
`;
const Form = styled.form`
  width: 100%;
  max-width: 960px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
  input,
  textarea {
    /* display: block; */
    padding: 0.5em;
    outline: 1px solid var(--light-grey);
    border: none;
    width: 100%;
    font-family: "Source Sans", sans-serif;
    font-size: ${ms(0)};
    color: var(--grey);
    &:focus {
      outline: 3px solid var(--light-blue);
    }
  }
  button {
    justify-self: flex-start;
  }
`;

const Name = styled.label`
  display: inline-block;
  margin-bottom: 1em;
`;
const Email = styled.label`
  display: inline-block;
  margin-bottom: 1em;
`;
const Message = styled.label`
  width: 100%;
  grid-column: 1/-1;
  margin-bottom: 1em;
`;

const Contact = () => {
  return (
    <Wrapper>
      <Heading>Get in touch</Heading>
      <Form
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <Name>
          Name
          <input type="text" name="name" id="name" />
        </Name>
        <Email>
          Email
          <input type="email" name="email" id="email" />
        </Email>
        <Message>
          Message
          <textarea name="message" id="message" rows="15" />
        </Message>
        <SolidButton type="submit" primary>
          Send Message
        </SolidButton>
      </Form>
    </Wrapper>
  );
};

export default Contact;
