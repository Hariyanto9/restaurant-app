import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import { createCatalogRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <h2>Daftar Restoran Favorite</h2>
    <div id="card__favorite" class="card__favorite"></div>
    
    `;
  },

  async afterRender() {
    const restoFavorite = await FavoriteRestoIdb.getAllRestaurant();
    const restoContainer = document.querySelector('#card__favorite');
    restoFavorite.forEach((restaurant) => {
      restoContainer.innerHTML += createCatalogRestoItemTemplate(restaurant);
    });
  },
};

export default Favorite;