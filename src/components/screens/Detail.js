import React from "react";
import styled from "styled-components";
import { C_Btn, D_Btn } from "../commonComponents";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction || `column`};
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

const Title = styled.h2`
  font-size: 23px;
  margin-bottom: 40px;
`;

const TextInput = styled.input`
  width: 640px;
  height: 30px;
  border-radius: 4px;
  outline: none;
  border: 1.3px solid #227093;
  margin: 10px 0px;
  transition: 0.5s;
  padding: 0px 10px;
  &:focus {
    box-shadow: 1px 1px 3px #2c2c54;
  }
`;

const TextArea = styled.textarea`
  width: 640px;
  height: 300px;
  border-radius: 4px;
  outline: none;
  border: 1.3px solid #227093;
  margin: 10px 0px;
  transition: 0.5s;
  padding: 10px;
  resize: none;
  &:focus {
    box-shadow: 1px 1px 3px #2c2c54;
  }
`;

class Detail extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>게시글 상세보기</Title>

        <TextInput type="text" readOnly={true} />
        <TextInput type="text" readOnly={true} />
        <TextArea readOnly={true} />
        <Wrapper direction={`row`}>
          <D_Btn onClick={() => this.props.history.goBack()}>목록으로</D_Btn>
        </Wrapper>
      </Wrapper>
    );
  }
}

export default Detail;
