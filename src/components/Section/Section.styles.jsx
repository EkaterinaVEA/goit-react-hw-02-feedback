import styled from "@emotion/styled";

export const Wrapper = styled.section`
padding: 30px 0;
width: 470px;
`;

export const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
margin-top: 30px;
margin-bottom: 100px;
margin-left: auto;
margin-right: auto;
text-transform: uppercase;
font-size: 32px;
text-align: center;
color: #727273;
& svg {
margin-left: 15px;
}
`;

export const Section = styled.main`
display: flex;
justify-content: space-around;
width: 1200px;
border-radius: 10px;
border: 1px solid #f0f0f3;
margin: 50px auto 0;
background-color: #f0f0f3;
box-shadow: -10px -10px 30px 0 #ffffff, 10px 10px 30px 0 #aeaec040;
`;