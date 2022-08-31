import styled from 'styled-components'
import theme from '@/theme'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr;
  width: 100%;
  min-height: ${theme.length[0]}px;
  background-color: ${(props) =>
    props.backgroundTheme === 'Light Theme'
      ? ({ theme }) => theme.colors.white
      : ({ theme }) => theme.colors.secondaryLight};
  padding: ${theme.padding[1]}x;
`
