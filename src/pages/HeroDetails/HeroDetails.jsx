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
} from './HeroDetails.styled';
// import { getHero, imageBaseUrl } from '../api';

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
            <div>
              <HeroAvatar src={currentHero.image} alt={currentHero.name} />
            </div>
            <div>
              <h2>{currentHero.name}</h2>
              <h3>Information</h3>
              <ul>
                <li>
                  <p>Gender</p>
                  <span>{currentHero.gender}</span>
                </li>
                <li>
                  <p>Status</p>
                  <span>{currentHero.status}</span>
                </li>
                <li>
                  <p>Species</p>
                  <span>{currentHero.species}</span>
                </li>
                <li>
                  <p>Origin</p>
                  <span>{currentHero.origin.name}</span>
                </li>
                <li>
                  <p>Type</p>
                  <span>{currentHero.type}</span>
                </li>
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
