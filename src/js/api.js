import axios from 'axios'
import { createGalleryImg } from './markup-img';
import { alert } from '../index';
import { pege } from '../index';


let pege = 1;
const per_page = 40;

async function getUser(query, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  //const KEY = '36025567-5ea91224bccb9b50632c1726a';
  const options = {
    params: {
      key: '36025567-5ea91224bccb9b50632c1726a',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: page,
      per_page: per_page,
    },
  };
  try {
    const response = await axios.get(BASE_URL, options);

    alert(
      response.data.hits.length,
      response.data.total
    );

    createGalleryImg(
      response.data
    );

  } catch (error) {
    console.error(error);
  }
}

export { getUser };
