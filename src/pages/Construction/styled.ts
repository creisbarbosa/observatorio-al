import styled from 'styled-components'
import { device } from '../../styles/global'

export const ConstructionSections = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  @media ${device.laptop} {
    flex-direction: row;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2.5rem 2rem;

  background-color: ${(props) => props.theme['red-200']};
  color: ${(props) => props.theme['white-100']};

  h1 {
    font-family: 'degular-variable', sans-serif;
    font-variation-settings: 'wght' 400, 'opsz' 14, 'ital' 0;
    font-size: 1.25rem;
    width: 138px;
  }

  img {
    max-width: 66px;
  }

  @media ${device.laptop} {
    padding: 6rem 2rem;
    flex-direction: column;
    align-items: center;
  }
`

export const ImageContainer = styled.div`
  visibility: hidden;

  @media ${device.laptop} {
    visibility: visible;
    width: 100%;
    background: url(${(props) => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
  }
`
export const MainContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media ${device.laptop} {
    padding: 6rem 4rem 6rem 3rem;
    justify-content: space-between;
  }
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    max-width: 400px;
    font-family: 'degular-variable', sans-serif;
    font-variation-settings: 'wght' 700, 'opsz' 14, 'ital' 0;
    font-size: 1.75rem;
    line-height: 101.5%;
  }

  hr {
    width: 60px;
    height: 4px;
    border: none;
    background-color: ${(props) => props.theme['red-200']};
  }
`

export const ParagraphsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  font-size: 1.2rem;
  line-height: 128%;

  strong {
    font-weight: 800;
  }

  @media ${device.laptop} {
    max-width: 90%;
  }
`

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 2rem;

  gap: 0.5rem;
  align-self: center;

  a {
    color: ${(props) => props.theme['gray-900']};
    transition: all 0.3s;

    &:hover {
      color: ${(props) => props.theme['red-200']};
    }
  }

  @media ${device.laptop} {
    flex-direction: column;
    align-self: end;
  }
`
