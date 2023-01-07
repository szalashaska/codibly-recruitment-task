import styled from "styled-components";

export const ProductsTableStyled = styled.div`
  min-height: 21rem;
`;

export const Table = styled.table`
  width: 100%;
  margin-block: 1.5rem;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 10px;
`;
export const TableHeader = styled.th`
  padding: 1rem 0.5rem;
  width: 50%;
  &:first-of-type,
  &:last-of-type {
    width: 25%;
  }
`;
export const TableHead = styled.thead``;

export const TableBody = styled.tbody`
  box-shadow: 0 0 10px rgba(235, 245, 215, 0.6);
  border-radius: 10px;
`;

export const TableRow = styled.tr``;
export const EmptyData = styled.td`
  text-align: center;
  padding: 2rem;
`;
