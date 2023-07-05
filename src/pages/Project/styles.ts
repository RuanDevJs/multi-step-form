import styled, { css } from "styled-components";

export const Container = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Row = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Wrap = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-weight: ${theme.font_weight.bold};
    font-size: 1rem;
    color: ${theme.colors["gray-400"]};
  `}
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-top: 4px;

  ${({ theme }) => css`
    font-weight: ${theme.font_weight.regular};
    font-size: 1rem;
    color: ${theme.colors["gray-400"]};

    background-color: ${theme.colors["white"]};
    border: 1px solid ${theme.colors["gray-100"]};

    border-radius: 2px;
  `}
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  margin-top: 4px;

  ${({ theme }) => css`
    font-weight: ${theme.font_weight.regular};
    font-size: 1rem;
    color: ${theme.colors["gray-400"]};

    background-color: ${theme.colors["white"]};
    border: 1px solid ${theme.colors["gray-100"]};

    border-radius: 2px;
  `}
`;

export const Button = styled.button`
  width: 160px;
  padding: 1rem;
  margin-top: 4px;
  text-align: center;
  align-self: flex-end;

  ${({ theme }) => css`
    font-weight: ${theme.font_weight.bold};
    font-size: 1rem;
    color: ${theme.colors["white"]};
    text-transform: uppercase;
    letter-spacing: 1.2px;

    background-color: ${theme.colors["purple-mid"]};
    border: 1px solid ${theme.colors["purple-light"]};

    border-radius: 6px;
    margin-top: 32px;

    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
      background-color: ${theme.colors["purple-light"]};
    }

    &:disabled {
      background-color: ${theme.colors["purple-light"]};
      opacity: 0.7;
      cursor: not-allowed;
    }
  `}
`;
