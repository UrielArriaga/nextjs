import { colors, device } from "./config.styles";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #f9f9f9;
`;

export const SocialNetworks = styled.div`
  height: 60px;
  background-color: ${colors.primaryColor};
  display: none;
`;

export const Header = styled.header`
  background-position: top center;  
  background-repeat: no-repeat;
  background-size: cover;            
  background-image: url("https://images.unsplash.com/photo-1577412647305-991150c7d163?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");

  .overlay{
    background: rgba(2, 150, 156, 0.9);    
    padding:30px 10px 30px 10px;
    h2{
      font-size:36px;
      color:#ffff;
      text-align:center;
    }
  }
`;
