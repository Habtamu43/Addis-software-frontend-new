import styled from "@emotion/styled";

export const AppContainer = styled.div`
  width: 90%;
  max-width: 800px;
  margin: auto;
  font-family: Arial, sans-serif;
`;

export const FormContainer = styled.div`
  margin: 20px 0;
`;

export const Input = styled.input`
  margin: 0 5px 10px 0;
  padding: 5px;
`;

export const Button = styled.button`
  padding: 5px 10px;
  margin-left: 5px;
  cursor: pointer;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  th {
    background-color: #f4f4f4;
  }
`;
