import { styled } from "@stitches/react";

export const OverLayEmailModal = styled("main", {
  backgroundColor: "rgba(32, 32, 36, 0.8)",
  zIndex: 1,
  position: "absolute",
  top: "9%",
  width: "90rem",
  height: "67rem",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",

  h1: {
    paddingRight: "37rem",
    fontFamily: "Roboto",
    fontWeight: 700,
    fontSize: "1.5625rem",
    lineHeight: "160%",
    paddingBottom: "1rem",
  },
});

export const EmailContainer = styled("div", {
  backgroundColor: "$darkModal",
  width: "49rem",
  height: "25rem",
  margin: "0",
  zIndex: 1,
  borderRadius: 10,
});

export const EmailForm = styled("form", {
  borderRadius: 8,
  display: "flex",
  justifyContent: "space-evenly",
  flexDirection: "column",
  alignItems: "center",
  paddingRight: "19rem",
  paddingLeft: "4rem",
  widht: "100%",
  height: "18rem",
});

export const InputName = styled("div", {
  display: "flex",

  width: "100%",
  height: "2.5625rem",
  border: "1px solid green",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  borderRadius: 8,
  justifyContent: "center",
  alignItems: "center",
  gap: "0.8125rem",
  backgroundColor: "#232129",

  input: {
    width: "100%",
    height: "100%",
    background: "transparent",
    border: 0,
  },

  "input::placeholder": {},

  svg: { color: "$green" },
});

export const InputDestinationEmail = styled("div", {
  display: "flex",

  width: "100%",
  height: "2.5625rem",
  border: "1px solid green",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  borderRadius: 8,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#232129",
  gap: "0.8125rem",

  input: {
    width: "100%",
    height: "100%",
    background: "transparent",
    border: 0,
  },

  svg: { color: "$green" },
});

export const InputSubject = styled("div", {
  display: "flex",

  width: "100%",
  height: "2.5625rem",
  border: "1px solid green",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  borderRadius: 8,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#232129",
  gap: "0.8125rem",

  input: {
    width: "100%",
    height: "100%",
    background: "transparent",
    border: 0,
  },

  svg: { color: "$green" },
});

export const NewEmailMessage = styled("section", {
  width: "49.125rem",
  height: "7.1875rem",
  borderRadius: 8,
  display: "flex",
  justifyContent: "center",
  marginLeft: "1rem",
});

export const ContentContainer = styled("div", {
  width: "45rem",
  height: "6rem",

  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
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
      fontStyle: "normal",
      fontSize: "1rem",
      color: "rgba(196, 196, 204, 0.67)",
    },
  },
});

export const SendEmailButton = styled("div", {
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
    borderRadius: "0.4381rem",
    outline: 0,
    border: 0,
    backgroundColor: "$green",
    textAlign: "center",
    gap: 1,
  },
});
