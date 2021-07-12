import styled from "@emotion/styled";

export const Options = styled.ul`
display: flex;
justify-content: center;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 50px;
  }
`;