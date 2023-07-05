import styled, { css } from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Modal = styled.div`
  width: 28.75rem; // -> 460px
  padding: 1.72rem;

  border: 1px solid ${({ theme }) => theme.colors["gray-100"]};
  border-radius: 4px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  &::after {
    content: "";

    display: block;
    width: 100%;
    height: 1px;

    background-color: ${({ theme }) => theme.colors["gray-100"]};
    margin-top: 32px;
    margin-bottom: 12px;
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    ${({ theme }) => css`
      font-weight: ${theme.font_weight.bold};
      font-size: 1rem;
      color: ${theme.colors["gray-200"]};

      text-decoration: none;
      transition: 0.3s ease-in-out;
    `}
  }

  a.active {
    ${({ theme }) => css`
      font-weight: ${theme.font_weight.bold};
      font-size: 1rem;
      color: ${theme.colors["gray-400"]};

      text-decoration: none;
    `}
  }
`;

export const CurrentPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 10px;
`;
