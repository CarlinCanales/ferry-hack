import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url('./background.png');
  background-size: cover;
`;

export const Riders = styled.span`
  position: absolute;
  top: 195px;
  right: 242px;
  font-size: 2.3rem;
  padding: 0.5rem;
  background: white;
  color: #0098e4;
  text-align: right;
`;

export const ElapsedTime = styled.div<{ color: string }>`
  position: absolute;
  top: 369px;
  left: 83px;
  font-size: 62px;
  padding: 0.2rem;
  background: #f8f8f8;
  color: ${(props) => props.color};
  // opacity: 0.3;
`;

export const Activated = styled.time`
  display: flex;
  background: #f8f8f8;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 482px;
  left: 95px;
  color: #607d8b;
  font-size: 1rem;
  font-weight: 700;
`;

export const Expires = styled.span`
  background: #f8f8f8;
  position: absolute;
  top: 451px;
  left: 121px;
  padding: 2px;
  color: #607d8b;
  font-size: 1.2rem;
  letter-spacing: -0.5px;
`;

export const Code = styled.div`
  width: 183px;
  height: 183px;
  position: absolute;
  top: 583px;
  left: 117px;
`;
