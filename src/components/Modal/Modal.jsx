import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { ModalWindow, Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    activeImage: PropTypes.shape({
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }),
  };

  componentDidMount() {
    window.addEventListener('keydown', this.keyPressHandler);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyPressHandler);
  }

  keyPressHandler = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  backdropClickHandler = ({ target, currentTarget }) => {
    if (currentTarget === target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props.image;

    return createPortal(
      <Overlay onClick={this.backdropClickHandler}>
        <ModalWindow>{<img src={largeImageURL} alt={tags} />}</ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}
