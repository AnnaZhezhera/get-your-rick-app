import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchHeroes } from '../../api';
//eslint-disable-next-line
import {
  LogoImg,
  MainWrapp,
  SearchInputWrapp,
  SearchInput,
  SearchBtn,
  IconSearch,
  IconCross,
  List,
  CharacterCard,
  HeroImage,
  CardLink,
  HeroCardTextBlock,
  HeroName,
  Herospecies,
} from './Home.styled';
import logo from '../../images/logo.png';

const Home = () => {
  const [heroes, setHeroes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  console.log('heroes', heroes);
  const location = useLocation();

  useEffect(() => {
    const fetchCharacterInfo = async () => {
      setHeroes(await fetchHeroes());
    };
    fetchCharacterInfo().catch(console.error);
  }, []);

  const filteredCharacters = heroes.filter(character => {
    return character.name.toLowerCase().includes(searchQuery);
  });

  return (
    <MainWrapp>
      <LogoImg src={logo} alt="Rick and Morty logo" width={600} height={200} />
      <SearchInputWrapp
        onSubmit={event => {
          event.preventDefault();
          setSearchQuery('');
        }}
      >
        <SearchBtn
          type="button"
          onClick={event => {
            event.preventDefault();
            setSearchQuery('');
          }}
        >
          {searchQuery === '' ? <IconSearch /> : <IconCross />}
        </SearchBtn>
        <label htmlFor="searchQuery"></label>
        <SearchInput
          type="text"
          value={searchQuery}
          placeholder="Filter by name..."
          name="searchQuery"
          id="searchQuery"
          autocomplete="nope"
          onChange={event => setSearchQuery(event.target.value)}
        />
      </SearchInputWrapp>
      <List>
        {filteredCharacters.map(character => (
          <CharacterCard key={character.id}>
            <CardLink
              to={`character/${character.id}`}
              state={{ from: location }}
            >
              <div>
                <HeroImage src={character.image} alt={character.name} />
                <HeroCardTextBlock>
                  <HeroName>{character.name}</HeroName>
                  <Herospecies>{character.species}</Herospecies>
                </HeroCardTextBlock>
              </div>
            </CardLink>
          </CharacterCard>
        ))}
      </List>
    </MainWrapp>
  );
};

export default Home;
