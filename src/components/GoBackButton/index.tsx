import { useNavigate } from "react-router-dom";
import * as Styled from "./styles";

interface Props {
  title: string;
  backTo: "/" | "/contact" | "/company";
}

export default function GoBackButton({ title, backTo }: Props) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(backTo);
  }

  return (
    <Styled.Button onClick={handleClick} type="button">
      {title}
    </Styled.Button>
  );
}
