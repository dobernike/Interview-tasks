import styled from "styled-components";

export default styled.div`
  padding: 16px;

  table {
    border: 1px solid gray;
    border-collapse: collapse;

    & thead {
      border-top: 2px solid gray;
      border-bottom: 2px solid gray;
    }
  }

  .tableContent {
    cursor: pointer;
    &:nth-of-type(2n) {
      background-color: rgba(158, 158, 158, 0.3);
    }
  }
`;
