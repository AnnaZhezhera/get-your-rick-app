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
  width: 120px;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.17;
  text-transform: uppercase;
  text-decoration: none;
  color: black;

  margin-bottom: 32px;

  &:hover {
    fill: rgba(142, 142, 147, 1);
    color: rgba(142, 142, 147, 1);
  }
`;

export const HeroAvatarÇontainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;

export const HeroAvatar = styled.img`
  width: 300px;
  height: 300px;
  background: rgb(253, 247, 242);
  object-fit: cover;
  border: 5px solid #f2f2f7;
  border-radius: 50%;
`;

export const HeroName = styled.h2`
  font-family: 'Roboto';
  font-size: 48px;
  line-height: 1.17;
  text-align: center;
  margin-bottom: 48px;
`;

export const ListTitle = styled.h3`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0.15px;
  color: rgba(142, 142, 147, 1);
  text-align: center;
  margin-bottom: 48px;
`;

export const HeroListItem = styled.li`
  border-bottom: 1px solid rgba(33, 33, 33, 0.08);
  padding: 9px 0 12px;
`;

export const ListItemName = styled.span`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0.15px;
  color: rgba(8, 31, 50, 1);
`;

export const ListItemText = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 1.4;
  letter-spacing: 0.25px;
  color: rgba(110, 121, 140, 1);
`;
