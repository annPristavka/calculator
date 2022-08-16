import styled from 'styled-components'

export const Key = styled.div`
  //   display: grid;
  //   grid-template-rows: 1.5fr 8fr;
  //   padding: 0px 20px;

  display: grid;
  gap: 10px;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  padding: 25px;
`

export const Button = styled.button`
  width: 80px;
  height: 60px;
  font-size: 20px;
  font-family: 'Pathway Gothic One', sans-serif;
  border-radius: 5px;
  border: 2px solid grey;
  cursor: pointer;
  background: linear-gradient(
    90deg,
    rgba(212, 212, 215, 1) 0%,
    rgba(212, 212, 224, 0.29175420168067223) 51%,
    rgba(232, 249, 252, 1) 100%
  );
`

export const ButtonEq = styled.button`
  display: grid;
  grid-row: 2/5;
  grid-column: 5/5;
  height: 170px;
  align-items: center;
  width: 80px;

  font-size: 20px;
  font-family: 'Pathway Gothic One', sans-serif;
  border-radius: 5px;
  border: 2px solid grey;
  cursor: pointer;
  background: linear-gradient(
    90deg,
    rgba(212, 212, 215, 1) 0%,
    rgba(212, 212, 224, 0.29175420168067223) 51%,
    rgba(232, 249, 252, 1) 100%
  );
`
