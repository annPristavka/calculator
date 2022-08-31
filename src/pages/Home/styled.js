import styled from 'styled-components'
import theme from '@/theme'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: ${theme.length[13]}px;
  background-color: ${(props) =>
    props.backgroundTheme === 'Light Theme'
      ? theme.colors.white
      : theme.colors.grey};
  padding: ${theme.padding[1]}px;
`
export const CalculatorWrapper = styled.div`
  width : ${(props) => props.history ? '60%' : '100%'};
  min-height : ${(props) => props.history ? `${theme.length[0]}px` : ''};
  padding : ${(props) => props.history ? `0px` : `0px ${theme.padding[0]}px`};
  transition-duration : ${(props) => props.history ? `.5s` : ``};
  display: grid;
  grid-template-rows: 1.5fr 8fr;
  padding: 0px ${theme.padding[0]}px;
  transition-duration: .5s;
`
export const HistoryWrapper = styled.div`
  position: relative;
  width : ${(props) => props.history ? '40%' : '0%'};
  border-left : ${(props) => props.history ? `${theme.border[2]}px solid ${theme.colors.darkGrey}` : `0px`};
  min-height : ${(props) => props.history ? `${theme.length[0]}px` : `${theme.length[3]}px`};
`