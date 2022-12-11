import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    search: '',
  };

  searchHandler = event => {
    event.preventDefault();

    const { search } = event.currentTarget;
    this.setState({ search: search.value });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.searchHandler} />
        <GlobalStyle />
      </>
    );
  }
}
