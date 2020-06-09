import styled from "@emotion/styled/macro";

const CONATINER_PADDING = 20;
const CONATINER_MAX_WIDTH = 1000;

export const Container = styled.div`
  max-width: ${CONATINER_MAX_WIDTH + CONATINER_PADDING * 2}px;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${CONATINER_PADDING}px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;
