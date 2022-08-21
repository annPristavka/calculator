import styled from 'styled-components'

export const H3 = styled.h3`
  text-align: center;
  font-weight: 400;
  //   font-size: 18px;
`

export const Img = styled.img`
  position: absolute;
  right: 0px;
  top: 0px;
  cursor: pointer;
  width: 16px;
  height: 16px;
`
export const HistoryDiv = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  overflow: auto;
  &.active {
    width: 0%;
  }
  
`
