import { styled } from "@stitches/react"


export const DashBoard = styled('section', {
    width: '51rem',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderRadius: 8,
    marginTop: '2rem',
    backgroundColor: '$dark',
    border: 0,
    outline: 'none',

    '.cover': {
        width: '100%',
        height: '4.5rem',
        borderRadius: '8px 8px 0 0',
        objectFit: 'cover',
    },

    '@media(max-width:789px)': {
        maxWidth: '50rem',
        height: '100%',
        display: 'flex',
        flexFlow: 'wrap column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        margin: '2rem',

        borderRadius: 8,
        backgroundColor: '$dark',
        border: 0,
        outline: 'none',
        '.cover': {
            borderRadius: '8px 8px 0 0',
            width: '100%',
            objectFit: 'cover',
        }


    }


})

export const Profile = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 25,
    zIndex: 1,


    '@media(max-width:789px)': {
        display: 'flex',
        flexFlow: 'wrap column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 22
    },

    img: {
        flexShrink: 0
    }

})

export const BottomSide = styled('footer', {

    width: '51rem',

    height: '6rem',
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderTop: '1px solid #323238',
    margin: 0,

    button: {

        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '16px 14px 14px',
        backgroundColor: '$dark',
        width: '12rem',
        height: '3.125rem',
        borderRadius: 8,
        outline: 'none',
        border: '1px solid #00B37E',
        fontFamily: 'Roboto',
        fontWeight: 700,
        lineHeight: '0.875rem',
        textAlign: 'center',
        cursor: 'pointer',
        fontSize: '0.75rem',
        gap: 13,
        '&:hover': {
            backgroundColor: '$green',

            svg: {
                color: "$dark"
            }
        },

        svg: {
            color: '$green',
            width: '1.4375rem',
            height: '1.4375rem'
        }
    },

    '@media(max-width:789px)': {
        width: '100%',

        height: '6.0625rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',


        button: {
            borderColor: '$dark $dark $green $dark',
            textAlign: 'center',
            fontSize: '1rem',

            display: 'flex',
            justifyContent: 'center',

            width: '100%',
            height: '100%',

        },
        transition: 'ease-out width .2s',

    },


});

export const OnlineHelpButton = styled('button', {

    button: {

        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',

        padding: '16px 14px 14px',

        backgroundColor: '$dark',
        width: '12rem',
        height: '3.125rem',
        borderRadius: 8,
        outline: 'none',
        border: '1px solid #00B37E',
        fontFamily: 'Roboto',
        fontWeight: 700,
        lineHeight: '0.875rem',
        textAlign: 'center',
        cursor: 'pointer',
        fontSize: '0.75rem',
        gap: 13,

        flexGrow: 0,


        '&:hover': {
            backgroundColor: '$green',

            svg: {
                color: "$dark"
            }
        },

        svg: {
            color: '$green',
            width: '1.4375rem',
            height: '1.4375rem'
        }
    },

    '@media(max-width:789px)': {
        button: {
            borderColor: '$dark $dark $green $dark',
            textAlign: 'center',
            fontSize: '1rem',

            display: 'flex',
            justifyContent: 'center',

            width: '40rem',
            height: '100%',

        }

    },
})

export const EmailHelpButton = styled('button', {
    button: {

        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',

        padding: '16px 14px 14px',

        backgroundColor: '$dark',
        width: '12rem',
        height: '3.125rem',
        borderRadius: 8,
        outline: 'none',
        border: '1px solid #00B37E',
        fontFamily: 'Roboto',
        fontWeight: 700,
        lineHeight: '0.875rem',
        textAlign: 'center',
        cursor: 'pointer',
        fontSize: '0.75rem',
        gap: 13,

        flexGrow: 0,


        '&:hover': {
            backgroundColor: '$green',

            svg: {
                color: "$dark"
            }
        },

        svg: {
            color: '$green',
            width: '1.4375rem',
            height: '1.4375rem'
        }
    },

    '@media(max-width:789px)': {
        button: {
            borderColor: '$dark $dark $green $dark',
            textAlign: 'center',
            fontSize: '1rem',

            display: 'flex',
            justifyContent: 'center',

            width: '40rem',
            height: '100%',

        }

    },
});