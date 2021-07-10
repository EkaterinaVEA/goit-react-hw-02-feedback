import styled from "@emotion/styled";

export const List = styled.ul`
display: flex;
flex-direction: column;
font-size: 20px;
color: #727273;
align-items: center;
justify-content: center;
`;
export const Item = styled.li`
display: flex;
align-items: center;
justify-content: center;

height: 30px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  & svg {
      margin-left: 10px;
  }
`;