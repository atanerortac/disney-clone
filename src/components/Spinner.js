import styled from "styled-components";
import React from "react";

const Spinner = () => {
  return (
    <Wrap>
      <Spin />
    </Wrap>
  );
};

export default Spinner;

const Wrap = styled.div`
  display: flex;
  height: 100vh;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  justify-content: center;
  align-self: center;
`;
const Spin = styled.div`
  position: relative;
  align-self: center;
  width: 4rem;
  height: 4rem;
  border-right: 4px solid transparent;
  border-top: 2px solid rgba(17, 60, 207, 1);
  border-radius: 50%;

  animation: rotation 0.8s linear infinite;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
