import CONFIG from '../../globals/config';

const createCatalogRestoDetailTemplate = (resto) => `
<h2> Detail Restaurant ${resto.name} </h2>
<div class="card__detail__header">
  <div class="card__detail__poster">
    <img class="lazyload" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
  </div>
  <div class="card__detail__info">
    <h2 class="card__detail__title">${resto.name}</h2>
    <div class="card__detail__city">
      <p>City : ${resto.city} ( ⭐️<span class="card__rating_value">${resto.rating}</span> ) </p>
    </div>

    <div class="card__detail__address">
      <p>address: ${resto.address}</p>
    </div>
    <div class="card__detail__desc">
      <p>${resto.description}</p>    
    </div>
  </div>
</div>

<div class="card__detail__menus">
  <h4 class="label__menus">Menus</h4>
  <p class="card__detail__categories">
    Categories: ${resto.categories.map((categorie) => categorie.name)}
  </p>
  <div class="card__menus__categories">
    <div class="menus__categories__food">
      <div class="food__title">
        <h4> Food </h4>
      </div>
      <div class="food__desc">
        <p>${resto.menus.foods.map((food) => food.name)}</p>
      </div>
    </div>
    <div class="menus__categories__drink">
      <div class="drink__title">
        <h4> Drink </h4>
      </div>
      <div class="drink__desc">
        <p>${resto.menus.drinks.map((drink) => drink.name)}</p>
      </div>
    </div>
  </div>  
</div>

<div class="card__detail__overview">
  <h3 class="overview__title">" Review Customer "</h3>
  <div class="card__customer__review">
    ${resto.customerReviews.map((review) => `
      <div class="customer__review__item">
          <h6 class="review__name" tabindex="0">${review.name}</h6>
          <p class="review_desc" tabindex="0">" ${review.review} "</p>
          <p class="review__date" tabindex="0">${review.date}</p>
      </div>
      `).join('')}
  </div>
</div>
`;
// <img src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
const createCatalogRestoItemTemplate = (resto) => `
  <div class="card__item">
      <div class="card__img">
        <img class="lazyload" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" /></img>
      </div>

      <div class="card__content">
        <div class="card__title">
          <h2><a href="${`/#/detail/${resto.id}`}">${resto.name}</a></h2>
        </div>
        <div class="card__city">
          <div class="card__city__label">
            <p>City : ${resto.city} ( ⭐️<span class="card__rating_value">${resto.rating}</span> ) </p>
          </div>
        </div>
        <div class="card__decs"><p>${resto.description}</p></div>
      </div>
    </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;
 
const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export { 
  createCatalogRestoDetailTemplate, 
  createCatalogRestoItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
