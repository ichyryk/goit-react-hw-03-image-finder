import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Container } from '../Container/Container';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Modal from '../Modal/Modal';

export default class App extends Component {
  state = {
    showModal: false,
    loader: false,
    pictureName: '',
    imgTags: '',
    largeImageURL: '',
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleFormSubmit = pictureName => {
    this.setState({ pictureName });
  };

  handleImageClick = (largeImageURL, imgTags) => {
    this.setState({ largeImageURL, imgTags, loader: true });
    this.toggleModal();
  };

  render() {
    const { showModal, largeImageURL, imgTags } = this.state;
    return (
      <Container>
        <SearchBar onSubmit={this.handleFormSubmit} />

        <ToastContainer autoClose={3000} />
        <ImageGallery
          pictureName={this.state.pictureName}
          handleImageClick={this.handleImageClick}
        />

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={imgTags} />
          </Modal>
        )}
      </Container>
    );
  }
}
