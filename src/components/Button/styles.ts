import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 246px;
  height: 36px;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['red-300']};
  margin: 8px;

  background-color: ${(props) => props.theme['red-800']};
  color: ${(props) => props.theme.white};

  strong {
    font-variation-settings: 'wght' 700;
  }

  /* ${(props) =>
    css`
      background-color: ${buttonVariants[props.variant]};
    `} */
`
