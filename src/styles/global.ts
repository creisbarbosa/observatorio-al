import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body,section {
    background: ${(props) => props.theme['white-100']};
    color: ${(props) => props.theme['red-800']};
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['red-300']}
  }

  body, input, textarea, button, h1 {
    font-family: "degular", Segoe UI, sans-serif;
    font-size: 1rem;
  }

  h2 {
    font-family: "degular", Segoe UI, sans-serif;
    font-weight: 800;
  }

  p {
    font-family: "garamond-premier-pro", serif;
  }
`

const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
}

export const device = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
}
