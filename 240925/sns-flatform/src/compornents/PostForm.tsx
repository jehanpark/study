import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import styled from "styled-components";
import { auth, db } from "../firebase";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const TextArea = styled.textarea`
  background: #000;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 20px;
  padding: 20px;
  font-size: 16px;
  width: 100%;
  resize: none;
  height: 230px;
  &::placeholder {
    font-size: 18px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    transition: all 0.2s;
  }
  &:focus {
    outline: none;
    border-color: tomato;
    &::placeholder {
      opacity: 0;
    }
  }
`;
const AttachFileButton = styled.label`
  width: 100%;
  color: tomato;
  font-size: 18px;
  font-weight: 600;
  border: 1px solid tomato;
  border-radius: 20px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    border: 1px solid transparent;
    background: tomato;
    color: #000;
  }
`;
const AttachFileInput = styled.input`
  display: none;
`;
const SubmitBtn = styled.input`
  background: #ffffff;
  color: tomato;
  font-weight: 600;
  border: none;
  padding: 10px 0;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover,
  &:active {
    opacity: 0.8;
  }
`;

const PostForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState("");
  const [file, setfile] = useState<File | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPost(e.target.value);
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    console.log(e.target.files);
    if (files && files.length === 1) setfile(files[0]);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user || isLoading || post === "" || post.length > 180) return;
    try {
      setIsLoading(true);
      await addDoc(collection(db, "contents"), {
        post,
        createdAt: Date.now(),
        usename: user?.displayName || "Anonymous",
        userId: user.uid,
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
   <Form onSubmit={onSubmit}>
     <TextArea
       onChange={onChange}
       value={post}
       name="content"
       id="content"
       placeholder="What is Happening?"
     ></TextArea>
     <AttachFileButton htmlFor="file">
       {file ? "Contents Added 😶‍🌫️" : "Add 🤖"}
     </AttachFileButton>
     <AttachFileInput
       onChange={onFileChange}
       type="file"
       id="file"
       accept="video/*,image/*"
     />
     <SubmitBtn type="submit" value={isLoading ? "Posting..." : "Post"} />
   </Form>
 );
};

export default PostForm;
