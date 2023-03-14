import {
  ConstructionSections,
  LogoContainer,
  ImageContainer,
  MainContainer,
  TextContainer,
  ParagraphsContainer,
  SocialMediaContainer,
} from './styled'
import Background from '../../assets/dennis-schrader-9i7Jla4lwO4-unsplash.jpg'
import {
  EnvelopeSimpleOpen,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from 'phosphor-react'
import Logo from '../../assets/logo.svg'

export function Construction() {
  return (
    <ConstructionSections>
      <LogoContainer>
        <h1>
          Observatório da <br /> América Latina
        </h1>
        <img src={Logo} alt="" />
      </LogoContainer>
      <ImageContainer img={Background}></ImageContainer>
      <MainContainer>
        <TextContainer>
          <hr />
          <h2>Boletins sobre os principais assuntos latino-americanos</h2>
          <ParagraphsContainer>
            <p>
              Nos dedicamos a fornecer Boletins informativos periódicos com
              conteúdo <strong>criterioso e científico</strong> , abrangendo os
              principais fatos e acontecimentos na América Latina.
            </p>
            <p>
              Nossa equipe de especialistas realiza uma
              <strong>avaliação minuciosa e cuidadosa</strong> dos temas
              abordados, com o objetivo de oferecer aos nossos leitores uma
              visão ampla e detalhada sobre a realidade da região.
            </p>
          </ParagraphsContainer>
        </TextContainer>
        <SocialMediaContainer>
          <a href="">
            <EnvelopeSimpleOpen size={32} weight="fill" />
          </a>
          <a href="">
            <InstagramLogo size={32} weight="fill" />
          </a>
          <a href="">
            <LinkedinLogo size={32} weight="fill" />
          </a>
          <a href="">
            <TwitterLogo size={32} weight="fill" />
          </a>
        </SocialMediaContainer>
      </MainContainer>
    </ConstructionSections>
  )
}
