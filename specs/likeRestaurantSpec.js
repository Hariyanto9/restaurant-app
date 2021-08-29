/* eslint-disable no-undef */
import FavoriteRestoIdb from '../src/scripts/data/favoriteresto-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Reataurant', () => {

  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this movie"]')).toBeTruthy();
  }); // akhir it test 1


  // 2. test unlike button
  it('should not show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this movie"]')).toBeFalsy();
  }); // akhir it test 2
  
  
  // 3. simulasi button like ditekan
  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });


    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestoIdb.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });

    FavoriteRestoIdb.deleteRestaurant(1);

  }); // akhir it test 3


  // 4. test movie sudah disukai, maka hanya mengecek film id tsb
  it('should not add a rentaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await FavoriteRestoIdb.putRestaurant({ id: 1 });
    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllRestaurant()).toEqual([{ id: 1 }]);

    FavoriteRestoIdb.deleteRestaurant(1);

  }); // akhit it test 4

  // 5. test film tidak memiliki ID
  // menggunakan metode xit (untuk menonaktifkan test), bukan it
  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllRestaurant()).toEqual([]);

  }); // akhir it test 5


}); // akhir describe