import axios from 'axios';

const KEY = '30592640-c7793cd5d6c6bb2f70fd4091c';
axios.defaults.baseURL = 'https://pixabay.com/api';
const axiosParams = {
  params: {
    safesearch: true,
    orientation: 'horizontal',
    image_type: 'photo',
  },
};

export async function getImages(query) {
  const axiosUrl = `?key=${KEY}&q=${query}&page=${1}`;
  const { data } = await axios.get(axiosUrl, axiosParams);
  return data;
}
