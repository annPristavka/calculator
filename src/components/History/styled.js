import styled from 'styled-components'
import theme from '@/theme'

export const Title = styled.h3`
  text-align: center;
  font-weight: ${theme.fontWeight[1]};
`

export const ImgClear = styled.img`
  position: absolute;
  right: 0px;
  top: 0px;
  cursor: pointer;
  width: ${theme.length[10]}px;
  height: ${theme.length[10]}px;
`
export const HistoryWrapper = styled.div`
  height: ${theme.length[0]}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${theme.fontSizes[11]}px;
  overflow: auto;
  &.active {
    width: 0%;
  }
`
