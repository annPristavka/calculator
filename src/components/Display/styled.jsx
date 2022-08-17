import styled from 'styled-components'

export const Input = styled.div`
  text-align: right;
  border-radius: 5px;
  overflow: hidden;
  outline: none;
  font-size: 20px;
  margin-top: 10px;
  min-width: 300px;
  width: 100%;
  padding: 10px;
  border: 1px solid grey;

  & p:last-child {
    font-size: 20px;
    opacity: 1;
  }
`

export const P = styled.p`
  opacity: 0.5;
  top: 0;
  right: 0;
  width: 100%;
  height: 20px;
`
