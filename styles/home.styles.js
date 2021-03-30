import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
export const useStyles = makeStyles((theme) => ({
  wrapper: {
    maxWidth: 1700,
    backgroundColor: "#3F3D56",
    // 3F3D56
  },
  hero: {
    border: "1px solid pink",
    //   height:'92vh',
    height: "9%",
    minHeight: "90vh",
    backgroundColor: "#363c4b",
    // backgroundImage: `url('https://images.unsplash.com/photo-1577412647305-991150c7d163?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')`
  },

  titles: {},
  spColor: {
    color: "#23c0e9",
    fontSize: 70,
    marginRight: 2,
  },
  title: {
    color: "#ffff",
    fontSize: 70,
    fontWeight: "lighter",
    margin: 0,
  },
  subtitle: {
    color: "#bbbcc2",
    fontSize: 20,
    margin:0
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
    border: "1px solid white",
  },
  inputsBox: {
    backgroundColor:"#535864",
    display:'flex',
    height:110,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-around'
  },
  input:{
    width:'40%',
    height:50,
    borderRadius:15,
    border:'none',
    paddingLeft:15,
    fontSize:'inherit',
    color:'#535864',
    "&:focus": {
      outline: "none",
    },
  },
  btnSearch:{
    height:50,
    width:'10%',
    display:'flex',
    justifyContent:'center',
    backgroundColor:'#23c0e9',
    borderRadius:15,
    color:'#ffff',
  },
  btnClick:{
    border:'none',
    backgroundColor:'transparent',
    color:"#ffff",
    fontWeight:'bold',
    fontSize:'1rem',
    cursor:'pointer',
    "&:focus": {
      outline: "none",
    },
  }
}));

export const Container = styled.div`
  border: 1px solid red;
  height: 80vh;
  display: flex;
  flex-direction: column;
  /* justify-content:center; */
  max-width: 1200px;
  margin: auto;
`;

export const FlexRow = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
`;
