import { styled } from "@stitches/react";

export const OverLayChatModal = styled("main", {
  backgroundColor: "rgba(32, 32, 36, 0.8)",
  zIndex: 1,
  position: "absolute",
  top: "10%",
  width: "90rem",
  height: "67rem",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",

  h1: {
    paddingRight: "43rem",
    fontFamily: "Roboto",
    fontWeight: 700,
    fontSize: "1.5625rem",
    lineHeight: "160%",
  },
});

export const Chat = styled("div", {
  backgroundColor: "$darkModal",
  width: "51.75rem",
  height: "37.4375rem",
  margin: "0",
  zIndex: 1,
  borderRadius: 10,
});

export const AttendantChatSection = styled("section", {
  display: "flex",
  width: "48rem",
  margin: "3rem 14rem 3rem 1rem",
  gap: "2rem",
  marginBottom: "1rem",
});

export const AttendantInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginTop: "2rem",
  width: "92px",
  height: "86px",
  alignItems: "center",
  gap: "1rem",
});

export const MessageBox = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignContent: "flex-end",
  flexDirection: "column",

  time: {
    display: "flex",
    justifyContent: "flex-end",
    height: "11px",
    color: "#8D8D99",
    fontFamily: "Roboto",
    lineHeight: "16px",
    paddingBottom: "1.5rem",
    fontSize: "10px",
  },
});

export const Menssage = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 8,
  border: "1px solid #C4C4C4",
  backgroundColor: "#202024",
  width: "28rem",
  height: "6rem",

  p: {
    fontFamily: "Roboto Slab",
    paddingRight: "5rem",
    paddingBottom: "2rem",
    fontStyle: "regular",
    fontSize: "1rem",
    lineHeight: "140%",
    opacity: 5,
    color: "#C4C4CC",
  },
});

//CustomerMessage

export const CustomerChatSection = styled("section", {
  height: "12rem",
  widht: "100%",
  display: "flex",
  marginTop: "5rem",
  paddingRight: "2rem",
  flexDirection: "row-reverse",
  gap: "2rem",
  borderTop: "1px solid #323238",
});

export const CustomerInfo = styled("div", {
  width: "92px",
  height: "86px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "1rem",
  marginTop: "4rem",
});

export const CustomerMessageBox = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignContent: "flex-end",
  flexDirection: "column",
  time: {
    display: "flex",
    justifyContent: "flex-start",
    height: "11px",
    color: "#8D8D99",
    fontFamily: "Roboto",
    lineHeight: "16px",
    paddingBottom: "1.5rem",
    fontSize: "10px",
  },
});

export const CustomerMessage = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 8,
  border: "1px solid #C4C4C4",
  backgroundColor: "#202024",
  width: "28rem",
  height: "6rem",

  p: {
    fontFamily: "Roboto Slab",
    paddingRight: "5rem",
    paddingBottom: "2rem",
    fontStyle: "regular",
    fontSize: "1rem",
    lineHeight: "140%",
    opacity: 5,
    color: "#C4C4CC",
  },
});

export const NewMessageArea = styled("section", {
  height: "10rem",
  widht: "100%",
  borderRadius: 10,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "$darkModal",
});

export const NewMessageBox = styled("div", {
  width: "29rem",
  height: "5rem",
  marginRight: "2rem",
  borderRadius: 10,

  textarea: {
    width: "29rem",
    height: "5rem",
    marginRight: "2rem",
    borderRadius: 10,
    borderColor: "$darkModal",
    background: "transparent",
    fontFamily: "Roboto Slab",
    padding: "1rem 1rem ",
    color: "#C4C4CC",
    overflow: "hidden",
    border: "1px solid $green",

    "&::placeholder": {
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: "0.5rem",
      color: "rgba(196, 196, 204, 0.67)",
      justifyContent: "center",
    },
  },
});

export const ChatActionButtons = styled("div", {
  width: "10.7194rem",
  height: "2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  padding: "0px 0.3534rem",
  gap: 5,

  button: {
    width: "10rem",
    height: "2rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 8,
    outline: 0,
    border: 0,
    backgroundColor: "$green",
    textAlign: "center",
    gap: 1,
  },
});
