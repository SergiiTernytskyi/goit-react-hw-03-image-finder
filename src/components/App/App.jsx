import * as Scroll from 'react-scroll';

import { Button } from 'components/Button/Button';
import { Error } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { getImages } from 'utils/imageApi';
import { GlobalStyle } from '../GlobalStyle';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Searchbar } from '../Searchbar/Searchbar';
import { Main } from './App.styled';

const INITIAL_STATE = {
  search: '',
  images: [],
  page: 1,
  totalImages: null,
  activeImage: {},
  error: null,
  showModal: false,
  loading: false,
};

const scroll = Scroll.animateScroll;
const scrollOptions = { duration: 1500, delay: 300, smooth: 'linear' };

export class App extends Component {
  state = INITIAL_STATE;

  async componentDidUpdate(_, prevState) {
    const { search, page } = this.state;

    if (prevState.search !== search || prevState.page !== page) {
      try {
        this.setState({ loading: true });
        const data = await getImages(search, page);
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          totalImages: data.total,
        }));
      } catch {
        this.setState({
          error: `Something went wrong. Try one more time.`,
        });
      } finally {
        this.setState({ loading: false });
      }
      scroll.scrollToBottom(scrollOptions);
    }
  }

  searchHandler = async event => {
    event.preventDefault();

    const { search } = event.target.elements;

    if (search.value.trim() === '') {
      toast.error('Enter something to search!!!');
      return;
    }

    this.setState({
      search: search.value,
      page: 1,
      totalImages: null,
      images: [],
    });
  };

  loadMoreHandler = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  openModal = value => {
    this.setState({
      activeImage: value,
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({ activeImage: null, showModal: false });
  };

  render() {
    const { images, totalImages, activeImage, showModal, loading, error } =
      this.state;

    return (
      <>
        <Searchbar onSubmit={this.searchHandler} />
        <Main>
          {loading && <Loader />}
          {error && <Error>{error}</Error>}
          {images.length > 0 && (
            <ImageGallery
              images={images}
              showModal={showModal}
              openModal={this.openModal}
            />
          )}
          {totalImages > 12 && <Button onClick={this.loadMoreHandler} />}
          {totalImages === 0 && <Error>Nothing found, nothing to show</Error>}
        </Main>

        <Toaster position="top-right" reverseOrder={false} />
        {showModal && (
          <Modal activeImage={activeImage} onClose={this.closeModal} />
        )}
        <GlobalStyle />
      </>
    );
  }
}
