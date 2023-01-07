import styled from "styled-components";

export const ProductsTableStyled = styled.div`
  width: 100%;
  overflow-x: auto;
  min-height: 25rem;
`;

export const Table = styled.table`
  width: 100%;
  margin-block: 2rem;
  border-collapse: collapse;
`;
export const TableHeader = styled.th`
  text-align: left;
  padding: 0.5rem;
`;
export const TableHead = styled.thead``;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr<{ background?: string }>`
  background-color: ${(props) => props.background || "red"};
  border-radius: 10px;
  transition: all 0.3s ease-in;
`;
export const TableData = styled.td`
  text-align: left;
  padding: 0.75rem 0.5rem;
  text-transform: capitalize;
`;
