import React from 'react';
import styled from 'styled-components';
import InvisibleActionButton from '../shared/InvisibleActionButton';

const StyledDiv = styled.div`
  margin-bottom: 12px;
`;

export default function Admin(props) {

  const goBack = () => {
    props.history.push("/");
  };

  return (
    <StyledDiv>
      <InvisibleActionButton clickHandler={goBack} buttonLabel={"Back to Site"} />
    </StyledDiv>
  );
}