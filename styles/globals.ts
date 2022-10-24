import { globalCss } from ".";


export const globalStyles = globalCss({



  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    backgroundColor: '$dark',
    'webkit-font-smoothing': 'antialiased',
  },
  'body, input, textarea, button': {
    fontFamily: 'Roboto, Roboto Slab',
    fontWeight: 400,
    color: '$white',
  }

})