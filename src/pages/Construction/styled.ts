import styled from 'styled-components'
import { device } from '../../styles/global'
import BackgroundImage from '../../assets/dennis-schrader-9i7Jla4lwO4-unsplash.jpg'
import BackgroundImageMobile from '../../assets/background-mobile.png'

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
    font-size: 1.25rem;
    width: 160px;
    text-align: left;
  }

  img {
    width: 56px;
  }

  @media ${device.laptop} {
    padding: 6rem 2rem;
    flex-direction: column;
    align-items: center;

    h1 {
      text-align: center;
    }
  }
`

export const ImageContainer = styled.div`
  background-image: url(${BackgroundImageMobile});
  background-size: cover;
  background-position: center;
  min-height: 200px;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  @media ${device.laptop} {
    width: 100%;
    height: 100%;
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-position: bottom;
    padding: 5rem 2rem;

    align-items: flex-start;
    justify-content: flex-start;
  }
`
export const LatinAmericaImageContainer = styled.img`
  width: 90px;
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
    font-size: 1.75rem;
    line-height: 103%;
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

  b {
    font-family: 'adobe-garamond-pro', serif;
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

  gap: 1rem;
  align-self: center;

  a {
    color: ${(props) => props.theme['red-200']};
    transition: all 0.3s;
    line-height: 0;
    border-radius: 4px;

    &:hover {
      color: ${(props) => props.theme['red-800']};
    }
  }

  @media ${device.laptop} {
    flex-direction: column;
    align-self: end;
  }
`

export const FinalColumn = styled.div`
  visibility: hidden;

  @media ${device.laptop} {
    visibility: visible;
    width: 40px;
    height: 100%;
    background-color: ${(props) => props.theme['red-200']};
  }
`
