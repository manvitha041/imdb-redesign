<template>
  <div class="page">
    <div
      class="movie"
      v-bind:style="{ 'background-image': 'url(' + 'https://image.tmdb.org/t/p/w1400_and_h450_face/' + movie.backdrop_path + ')' }"
    >
      <div class="movie-img-overlay">
        <div class="mk-video">
          <img
            class="mk-image"
            v-bind:src="'https://image.tmdb.org/t/p/w185_and_h278_bestv2/' + movie.poster_path"
            alt
          />
        </div>
        <div class="mk-content">
          <div class="movie-details">
            <h5 class="mk-title">{{movie.title}}</h5>
            <span class="my-review">{{movie.vote_average }}</span>
          </div>
          <p class="overview">{{movie.overview}}</p>
          <ul v-for="item in crew" v-bind:key="item.id" class="crew">
            <li class="created">{{item.name}}</li>
            <li class="created">{{item.job}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-3 col-md-7 col-lg-9">
          <div class="white-column">
            <section class="top-billed-cast">
              <h3 class="mk-heading">Cast</h3>
              <ul class="full-cast">
                <li v-for="item in cast" v-bind:key="item.id" class="mk-cast-details">
                  <img
                    v-bind:src="'https://image.tmdb.org/t/p/w138_and_h175_face/' +  item.profile_path"
                    alt
                    class="cast-image"
                  />
                  <h5 class="cast-name">{{item.name}}</h5>
                  <p class="cast-desc">{{item.character}}</p>
                </li>
              </ul>
            </section>
            <section class="mk-video-section">
              <iframe
                v-for="item in video"
                v-bind:key="item.id"
                class="movie-video"
                v-bind:src="'https://www.youtube.com/embed/' + item.key"
              ></iframe>
            </section>
            <section v-for="item in review" v-bind:key="item.id" class="mk-review-section">
              <div class="content-section">
                <h3 class="mk-review">A review by {{item.author}}</h3>
                <p>{{ item.content.replace(/_/g, "").replace(/>/g, "") }}</p>
              </div>
            </section>
          </div>
        </div>
        <div class="col-sm-9 col-md-5 col-lg-3">
          <div class="blue-column">
            <div class="social_links">
              <a :href="'https://www.facebook.com/' + social.facebook_id" target="_blank">
                <i class="fa fa-facebook-square mk-social-icons" style="color:white"></i>
              </a>
              <a :href="'https://www.instagram.com/' + social.instagram_id" target="_blank">
                <i class="fa fa-instagram mk-social-icons" style="color:white"></i>
              </a>
              <a :href="'https://www.twitter.com/' + social.twitter_id" target="_blank">
                <i class="fa fa-twitter-square mk-social-icons" style="color:white"></i>
              </a>
              <h6>
                <strong>Facts</strong>
              </h6>
              <h6>
                <strong>Status</strong>
              </h6>
              <p class="mk-social">{{details.status}}</p>
              <h6>
                <strong>Release Information</strong>
              </h6>
              <p class="release">{{details.release_date}}</p>
              <h6>
                <strong>Runtime</strong>
              </h6>
              <p class="mk-social">{{details.runtime}}</p>
              <h6>
                <strong>Budget</strong>
              </h6>
              <p class="mk-social">{{details.budget}}</p>
              <h6>
                <strong>Revenue</strong>
              </h6>
              <p class="mk-social">{{details.revenue}}</p>
            </div>
            <div class="genre">
              <h6>
                <strong>Genres</strong>
              </h6>
              <ul class="genre-types">
                <li v-for="item in genres" v-bind:key="item.id">
                  <a href="#">
                    <span class="badge badge-pill badge-light">{{item.name}}</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="keywords">
              <h6>
                <strong>Keywords</strong>
              </h6>
              <ul class="keyword-types">
                <li v-for="item in keywords" v-bind:key="item.id">
                  <a href="#">
                    <span class="badge badge-pill badge-light">{{item.name}}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getMovieById,
  getVideo,
  getReview,
  getCastCrew,
  getSocialLinks,
  getReleaseInfo,
  getGenres,
  getKeywords,
  getRating,
  getDetails
} from "../shared/api";
export default {
  name: "Movie",
  data() {
    return {
      movie: {},
      video: [],
      social: {},
      review: [],
      cast: [],
      crew: [],
      release: [],
      genres: [],
      keywords: [],
      details: []
    };
  },
  methods: {
    getEachMovie() {
      const id = this.$route.params.id;
      getMovieById(id)
        .then(resp => {
          this.movie = resp.data;
        })
        .catch(error => {
          console.log("somenthing went wrong", error);
        });
    },
    getEachCastCrew() {
      const id = this.$route.params.id;
      getCastCrew(id)
        .then(resp => {
          // this.cast = resp.data.cast;
          // this.crew = resp.data.crew;
          for (var i = 0; i < 3; i++) {
            this.crew.push(resp.data.crew[i]);
          }

          for (var i = 0; i < 5; i++) {
            this.cast.push(resp.data.cast[i]);
          }
        })
        .catch(error => {
          console.log("somenthing went wrong", error);
        });
    },
    getEachReview() {
      const id = this.$route.params.id;
      getReview(id)
        .then(resp => {
          for (let i = 0; i < 1; i++) {
            this.review.push(resp.data.results[i]);
          }
        })
        .catch(error => {
          console.log("somenthing went wrong", error);
        });
    },
    getsocial() {
      const id = this.$route.params.id;
      getSocialLinks(id)
        .then(resp => {
          this.social = resp.data;
        })
        .catch(error => {
          console.log("somenthing went wrong", error);
        });
    },
    getReleaseDetails() {
      const id = this.$route.params.id;
      getReleaseInfo(id)
        .then(resp => {
          this.release = resp.data;
        })
        .catch(error => {
          console.log("somenthing went wrong", error);
        });
    },
    getEachGenres() {
      const id = this.$route.params.id;
      getGenres(id)
        .then(resp => {
          // this.genres = resp.data;
          for (var i = 0; i < 5; i++) {
            this.genres.push(resp.data.genres[i]);
          }
        })
        .catch(error => {
          console.log("somenthing went wrong", error);
        });
    },
    getEachKeywords() {
      const id = this.$route.params.id;
      getKeywords(id)
        .then(resp => {
          // this.keywords = resp.data;
          for (var i = 0; i < 15; i++) {
            this.keywords.push(resp.data.keywords[i]);
          }
        })
        .catch(error => {
          console.log("somenthing went wrong", error);
        });
    },
    getEachDetails() {
      const id = this.$route.params.id;
      getDetails(id)
        .then(resp => {
          this.details = resp.data;
          this.details.revenue =
            "$" +
            this.details.revenue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
          this.details.budget =
            "$" +
            this.details.budget.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, "$&,");
        })
        .catch(error => {
          console.log("somenthing went wrong", error);
        });
    },
    getEachVideo() {
      const id = this.$route.params.id;
      getVideo(id)
        .then(resp => {
          this.video = resp.data.results;
        })
        .catch(error => {
          console.log("somenthing went wrong", error);
        });
    }
  },
  created() {
    this.getEachMovie();
    this.getEachVideo();
    this.getsocial();
    this.getEachReview();
    this.getEachCastCrew();
    this.getReleaseDetails();
    this.getEachGenres();
    this.getEachKeywords();
    this.getEachDetails();
  }
};
</script>

<style>
.movie {
  color: white;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
.movie-img-overlay {
  display: flex;
  justify-content: space-evenly;
  padding: 50px;
  align-items: center;
  background-image: radial-gradient(
    circle at 20% 50%,
    rgba(53, 40, 30, 0.41) 0,
    rgba(70, 58, 49, 0.65) 100%
  );
}
.mk-image {
  width: 185px;
  height: 278px;
}
.mk-content {
  text-align: left;
  width: 55%;
}
.movie-details {
  display: flex;
}
.mk-title {
  font-size: 2.24em;
  padding-right: 16px;
}
.overview {
  font-size: 15px;
}
.crew {
  padding-top: 16px;
  padding-left: 0px;
  margin: 0px;
}
.crew .created {
  list-style: none;
  font-size: 15px;
}
.my-review {
  padding-top: 6px;
  font-size: 20px;
  background: black;
  height: 45px;
  width: 45px;
  text-align: center;
  border-radius: 50%;
  margin-top: 3px;
}

.mk-tabs {
  display: flex;
  justify-content: center;
  border-top: 1px solid #d7d7d7;
  border-bottom: 1px solid #d7d7d7;
}
.nav.nav-tabs {
  width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  box-sizing: border-box;
}
.nav .nav-link {
  font-weight: 600;
  font-size: 1.1em;
  color: black;
}
.white-column {
  display: flex;
  flex-wrap: wrap;

  box-sizing: border-box;
  justify-content: flex-end;
}
.top-billed-cast {
  box-sizing: border-box;
  width: 740px;
  display: block;
  padding-top: 20px;
  margin-bottom: 20px;
}
.mk-heading {
  font-weight: 600;
  font-size: 1.4em;
  margin-bottom: 20px;
  text-align: initial;
}
.full-cast {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}
.mk-cast-details {
  width: 140px;
  background-color: #fff;
  box-sizing: border-box;
  margin-right: 10px;
  border: 1px solid #e3e3e3;
  padding-bottom: 10px;
}
.cast-name {
  padding: 10px 10px 0 10px;
  font-weight: bold;
  font-size: 1em;
  line-height: 1.4em;
  margin: 0;
}
.cast-desc {
  padding: 0 10px;
  font-size: 0.9em;
  line-height: 1.4em;
  margin: 0;
}
.mk-video-section {
  width: 740px;
  overflow: hidden;
  overflow-x: scroll;
  white-space: nowrap;
  display: flex;
}
.movie-video {
  width: 650px;
  height: 300px;
  border: none;
  margin-right: 8px;
}
.mk-review-section {
  width: 740px;
  display: block;
  padding-top: 5px;
  padding-bottom: 10px;
  background: white;
  height: 200px;
  text-align: left;
  overflow: auto;
  margin-top: 20px;
  margin-bottom: 20px;
}
.content-section {
  padding: 10px 20px 5px 20px;
}
.content-section p {
  font-size: 16px;
}
.row a {
  color: black;
}
.blue-column {
  padding-left: 40px;
  text-align: left;
  background-color: #35495e;
  color: white;
  padding-bottom: 20px;
}

.blue-column p {
  margin-top: -6px;
  font-size: 14px;
}
h6 {
  padding-bottom: 4px;
}
strong {
  margin-bottom: 35px;
  line-height: 1em;
}
.mk-social {
  margin-bottom: 35px;
  line-height: 1em;
}
.social_links {
  text-align: left;
}
.mk-social-icons {
  padding-left: 0px;
  padding-right: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
}
.release {
  padding-left: 0px;
  margin-bottom: 20px;
  line-height: 1em;
}

.genre {
  margin-bottom: 30px;
  width: 180px;
}

.genre-types {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-left: 0px;
}

.genre-types li {
  margin-right: 5px;
  margin-bottom: 10px;
  list-style: none;
}
.keywords {
  margin-bottom: 20px;
}
.keyword-types {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-left: 0px;
}
.keyword-types li {
  margin-right: 5px;
  margin-bottom: 10px;
  list-style: none;
}
@media only screen and (max-width: 600px) {
  /* for mobile only */
  .page {
    overflow-x: hidden;
  }
  .mk-content {
    width: 100%;
  }
  .mk-video {
    display: none;
  }
  .top-billed-cast {
    padding-top: 20px;
    margin-bottom: 20px;
    width: 354px;
  }
  .overview {
    display: none;
  }
  .crew {
    display: none;
  }
  .mk-video-section {
    height: 200px;
    width: 354px;
  }

  .my-review {
    padding-left: 0px;
  }
  .white-column {
    justify-content: left;
  }
  .top-billed-cast {
    overflow-x: scroll;
  }
  .mk-cast-details {
    margin-right: 5px;
    padding-bottom: 5px;
  }
  .cast-name {
    padding: 5px;
  }
  .cast-desc {
    padding: 0px;
  }
  .mk-review-section {
    padding-top: 0px;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 354px;
  }
}
@media (min-width: 600px) and (max-width: 1024px) {
  /* for ipad only */
  .movie {
    padding: 20px;
  }
  .container {
    max-width: 100%;
  }
  .mk-image {
    width: auto;
    height: 200px;
  }
  .mk-content {
    padding-left: 20px;
  }
  .overview {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .top-billed-cast {
    width: 422px;
    overflow-x: scroll;
  }
  .mk-video-section {
    width: 422px;
  }
  .movie-video {
    width: 175px;
    height: 200px;
  }
  .mk-review-section {
    width: 422px;
  }
}
</style>