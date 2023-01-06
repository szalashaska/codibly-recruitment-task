import { AppStyled } from "./App.styled";
import Input from "./components/Input";
import Pagination from "./components/Pagination";
import ProductsTable from "./components/ProductsTable";
import { ProductsProvider } from "./contexts/ProductsContext";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <AppStyled>
      <ProductsProvider>
        <GlobalStyles />
        <Input />
        <ProductsTable />
        <Pagination />
      </ProductsProvider>
    </AppStyled>
  );
}

export default App;
