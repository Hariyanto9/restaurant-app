import CatalogRestourantDataSource from '../../data/restourant-source';
import { createCatalogRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    
    <div class="hero">
      <div class="hero__inner">
        <h1 class="hero__title">selamat datang di website finding restorant</h1>
        <h2 class="hero__desc">temukan pengalaman di restoran terbaik kami</h2>
      </div>
    </div>
    <div class="about__us">
      <div class="about__img">
        <picture>
          <source media="(max-width: 1200px)" srcset="./images/hero-image_2-xl.jpg">
          <source media="(max-width: 900px)" srcset="./images/hero-image_2-large.jpg">
          <source media="(max-width: 400px)" srcset="./images/hero-image_2-small.jpg">
          <img
              src='../images/heros/hero-image.jpg' 
              alt="image about us"></img>
        </picture>

        <img class="lazyload" src="../images/heros/hero-image_2.jpg" alt="image about us" />
      </div>
      <div class="about__text">
        <div class="about__decs">
          <h2 class="about__title">Finding restourant</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
            debitis enim sequi sit nihil consequatur vel, quod explicabo
            adipisci libero? Soluta expedita quidem voluptates qui dolor aut
            saepe laborum laboriosam!, Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Dolor nihil, ut ullam magnam sequi minus
            exercitationem repellendus. Assumenda fugiat ex dolor recusandae,
            nulla, accusamus praesentium voluptatum quidem quisquam, nisi
            quam?Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Delectus eum facere nostrum officiis qui quidem ratione similique,
            soluta veniam voluptatum. Accusantium ad amet asperiores, aut
            commodi corporis dicta distinctio ducimus expedita itaque
            laudantium magnam maiores,
          </p>
          <div class="about__btn">
            <button aria-label="button untuk lihat detail">
              Read Detail
            </button>
          </div>
        </div>
      </div>
    </div>

    <section id="cardContent" class="content">
      <h2>Katalog Restorant</h2>
      <div id="card__list" class="card__list"></div>
    </section>
    `;
  },

  async afterRender() {
    const restourants = await CatalogRestourantDataSource.homeCatalogRestourant();
    const restoContainer = document.querySelector('#card__list');
    restourants.forEach((restourant) => {
      restoContainer.innerHTML += createCatalogRestoItemTemplate(restourant);
    });
  },

};

export default Home;
