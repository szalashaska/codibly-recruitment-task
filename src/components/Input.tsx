import { useContext, useState } from "react";
import ProductsContext from "../contexts/ProductsContext";
import { InputStyled, Label, UserInput } from "./Input.styled";

function Input() {
  const { filterById, productId } = useContext(ProductsContext);
  const [userInput, setUserInput] = useState<string>(
    productId ? `${productId}` : ""
  );

  const handleUserInput: (input: string) => void = (input) => {
    if (isNaN(+input)) return;
    setUserInput(input);
    filterById(+input);
  };

  return (
    <InputStyled>
      <Label htmlFor="users-input">
        Filter by id:
        <UserInput
          id="users-input"
          value={userInput}
          onChange={(e) => handleUserInput(e.target.value)}
        />
      </Label>
    </InputStyled>
  );
}

export default Input;
