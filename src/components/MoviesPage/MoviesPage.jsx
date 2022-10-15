import { useState, useEffect } from 'react';
import { apiSaerch } from '../fetch';
import  SearchBar  from '../SearchBar/SearchBar';
import { MovieItem } from '../MovieItem/MovieItem';
import { Note } from './MoviesPageStyle';

const MoviesPage = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [searchList, setSearchList] = useState([]);
  const [note, setNote] = useState(false);

  useEffect(() => {
    if (name === '') {
      return;
    }
    fethSearch(name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  const fethSearch = async searchName => {
    setNote(false);

    try {
      const apiMoviesPage = await apiSaerch(searchName);
      setSearchList(apiMoviesPage);
      notification(apiMoviesPage);
    } catch (e) {
      setError(true);
    }
  };

  const searchSubmit = SearchName => {
    setName(SearchName);
  };

  const checkQuery = param => {
    if (param !== null) {
      setName(param);
    }
  };

  const notification = data => {
    if (data.length === 0) {
      setNote(true);
    }
  };

  return (
    <>
      <SearchBar onSubmit={searchSubmit} params={checkQuery} />
      {error && <p>Sorry ( please try again</p>}
      {name !== '' && <MovieItem items={searchList} />}
      {note && <Note>Sorry :( no movies name {name}</Note>}
    </>
  );
}

export default MoviesPage;