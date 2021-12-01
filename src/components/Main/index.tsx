import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJs, e Styled-Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React avançado escrito ao lado"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="desenvolvador de frente para tela com código"
    />
  </S.Wrapper>
)

export default Main

// https://github.com/React-Avancado/landing-page/tree/master/src/images

// https://github.com/React-Avancado/landing-page/tree/master/public/img
