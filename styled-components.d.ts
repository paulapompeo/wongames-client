import theme from 'styles/theme'

type Theme = typeof theme // inferĂȘncia de tipos

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
