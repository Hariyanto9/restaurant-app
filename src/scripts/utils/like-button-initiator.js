import FavoriteRestoIdb from '../data/favoriteresto-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;
    console.log(id);

    if (await this._isRestaurantExist(id)) {
      // console.log('button liked di render');
      this._renderLiked();
    } else {
      // console.log('button like di render');
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const idRestoExist = await FavoriteRestoIdb.getRestaurant(id);
    return !!idRestoExist;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      console.log('button like ditekan');
      await FavoriteRestoIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => { 
      console.log('button liked ditekan');

      await FavoriteRestoIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },

};

export default LikeButtonInitiator;