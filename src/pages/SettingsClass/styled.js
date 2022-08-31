import styled from 'styled-components'
import theme from '@/theme'

export const Container = styled.div`
  min-height: ${theme.length[13]}px;
  width: 100%;
  padding: ${theme.padding[1]}px;
  background-color: ${(props) =>
    props.backgroundTheme === 'Light Theme'
      ? theme.colors.white
      : theme.colors.dark};
`
export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  height: ${theme.length[14]}px;
  padding-left: ${theme.padding[3]}px;
`

export const ChoiseTheme = styled.select`
  width: ${theme.length[14]}px;
  height: ${theme.length[15]}px;
`

export const Button = styled.button`
  width: ${theme.length[14]}px;
  height: ${theme.length[15]}px;
  color: black;
  font-size: ${theme.fontSizes[1]}px;
  border-radius: ${theme.borderRadius[0]}px;
  border: ${theme.border[0]}px solid ${theme.colors.grey};
  cursor: pointer;
  font-family: ${theme.font};
`

export const Title = styled.h3`
  font-family: ${theme.font};
  font-size: ${theme.fontSizes[4]}px;
`
