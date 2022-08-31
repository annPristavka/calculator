import styled from 'styled-components'
import theme from '@/theme'

export const Wrapper = styled.div`
  display: grid;
  gap: ${theme.gap[0]}px;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  padding: ${theme.padding[2]}px;
`

export const StyledButton = styled.button`
  width: ${theme.length[11]}px;
  display: ${(props) =>
    props.idButton === 15 ? 'grid' : ''};
  grid-row: ${(props) =>
    props.idButton === 15 ? '2/5' : ''};
  grid-column: ${(props) =>
    props.idButton === 15 ? '5/5' : ''};
  align-items: ${(props) =>
    props.idButton === 15 ? 'center' : ''};
  height: ${(props) =>
    props.idButton === 15
      ? `${theme.length[12]}px`
      : `${theme.length[9]}px`};
  font-size: ${theme.fontSizes[3]}px;
  font-family: ${theme.font};
  border-radius: ${theme.borderRadius[0]}px;
  border: ${theme.border[2]}px solid ${theme.colors.grey};
  cursor: pointer;

  background: ${theme.colors.snow}};
`
