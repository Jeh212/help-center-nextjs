import { globalCss } from ".";


export const globalStyles = globalCss({



  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    backgroundColor: '$darkModal',
    'webkit-font-smoothing': 'antialiased',
    width: '100%',
    height: '100%',

  },
  'body, input, textarea, button': {
    fontFamily: 'Roboto, Roboto Slab',
    fontWeight: 400,
    color: '$white',
  }

})