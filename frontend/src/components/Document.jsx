import React, { useState } from 'react';
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
  const [newDocument, setNewDocument] = useState({
    number: "",
    title: "",
    description: "",
  });

  const { createDocument } = useDocumentStore();

  const addClick = async (event) => {
    event.preventDefault();
    await createDocument(newDocument);
    setNewDocument({
      number: "",
      title: "",
      description: "",
    });
  };

  return (
    <StyledWrapperDiv>
      <form onSubmit={addClick}>
        <input 
          name="number" 
          type="text" 
          placeholder={"Number"} 
          value={newDocument.number}
          onChange={(e) => setNewDocument({...newDocument, number: e.target.value})}
        />
        <input 
          name="title" 
          type="text" 
          placeholder={"Title"} 
          value={newDocument.title}
          onChange={(e) => setNewDocument({...newDocument, title: e.target.value})}
        />
        <input 
          name="description" 
          type="text" 
          placeholder={"Description"} 
          value={newDocument.description}
          onChange={(e) => setNewDocument({...newDocument, description: e.target.value})}
        />
        <VisibleActionButton type="submit" buttonLabel={"Add"} />
      </form>
    </StyledWrapperDiv>
  )
};
