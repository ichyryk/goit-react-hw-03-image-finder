import { Component } from 'react';
import PropTypes from 'prop-types';
import { onErrorToast } from '../ToastError';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';
import { GalleryLoader } from '../Loader/Loader';
import fetchPictures from '../../services/api';
import s from './ImageGallery.module.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

class ImageGallery extends Component {
  state = {
    pictures: [],
    page: 1,
    status: Status.IDLE,
    error: null,
  };

  onLoadMoreBtn = e => {
    e.preventDefault();
    this.onFetchPictures();

    this.scrollPageToEnd();
  };

  onFetchPictures = () => {
    const name = this.props.pictureName;
    const { page } = this.state;

    fetchPictures(name, page)
      .then(pictures => {
        if (pictures.hits.length === 0) {
          onErrorToast();
        }

        return this.setState(prevState => ({
          pictures: [...prevState.pictures, ...pictures.hits],
          page: this.state.page + 1,
          status: Status.RESOLVED,
        }));
      })
      .catch(error => this.setState({ error, status: Status.REJECTED }));
  };

  scrollPageToEnd = () => {
    setTimeout(() => {
      window.scrollBy({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }, 1000);
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pictureName;
    const nextName = this.props.pictureName;

    if (prevName !== nextName) {
      this.setState({ status: Status.PENDING, page: 1, pictures: [] });
      setTimeout(() => {
        this.onFetchPictures();
      }, 500);
    }
  }

  render() {
    const { pictures, error, status } = this.state;

    if (status === Status.IDLE) {
      return (
        <>
          <h1>Waiting for the pictures...</h1>
        </>
      );
    }

    if (status === Status.PENDING) {
      return <GalleryLoader />;
    }

    if (status === Status.REJECTED) {
      return <h2>{error.message}</h2>;
    }

    if (status === Status.RESOLVED) {
      return (
        <>
          <ul className={s.ImageGallery}>
            {pictures.map(({ id, webformatURL, largeImageURL, tags }) => (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                tags={tags}
                handleImageClick={this.props.handleImageClick}
              />
            ))}
          </ul>
          {pictures.length > 0 && (
            <Button onClick={this.onLoadMoreBtn} aria-label="add contact" />
          )}
        </>
      );
    }
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.object),
  handleImageClick: PropTypes.func,
  page: PropTypes.number,
};
