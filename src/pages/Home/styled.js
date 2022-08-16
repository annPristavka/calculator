import styled from 'styled-components'

export const Card = styled.div `
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: ${({ theme }) => theme.boxShadows[0]};

  padding: ${({ theme }) => theme.spaces[4]}px;
`

export const CalcContainer = styled.div `
  display: grid;
  grid-template-columns: 4fr 2fr;
  width: 100%;
  min-height: 500px;
  background: linear-gradient(
    90deg,
    rgba(242, 242, 245, 1) 0%,
    rgba(212, 212, 224, 0.29175420168067223) 51%,
    rgba(232, 249, 252, 1) 100%
  );
  padding: 10px;
`