import React from 'react';
import styled from 'styled-components';
import { VisibleActionButton } from './shared/index';
import { useDocumentStore } from './../store/document';

const StyledWrapperDiv = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  padding: 4px;
  form {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    input, select {
      margin: 0.25rem;
      padding: 10px;
      font-size: 1rem;
    }
    input:focus, textarea:focus, select:focus {
      outline: 0;
      background: #fef2de;
    }
    button {
      border: 0;
    }
  }
`;


export default function NewDocument(props) {

  const { createDocument } = useDocumentStore();

  const addClick = async (event) => {
    event.preventDefault();
    const document = {
      number: "009",
      title: "test title 9",
      description: "test description 9",
    };
    await createDocument(document);
  };

  return (
    <StyledWrapperDiv>
      <form onSubmit={addClick}>
        <input name="number" type="text" placeholder={"Number"} />
        <input name="title" type="text" placeholder={"Title"} />
        <input name="description" type="text" placeholder={"Description"} />
        <VisibleActionButton type="submit" buttonLabel={"Add"} />
      </form>
    </StyledWrapperDiv>
  )
};
