import { useParams, Outlet, useLocation } from 'react-router-dom';
import React, { Suspense, useState, useEffect } from 'react';
import { getHero } from '../../api';
import {
  MainWrapp,
  HeroCardWrapp,
  GoBackLink,
  ArrowBackIcon,
  GoBackText,
  HeroAvatar,
  HeroName,
  HeroAvatarÇontainer,
  ListTitle,
  HeroListItem,
  ListItemName,
  ListItemText,
} from './HeroDetails.styled';

const HeroDetails = () => {
  const { id } = useParams();
  const [currentHero, setCurrentHero] = useState({});

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  console.log(location.state.from);

  useEffect(() => {
    const getHeroById = async heroId => {
      setCurrentHero(await getHero(heroId));
    };
    getHeroById(id).catch(console.error);
  }, [id]);

  return (
    <MainWrapp>
      <GoBackLink to={backLinkHref}>
        <ArrowBackIcon />
        <GoBackText>Go back</GoBackText>
      </GoBackLink>
      {currentHero.id && (
        <HeroCardWrapp>
          <div>
            <HeroAvatarÇontainer>
              <HeroAvatar src={currentHero.image} alt={currentHero.name} />
            </HeroAvatarÇontainer>
            <div>
              <HeroName>{currentHero.name}</HeroName>
              <ListTitle>Information</ListTitle>
              <ul>
                <HeroListItem>
                  <ListItemName>Gender</ListItemName>
                  <ListItemText>{currentHero.gender}</ListItemText>
                </HeroListItem>
                <HeroListItem>
                  <ListItemName>Status</ListItemName>
                  <ListItemText>{currentHero.status}</ListItemText>
                </HeroListItem>
                <HeroListItem>
                  <ListItemName>Species</ListItemName>
                  <ListItemText>{currentHero.species}</ListItemText>
                </HeroListItem>
                <HeroListItem>
                  <ListItemName>Origin</ListItemName>
                  <ListItemText>{currentHero.origin.name}</ListItemText>
                </HeroListItem>
                <HeroListItem>
                  <ListItemName>Type</ListItemName>
                  {currentHero.type === '' && (
                    <ListItemText>Unknown</ListItemText>
                  )}
                  <ListItemText>{currentHero.type}</ListItemText>
                </HeroListItem>
              </ul>
            </div>
          </div>
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </HeroCardWrapp>
      )}
    </MainWrapp>
  );
};

export default HeroDetails;
