import styled from "@emotion/styled";

export const Options = styled.div`
display: flex;
justify-content: space-around;
`;

export const Button = styled.button`
width: 100px;
padding: 5px 10px;
display: flex;
color: #727273;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid #f0f0f3;
border-radius: 10px;
cursor: pointer;
outline: none;
/* text-transform: capitalize; */
font-size: 18px;
font-weight: 500;
background-color: transparent;
box-shadow: -10px -10px 30px 0 #ffffff, 10px 10px 30px 0 #aeaec040;
transition: all 250ms ease-in-out;
&:hover,
&:focus-visible {
transform: scale(1.2);
}
`;