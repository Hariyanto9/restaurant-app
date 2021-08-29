/* eslint-disable no-undef */
import FavoriteRestoIdb from '../src/scripts/data/favoriteresto-idb';
import * as TestFactories from './helpers/testFactories';


const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};


describe('Unlike A Restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestoIdb.putRestaurant({ id: 1 });
  });


  afterEach(async () => {
    await FavoriteRestoIdb.deleteRestaurant(1);
  });


  // 1. test menampilkan icon unlike jika restaurant sudah di sukai
  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this movie"]')).toBeTruthy();

  }); // akhir test 1
  

  // 2. icon unlike tidak ditampilkan jika restaurant belum di sukai
  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this movie"]')).toBeFalsy();

  }); // akhir test 2
  

  // 3. test simulasi icon unliked di tekan
  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('[aria-label="unlike this movie"]').dispatchEvent(new Event('click'));
  
    expect(await FavoriteRestoIdb.getAllRestaurant()).toEqual([]);

  }); // akhir test 3


  // 4. test menampilkan restaurant di sukai ketika restaurant id tsb tidak ada
  it('should no throw error if the unliked restaurants is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    // hapus dulu restaurant dari daftar restaurant yang disukai
    await FavoriteRestoIdb.deleteRestaurant(1);
  
    // kemudian, simulasikan pengguna menekan widget batal menyukai restaurant
    document.querySelector('[aria-label="unlike this movie"]').dispatchEvent(new Event('click'));
  
    expect(await FavoriteRestoIdb.getAllRestaurant()).toEqual([]);

  }); // akhir test 4


}); // akhir describe