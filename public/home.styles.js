import { makeStyles } from "@material-ui/core/styles";
import styled, { keyframes } from "styled-components";

export let colors = {
  primaryColor: "#37D09C",
  second: "#23c0e9",
};
export const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor:"#F9F9F9",
  },
  hero: {    
    position: "relative",
    minHeight: "90vh",
    backgroundImage: `url('https://images.unsplash.com/photo-1577412647305-991150c7d163?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')`,
  },
  titles: {},
  spColor: {
    color: `${colors.primaryColor}`,
    fontSize: 70,
    marginRight: 2,
    [theme.breakpoints.down("xs")]: {
      fontSize: 40,
    },
  },
  title: {
    color: "#ffff",
    fontSize: 70,
    fontWeight: "lighter",
    margin: 0,
    [theme.breakpoints.down("xs")]: {
      fontSize: 40,
    },
  },
  subtitle: {
    color: "#bbbcc2",
    fontSize: 20,
    margin: 0,
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
  },
  flexRow: {
    display: "flex",
    alignItems: "center",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    // border: "1px solid white",
  },
  inputsBox: {
    backgroundColor: "rgba(249,249,249,0.22)",
    display: "flex",
    height: 110,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 50,
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      height: 250,
      justifyContent: "center",
    },
  },
  input: {
    width: "40%",
    height: 50,
    borderRadius: 15,
    border: "none",
    paddingLeft: 15,
    paddingRight:15,
    fontSize: "inherit",
    color: "#535864",
    "&:focus": {
      outline: "none",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      marginBottom: 20,
    },
  },
  btnSearch: {
    height: 50,
    width: "10%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: `${colors.primaryColor}`,
    borderRadius: 15,
    color: "#ffff",
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  btnClick: {
    border: "none",
    backgroundColor: "transparent",
    color: "#ffff",
    fontWeight: "bold",
    fontSize: "1rem",
    cursor: "pointer",
    "&:focus": {
      outline: "none",
    },
  },
  searchTop: {
    color: "#ffff",
    marginRight: 20,
  },
  topByOne: {
    color: "#ffffffcf",
    marginRight: 20,
    transition: "color 1s",
    "&:hover": {
      cursor: "pointer",
      color: "#23c0e9",
    },
  },
  firstHalf: {
    height: "80%",
    // border: "1px solid blue",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  secondHalf: {
    height: "20%",
    // border: "1px solid blue",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  categories: {
    height: 156,
    backgroundColor: "rgba(219,219,219,0.1)",
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("xs")]: {
      flexWrap: "wrap",
    },
  },
  category: {
    borderLeft: "1px solid gray",
    borderRight: "1px solid gray",
    // marginRight:5,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#000",
    },
    [theme.breakpoints.down("xs")]: {
      width: "50%",
    },
  },
  ctgIcon: {
    color: `${colors.primaryColor}`,
    fontSize: "2rem",
    margin: 0,
    marginBottom: 10,
  },
  ctgTitle: {
    color: "#ffff",
    fontWeight: "bold",
    margin: 0,
  },
  ctgSubtitle: {
    color: "#ffffffb8",
    margin: 0,
  },
}));

export const Category = styled.div`
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .ctgIcon {
    font-size: 2rem;
    margin: 0;
    margin-bottom: 10px;
    color: ${colors.primaryColor};
  }
  .ctgTitle {
    color: #ffff;
    margin: 0;
    font-weight: bold;
  }
  .ctgSubtitle {
    color: #ffffffb8;
    margin: 0;
  }
  &:hover {
    cursor: pointer;
    background-color: #000;
    .ctgIcon {
      color: #ffff;
    }
  }
`;

export const Wrraper = styled.div`
  /* border: 1px solid red; */
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  margin: auto;

  @media (max-width: 1200px) {
    max-width: 1100px;
  }
  @media (max-width: 1024px) {
    max-width: 924px;
    /* border:2px solid blue; */
  }
  @media (max-width: 768px) {
    max-width: 668px;
  }
  @media (max-width: 480px) {
    max-width: 658px;
    padding: 10px;
    /* height:; */
    /* background-color: green; */
  }
`;

export const Container = styled.div`
  /* border: 1px solid red; */
  /* height: 80vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  padding-top: 30px;
  padding: 20px;
  /* border:2px solid red;   */
  margin: auto;
  margin-bottom: 300px;
  background-color:#F9F9F9;

  @media (max-width: 1200px) {
    max-width: 1100px;
  }
  @media (max-width: 1024px) {
    max-width: 924px;
  }
  @media (max-width: 768px) {
    max-width: 668px;
  }
  @media (max-width: 480px) {
    max-width: 658px;
    padding: 10px;
    /* background-color: green; */
  }
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

const HeaderKeyFrame = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

export const Hero = styled.div`
  /* border: 1px solid pink; */
  min-height: 90vh;
  background-position: top center;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  animation-name: ${HeaderKeyFrame};
  animation-duration: 20s;
  background-size: 120% 100%;
  animation-iteration-count: infinite;
  background-image: url("https://images.unsplash.com/photo-1577412647305-991150c7d163?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
`;
export const Layer = styled.div`
  height: 90vh;
  /* background-color: #363c4b; */
  /* opacity: 0.8; */
  background: rgba(54, 60, 75, 0.9);
  overflow: hidden;
  height: 100%;
  z-index: 2;
`;
