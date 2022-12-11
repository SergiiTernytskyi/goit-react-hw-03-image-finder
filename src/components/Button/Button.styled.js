import styled from 'styled-components';

export const LoadMore = styled.button`
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 180px;
  height: 40px;
  opacity: 0.85;

  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: ${p => p.theme.lineHeights.body};
  font-weight: ${p => p.theme.fontWeights.semibold};

  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.background};
  color: ${p => p.theme.colors.primary};

  border: transparent;
  box-shadow: ${p => p.theme.shadows.second};

  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    opacity: 1;
  }
`;
