/* eslint-disable no-undef */
const assert = require('assert');


Feature('Liking Restaurant');

Before((I) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking one restaurant', async (I) => {
  I.see('Tidak ada resto untuk ditampilkan', '.card__list');

  I.amOnPage('/');

  I.seeElement('.card__title a');
  // I.click(locate('.card__title a').first());
  const firstResto = locate('.card__title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');
 
  I.amOnPage('/#/favorite');
  I.seeElement('.movie-item');

  const likedrestoTitle = await I.grabTextFrom('.card__title');
 
  assert.strictEqual(firstRestoTitle, likedrestoTitle);
});
