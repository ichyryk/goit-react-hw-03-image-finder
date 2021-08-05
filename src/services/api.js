export default function fetchPictures(name, page) {
  const API_KEY = '22783665-26f30cb64115ee9487502848d';
  const BASE_URL = 'https://pixabay.com/api';
  return fetch(
    `${BASE_URL}/?key=${API_KEY}&q=${name}&image_type=photo&page&per_page=12&page=${page}`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Нет изображения с именем ${name.tags}`));
  });
}
