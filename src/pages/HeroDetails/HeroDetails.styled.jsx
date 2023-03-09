import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as ArrowBack } from 'images/svg/ArrowBack.svg';

export const MainWrapp = styled.div`
  width: 1440px;
  margin: 0 auto;
  padding: 21px 50px 142px;
`;

export const HeroCardWrapp = styled.div`
  width: 413px;
  margin: 0 auto;
`;

export const GoBackText = styled.span`
  padding-left: 8px;
`;

export const ArrowBackIcon = styled(ArrowBack)`
  fill: current;
`;

export const GoBackLink = styled(NavLink)`
  display: flex;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.17;
  text-transform: uppercase;
  text-decoration: none;
  color: black;

  margin-bottom: 32px;

  &:hover {
    fill: darkcyan;
    color: darkcyan;
  }
`;

export const HeroAvatar = styled.img`
  width: 300px;
  height: 300px;
  background: rgb(253, 247, 242);
  object-fit: cover;
  border: 5px solid #f2f2f7;
  border-radius: 50%;
`;
