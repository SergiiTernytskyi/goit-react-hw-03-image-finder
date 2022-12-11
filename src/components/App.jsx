import { Component } from 'react';
import { getImages } from 'utils/imageApi';
import { GlobalStyle } from './GlobalStyle';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    search: '',
    images: [],
  };

  searchHandler = async event => {
    event.preventDefault();
    const { search } = event.currentTarget;
    try {
      const data = await getImages(search.value);
      this.setState({ images: data.hits });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { images } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.searchHandler} />
        <main>
          <ImageGallery images={images} />
        </main>
        <GlobalStyle />
      </>
    );
  }
}
