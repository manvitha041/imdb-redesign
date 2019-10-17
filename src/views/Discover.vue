<template>
  <div class="card-banner">
    <div
      v-for="item in discover"
      v-bind:key="item.id"
      class="card text-left"
      v-bind:style="{ 'background-image': 'url(' + 'https://image.tmdb.org/t/p/w1400_and_h450_face/' + item.backdrop_path + ')' }"
    >
      <router-link :to="{ path: '/movie/' + item.id  }">
        <div class="card-img-overlay">
          <div class="card-content">
            <div class="card-info">
              <h5 class="card-title">{{item.title}}</h5>
              <span class="review">{{item.vote_average}} / 10</span>
            </div>
            <p class="card-text">{{item.overview}}</p>
          </div>
          <div class="card video">
            <img
              v-bind:src="'https://image.tmdb.org/t/p/w185_and_h278_bestv2/' + item.poster_path"
              class="card-img-top"
              alt
            />
          </div>
        </div>
      </router-link>
    </div>
    <button @click="loadMore" type="button" class="btn btn-primary load">Load More</button>
  </div>
</template>


<script>
import { getDiscover } from "../shared/api";

export default {
  name: "Discover",
  data() {
    return {
      currentPageNumber: 1,
      discover: [] 
    };
  },
  methods: {
    loadMore() {
      this.currentPageNumber = this.currentPageNumber + 1;
      getDiscover(this.currentPageNumber)
        .then(resp => {
          this.discover = this.discover.concat(resp.data.results);
        })
        .catch(error => {
          alert("somenthing went wrong", error);
        });
    },
    getDiscoverData() {
      getDiscover(this.currentPageNumber)
        .then(resp => {
          this.discover = resp.data.results;
        })
        .catch(error => {
          alert("somenthing went wrong", error);
        });
    }
  },
  created() {
    this.getDiscoverData();
  }
};
</script>


<style>
a {
  color: white;
}
a:hover {
  color: rgb(227, 242, 253);
}
.card-img-overlay {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-image: radial-gradient(
    circle at 20% 50%,
    rgba(53, 40, 30, 0.41) 0%,
    rgba(27.45%, 22.75%, 19.22%, 0.65) 100%
  );
}

.card-img-top {
  width: auto;
  height: 200px;
}

.card.video {
  margin-top: 30px;
  background-color: transparent !important;
  border: none;
}


.card.text-left {
  height: 325px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  text-align: center;
  color: white;
  border: none;
  border-bottom: 5px solid rgb(227, 242, 253);
}

.card-content {
  width: 50%;
}

.card-info {
  display: flex;
}

.review {
  padding-left: 20px;
  padding-top: 11px;
  font-size: 20px;
}

.card-title {
  font-size: 2.4em;
  line-height: 1.1em;
}

.card-text {
  font-size: 15px;
}
.card-details li {
  list-style: none;
}
.load{
  margin-bottom: 5px;
}
@media only screen and (max-width: 600px) {
  .card-text {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    padding-top: 5px;
  }
  .card-img-top {
  width: auto;
  height: 150px;
}
  .card-info {
    flex-direction: column;
  }
  .card-title {
    font-size: 2em;
  }
  .review {
    padding-left: 0px;
    padding-top: 0px;
    font-size: 18px;
  }
  .form-inline.my-2.my-lg-0 {
    display: none;
  }
  .navbar.navbar-expand-lg {
    margin-left: 5px;
  }
}

@media only screen and (min-width: 600px) {
  .card-text {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    padding-top: 10px;
  }
  .card-info {
    flex-direction: column;
  }
  .card-title {
    font-size: 2em;
  }
  .review {
    padding-left: 0px;
    padding-top: 0px;
    font-size: 18px;
  }
}
</style>