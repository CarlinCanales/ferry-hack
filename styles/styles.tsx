import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url('./background.png');
  background-size: contain;
`;

export const Riders = styled.span`
  position: absolute;
  top: 216px;
  left: 122px;
  font-size: 2rem;
  padding: 0.5rem;
  background: white;
  color: #0098e4;
`;

export const ElapsedTime = styled.div<{ color: string }>`
  position: absolute;
  top: 373px;
  left: 61px;
  font-size: 60px;
  padding: 0.2rem;
  background: #f8f8f8;
  color: ${(props) => props.color};
`;

export const Activated = styled.time`
  display: flex;
  background: #f8f8f8;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 476px;
  left: 83px;
  color: #607d8b;
  font-size: 15px;
  font-weight: 700;
`;

export const Expires = styled.span`
  background: #f8f8f8;
  position: absolute;
  top: 451px;
  left: 111px;
  padding: 2px;
  color: #607d8b;
`;

export const Code = styled.div`
  width: 165px;
  height: 165px;
  position: absolute;
  top: 568px;
  left: 105px;
`;
