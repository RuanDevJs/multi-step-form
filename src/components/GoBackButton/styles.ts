import styled, { css } from "styled-components";

export const Button = styled.button`
  width: 160px;
  padding: 1rem;
  margin-top: 4px;
  text-align: center;
  align-self: flex-end;

  ${({ theme }) => css`
    font-weight: ${theme.font_weight.bold};
    font-size: 1rem;
    color: ${theme.colors["purple-light"]};
    text-transform: uppercase;
    letter-spacing: 1.2px;

    background-color: transparent;
    border: 2px solid ${theme.colors["purple-light"]};

    border-radius: 6px;
    margin-top: 32px;

    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
      background-color: ${theme.colors["purple-light"]};
      color: ${theme.colors["white"]};
    }
  `}
`;
