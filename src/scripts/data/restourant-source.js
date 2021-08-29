import API_ENDPOINT from '../globals/api-endpoint';

class CatalogRestourantDataSource {
  static async homeCatalogRestourant() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailCatalogRestourant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson.restaurant;
  }
}

export default CatalogRestourantDataSource;