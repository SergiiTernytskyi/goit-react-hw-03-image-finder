import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';

import { Input, SeachButton, Search, SearchForm } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  //   const onSubmit = event => {
  //     event.preventDefault();
  //     console.log(event);
  //   };

  return (
    <Search>
      <SearchForm onSubmit={onSubmit}>
        <SeachButton type="submit" aria-label="search">
          <FcSearch size="32" />
        </SeachButton>

        <Input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Search>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
