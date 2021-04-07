import { colors, device, sharedProps } from "./config.styles";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

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
  /* max-width: 1300px; */
  background-size: 200% 200%;
  width: 100%;
  margin: auto;
  background-image: url("https://images.unsplash.com/photo-1577412647305-991150c7d163?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");

  @media ${device.md} {
    /* height: 290px; */
  }

  .overlay {
    background: rgba(2, 150, 156, 0.9);
    padding: 50px 10px 50px 10px;
    @media ${device.md} {
      /* height: 290px; */
    }
  }

  .wrapper {
    max-width: 1200px;
    margin: auto;

    .inputs_box {
      display: flex;
      flex-direction: column;
      /* border: 1px solid white; */
      @media ${device.md} {
        flex-direction: row;
        /* border: 1px solid red; */
        justify-content: space-between;
        align-items: center;
      }

      .column {
        display: flex;
        flex-direction: column;
        /* border: 1px solid blue; */
        @media ${device.md} {
          width: 40%;
        }

        h4 {
          color: #fff;
          margin-bottom: 10px;
          font-weight: lighter;
        }

        .input {
          width: 100%;
          height: 50px;
          border-radius: 15px;
          padding-left: 15px;
          padding-right: 15px;
          border: none;
          margin-bottom: 15px;
          color: #535864;
          &:focus {
            outline: none;
          }
          @media ${device.md} {
            width: 100%;
          }
        }
      }

      .btn_container {
        width: 100%;
        height: 50px;
        border-radius: 15px;
        padding-left: 15px;
        padding-right: 15px;
        background-color: ${colors.primaryColor};
        color: #fff;
        margin-top: 10px;
        justify-content: center;
        @media ${device.md} {
          width: 10%;
        }
        .btn_search {
          height: 100%;
          width: 100%;
          background: transparent;
          border: none;
          color: #fff;
          font-weight: bold;
          font-size: 18px;
        }
      }
    }
  }
`;

export const Filter = styled.div`
  margin-top: 20px;
  /* border: 1px solid white; */
  height: 100px;
  display: flex;
  flex-direction: row;
  display:flex;
  align-items:center;
  /* overflow:auto;   */
  .item_filter {
    /* border: 1px solid blue; */
    height: 37px;
    background: #00796b;
    border-radius: 5px;
    margin-right: 15px;
    position: relative;

    &:hover{
      background: #4db6ac;
    }

    .open {
      cursor: pointer;
      width: 100%;
      height: 100%;
      padding-left: 10px;
      padding-right: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    p {
      color: #fff;
    }
    .item_menu {
      border-radius: 5px;
      /* border: 1px solid red; */
      width: 280px;
      background: white;
      height: 220px;
      position: absolute;
      top: 47px;
      left: 0;
    }    
  }
`;


export const ResultsSection = styled.div`
  max-width:1200px;
  margin:auto;
  /* border:1px solid green; */
  padding-top:40px;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
