import styled from "@emotion/styled";

export const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  font-family: "Inter", Arial, sans-serif;

  /* Overall gradient background for the app */
  background: linear-gradient(135deg, #f3f4f6 0%, #e0e7ff 100%);
  padding: 40px 16px;

  display: flex;
  justify-content: center;

  /* Content wrapper */
  & > div {
    width: 100%;
    max-width: 900px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 24px;
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
`;

export const Section = styled.div`
  background: #ffffff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
`;

export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 150px;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
  }
`;

export const Button = styled.button`
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
  background-color: #2563eb;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background-color: #1d4ed8;
  }

  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
  font-size: 14px;

  th,
  td {
    padding: 12px;
    text-align: left;
  }

  th {
    background-color: #f3f4f6;
    color: #374151;
    font-weight: 600;
  }

  tr:nth-of-type(even) {
    background-color: #f9fafb;
  }

  tr:hover {
    background-color: #eef2ff;
  }
`;
