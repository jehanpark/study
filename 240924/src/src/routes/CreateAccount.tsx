import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Form = styled.form``;

const Input = styled.input``;

const CreateAccount = () => {
  const [isLoading, setisLoading] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setSetpassword] = useState("");

  const onChange = (e: React.ChangeEvent) => {
    const  {{name, value},
  } =e;
}
if (name === "name") setName(value)
  else if(name === "email") setEmail(value);
  else if(name === "passward") setpassward(value);

  };

  const onsubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()

  }
  return (
    <Wrapper>
      <Form onSubmit={onsubmit}>
        <Input
          onChange={onChange}
          name="name"
          value={name}
          type="text"
          placeholder="Name"
          required
        />
        <Input name="email" value="email" type="emaul" placeholder="Email" required />
        <Input
          name="password"
          type="password"
          value="password"
          placeholder="Password"
          required
        />
        <Input type="submit" value="Create Account" />
      </Form>
    </Wrapper>
  );
};

export default CreateAccount;
