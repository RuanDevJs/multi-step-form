import { NavLink, Outlet, useLocation } from "react-router-dom";
import * as Styled from "./styles";
import {
  NumberCircleOne,
  CaretRight,
  NumberCircleTwo,
  NumberCircleThree,
  CheckCircle,
} from "phosphor-react";
import { useTheme } from "styled-components";
import { useContext } from "react";
import { FormContext } from "../../context/Form";

type currentPage = "/" | "/company" | "/project";

export default function Form() {
  const themes = useTheme();

  const { contact, company } = useContext(FormContext);
  const { pathname } = useLocation();

  function currentPage(currentPage: currentPage) {
    return currentPage === pathname
      ? themes.colors["purple-mid"]
      : themes.colors["gray-200"];
  }

  return (
    <Styled.Container>
      <Styled.Modal>
        <Styled.Header>
          <Styled.Nav>
            <Styled.CurrentPage>
              {contact && contact?.email ? (
                <CheckCircle
                  weight="fill"
                  size={30}
                  color={themes.colors["sucess-color"]}
                />
              ) : (
                <NumberCircleOne
                  weight="fill"
                  size={30}
                  color={currentPage("/")}
                />
              )}
              <a href="#">Contato</a>
            </Styled.CurrentPage>
            <CaretRight weight="bold" />
          </Styled.Nav>
          <Styled.Nav>
            <Styled.CurrentPage>
              {company && company.name ? (
                <CheckCircle
                  weight="fill"
                  size={30}
                  color={themes.colors["sucess-color"]}
                />
              ) : (
                <NumberCircleTwo
                  weight="fill"
                  size={30}
                  color={currentPage("/company")}
                />
              )}
              <a href="#">Empresa</a>
            </Styled.CurrentPage>
            <CaretRight weight="bold" />
          </Styled.Nav>
          <Styled.Nav>
            <NumberCircleThree
              weight="fill"
              size={30}
              color={currentPage("/project")}
            />
            <a href="#">Projeto</a>
          </Styled.Nav>
        </Styled.Header>
        <Outlet />
      </Styled.Modal>
    </Styled.Container>
  );
}
