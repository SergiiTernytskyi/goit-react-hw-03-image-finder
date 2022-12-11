import styled from 'styled-components';

export const Item = styled.li`
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
  box-shadow: ${p => p.theme.shadows.first};
`;

export const Picture = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.1);
    cursor: zoom-in;
  }
`;
