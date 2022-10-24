import { styled } from "@stitches/react";

export const Form = styled('form', {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 0,

    label: {
        margin: '0.75rem',
        fontSize: "1rem",
        color: '$gray400',
        fontWeight: 400,
        fontFamily: "Roboto Slab",
    },




})

export const EmailInput = styled('div', {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderRadius: 10,
    border: '1px solid $green',
    backgroundColor: '$gray600',


    svg: {
        color: "$gray300",
        marginLeft: '0.875rem',
        marginRight: '0.875rem',

    },
    input: {
        position: 'relative',
        border: '0',
        backgroundColor: '$gray600',
        height: '3.3125rem',
        width: '19rem',
        marginRight: '1rem',
        borderRadius: '0 10px 10px 0'


    },

    ':focus': {
        outline: 'none',
    },

    "input[type='email']": {
        fontColor: '$gray400',
        fontFamily: "Roboto Slab",
    },

    '::placeholder': {
        fontColor: '$gray400',
        fontFamily: "Roboto Slab",
        paddingLeft: '1rem',
    },

    '@media(max-width:320px)': {

        width: '100%',
        height: '100%',
        input: {
            width: '19rem',
        }

    },




});

export const PasswordInput = styled('div', {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderRadius: 10,
    border: '1px solid $green',
    backgroundColor: '$gray600',


    svg: {
        color: "$gray300",
        marginLeft: '0.875rem',
        marginRight: '0.875rem',

    },
    input: {
        position: 'relative',
        border: '0',
        backgroundColor: '$gray600',
        height: '3.3125rem',
        width: '20.25rem',
        borderRadius: '0 10px 10px 0'

    },

    ':focus': {
        outline: 'none',
    },

    "input[type='password']": {
        fontColor: '$gray400',
        fontFamily: "Roboto Slab",
    },

    '::placeholder': {
        fontColor: '$gray400',
        fontFamily: "Roboto Slab",
        paddingLeft: '1rem'

    }
})

export const CheckBox = styled('div', {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    fontSize: '0.8125rem',
    justifyContent: 'flex-end',
    margin: '1rem 0 0 0.5625rem',
    gap: 10,

    input: {
        paddingLeft: '0.625rem',
        paddingRight: '0.625rem',
    },

    "input[type='checkbox']": {
        opacity: '10%'
    },

    "input[type='checkbox']:checked": {
        opacity: '100%',
        backgroundColor: '$gray600',
    },

    label: {
        margin: 0,
        fontSize: '0.6875rem',
        fontColor: '$gray400',
        fontFamily: "Roboto Slab",
    }

})
