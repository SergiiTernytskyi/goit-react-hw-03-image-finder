import styled from 'styled-components';

export const Search = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80px;
  padding-right: ${p => p.theme.space[5]}px;
  padding-left: ${p => p.theme.space[5]}px;

  color: ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.background};
  box-shadow: ${p => p.theme.shadows.third};
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
`;

export const SeachButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 48px;

  background-color: ${p => p.theme.colors.secondary};
  border: transparent;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  :hover {
    opacity: 1;
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: ${p => p.theme.fontSizes.l}px;
  border: none;
  outline: none;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;

  ::placeholder {
    font: inherit;
    font-size: ${p => p.theme.fontSizes.m}px;
  }
`;
