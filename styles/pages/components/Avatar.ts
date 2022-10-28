import { styled } from "@stitches/react";

export const AvatarPicture = styled('div', {


    width: 'calc(3rem + 12px)',
    height: 'calc(3rem + 12px)',
    borderRadius: 8,
    border: '0.25rem solid #202024',
    outline: '0.125rem solid $green',
    objectFit: 'cover',
    position: 'relative',
    img: {
        width: '3.4rem',
        height: '3.4rem',
        borderRadius: 8,
    }

    // display: 'flex',
    // flexShrink: 0,
    // borderRadius: 8,
    // alignItems: 'center',
    // justifySelf: ' center',

    // border: '3px solid',
    // borderColor: '$green',
    // marginBottom: '2rem',

    // maxWidth: 100,
    // maxHeight: 100,

    // img: {
    //     border: '3px solid',
    //     borderRadius: 8,
    //     width: '100%',
    //     height: '100%',
    // }
})
