import {
  ConstructionSections,
  LogoContainer,
  ImageContainer,
  MainContainer,
  TextContainer,
  ParagraphsContainer,
  SocialMediaContainer,
  LatinAmericaImageContainer,
  FinalColumn,
} from './styled'
import {
  EnvelopeSimpleOpen,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from 'phosphor-react'
import Logo from '../../assets/logo.svg'
import LatinAmericaImg from '../../assets/latin-america.svg'

export function Construction() {
  return (
    <ConstructionSections>
      <LogoContainer>
        <h1>
          Observatório da <br /> América Latina
        </h1>
        <img src={Logo} alt="" />
      </LogoContainer>
      <ImageContainer>
        <LatinAmericaImageContainer src={LatinAmericaImg} alt="" />
      </ImageContainer>
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
              Nossa equipe de especialistas realiza uma{' '}
              <b>avaliação minuciosa e cuidadosa</b> dos temas abordados, com o
              objetivo de oferecer aos nossos leitores uma visão ampla e
              detalhada sobre a realidade da região.
            </p>
          </ParagraphsContainer>
        </TextContainer>
        <SocialMediaContainer>
          <a href="mailto:observatoriodaamericalatina@gmail.com" target="blank">
            <EnvelopeSimpleOpen size={32} weight="fill" />
          </a>
          <a
            href="https://www.instagram.com/observatorio_da_americalatina/"
            target="blank"
          >
            <InstagramLogo size={32} weight="fill" />
          </a>
          <a
            href="https://www.linkedin.com/in/observat%C3%B3rio-am%C3%A9rica-latina-8017a3267/"
            target="blank"
          >
            <LinkedinLogo size={32} weight="fill" />
          </a>
          <a href="https://twitter.com/observatorio_AL" target="blank">
            <TwitterLogo size={32} weight="fill" />
          </a>
        </SocialMediaContainer>
      </MainContainer>
      <FinalColumn />
    </ConstructionSections>
  )
}
