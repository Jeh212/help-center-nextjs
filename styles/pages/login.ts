import { styled } from "..";


export const Logo = styled('div', {
    display: 'flex',
    flexShrink: 0,
    borderRadius: 8,
    alignItems: 'center',
    justifySelf: ' center',

    border: '3px solid',
    borderColor: '$green',
    marginBottom: '2rem',

    maxWidth: 100,
    maxHeight: 100,

    img: {
        border: '3px solid',
        borderRadius: 8,
        width: '100%',
        height: '100%',
    }
})

export const LoginContainer = styled('div', {

    display: 'flex',
    width: '29rem',
    height: '35rem',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: ' center',
    borderRadius: 8,
    backgroundColor: '$gray500',

    a: {
        display: 'flex',
        color: '$gray400',
        fontFamily: "Roboto Slab",
        fontSize: '0.25rem',
        paddingTop: '1rem',
    },

    transition: "ease-in width 2s",



    '@media(max-width:1024px)': {
        width: '100%',
        height: '100%',

        transition: "ease-out width height 1s",

    }


});

export const SubmitButton = styled('button', {

    width: '5.75rem',
    height: '3.0625rem',
    borderRadius: 8,
    backgroundColor: '$green',
    cursor: 'pointer',
    fontSize: '1rem',
    marginTop: '2rem',
    fontFamily: 'Roboto',
    border: 0,

    '&:disabled': {
        opacity: 0.6,
        cursos: 'not-allowed'
    },

    '&:hover': {
        backgroundColor: '$gray200',
        border: '1px $green solid ',
    },

    '@media(max-width:1024px)': {
        width: '35%',
        height: '3.0625rem',

        transition: "ease-in width height 2s",

    }


})

