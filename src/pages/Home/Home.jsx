import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchHeroes, getSearchedHero } from '../../api';
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
  LoadMoreWrapp,
  LoadMore,
} from './Home.styled';
import logo from '../../images/logo.png';

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [currentHeroes, setCurrentHeroes] = useState([]);
  const [allHeroes, setAllHeroes] = useState([]);
  const [page, setPage] = useState(1);

  const [search, setSearch] = useState(searchParams.get('search') ?? '');
  const [showLoadMore, setShowLoadMore] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const fetchCharacterInfo = async () => {
      const search = searchParams.get('search');
      let fetchedHeroesInfo = { results: [], info: {} };
      try {
        if (search) {
          fetchedHeroesInfo = await getSearchedHero(1, search);
        } else {
          fetchedHeroesInfo = await fetchHeroes();
        }
      } catch (error) {
        console.log(error);
      }

      setCurrentHeroes(fetchedHeroesInfo.results.slice(0, 8)); // 8
      setAllHeroes(fetchedHeroesInfo.results); // 20

      if (fetchedHeroesInfo.info.next) {
        setShowLoadMore(true);
      } else {
        setShowLoadMore(false);
      }
    };

    fetchCharacterInfo().catch(console.error);
  }, [searchParams]);

  const onSubmitFilter = search => {
    setPage(1);
    setSearch(search);
    setSearchParams({ search });
  };

  const loadMore = async () => {
    const fetchUpdatedCharacterInfo = async () => {
      let shownHeroes = currentHeroes;
      let allHeroesLocal = allHeroes;

      // load only if all.length - current.length < 8
      if (allHeroesLocal.length - shownHeroes.length < 8) {
        const fetchedHeroesInfo = await getSearchedHero(page + 1, '');

        allHeroesLocal = allHeroesLocal.concat(fetchedHeroesInfo.results);

        setAllHeroes(allHeroesLocal); // only if loaded new page add all loaded heroes
        setPage(page + 1);

        if (!fetchedHeroesInfo.info.next) {
          setShowLoadMore(false);
        }
      }

      const currentUpdatedHeroes = shownHeroes.concat(
        allHeroesLocal.slice(shownHeroes.length, shownHeroes.length + 8)
      );

      setCurrentHeroes(currentUpdatedHeroes); // current + next 8
    };

    fetchUpdatedCharacterInfo().catch(console.error);
  };

  return (
    <MainWrapp>
      <LogoImg src={logo} alt="Rick and Morty logo" width={600} height={200} />
      <SearchInputWrapp
        onSubmit={event => {
          event.preventDefault();
          onSubmitFilter(search);
        }}
      >
        <SearchBtn
          type="button"
          onClick={onSubmitFilter}
          disabled={search ? false : true}
        >
          {!search ? (
            <IconSearch />
          ) : (
            <IconCross
              onClick={e => {
                e.stopPropagation();
                setSearchParams({});
                setSearch('');
              }}
            />
          )}
        </SearchBtn>
        <label htmlFor="searchQuery"></label>
        <SearchInput
          type="text"
          value={search}
          placeholder="Filter by name..."
          name="searchQuery"
          id="searchQuery"
          autocomplete="nope"
          onChange={e => {
            setSearch(e.target.value);
          }}
        />
      </SearchInputWrapp>

      <List>
        {currentHeroes.length === 0 && 'No Ricks found :('}

        {currentHeroes.map(character => (
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

      {showLoadMore && (
        <LoadMoreWrapp>
          <LoadMore type="submit" onClick={loadMore}>
            Load more
          </LoadMore>
        </LoadMoreWrapp>
      )}
    </MainWrapp>
  );
};

export default Home;
