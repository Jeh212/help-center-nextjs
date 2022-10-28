import { styled } from "..";

export const HeadersContainer = styled("header", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "$dark",
  width: "100%",
  height: "6.25rem",
  border: 0,

  "@media(max-width:789px)": {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "$dark",
    height: "3rem",
    border: 0,
    h1: {
      fontSize: "1.5rem",
    },
    transition: "ease-out height 2s",
  },
});

export const MainContainer = styled("main", {
  width: "51rem",

  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",

  "@media(max-width:789px)": {
    width: "auto",
  },
});

export const InfoCard = styled("div", {
  border: 0,
  outline: 0,
  width: "100%",
  height: "6rem",
  marginTop: "5rem",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  padding: 0,
  cursor: "pointer",
  backgroundColor: "$dark",
  borderRadius: 8,
  overflow: "hidden",

  strong: {
    width: "36rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Roboto",
    fontSize: "1.1rem",
    fontWeight: "bold",
    lineHeight: "1.3125rem",
  },

  "svg:first-child": {
    color: "$green",
    width: "32px",
    height: "32px",
  },

  "&:hover": {
    height: "15rem",

    border: "solid 1px $green",
    backgroundColor: "$darkModal",

    svg: {
      visibility: "hidden",
      transition: "visibility 2s",
      transitionDelay: "display 1s",
    },

    transition: "height  2s",
  },
});
