/* eslint-disable no-unused-vars */
import CatalogRestourantDataSource from '../../data/restourant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createCatalogRestoDetailTemplate, createLikeButtonTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div id="card__detail" class="card__detail"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await CatalogRestourantDataSource.detailCatalogRestourant(url.id);
    const restoContainer = document.querySelector('#card__detail');
    restoContainer.innerHTML = createCatalogRestoDetailTemplate(restaurant);
    // const likeButtoncontainer = document.querySelector('#likeButtonContainer');
    // likeButtoncontainer.innerHTML = createLikeButtonTemplate();
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        rating: restaurant.rating,
        city: restaurant.city,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
      },
    });
  },
};

export default Detail;

// TODO: tampilkan movie di dalam DOM gambar, kota rating, deskripsi
// restaurant: {
//   id: restaurant.id,
//   name: restaurant.name,
//   city: restaurant.city,
//   description: restaurant.description,
//   pictureId: restaurant.pictureId,
// },
