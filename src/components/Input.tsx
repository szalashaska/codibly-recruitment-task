import { useContext, useState } from "react";
import ProductsContext from "../contexts/ProductsContext";
import { InputStyled, Label, UserInput } from "./Input.styled";

function Input() {
  const { filterById } = useContext(ProductsContext);
  const [productId, setProductId] = useState<string>("");

  const handleUserInput: (input: string) => void = (input) => {
    if (isNaN(+input)) return;
    setProductId(input);
    filterById(+input);
  };

  return (
    <InputStyled>
      <Label htmlFor="users-input">
        <UserInput
          id="users-input"
          value={productId}
          onChange={(e) => handleUserInput(e.target.value)}
        />
      </Label>
    </InputStyled>
  );
}

export default Input;
