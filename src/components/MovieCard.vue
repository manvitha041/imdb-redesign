<template>
  <div class="movie-card">
    <h2>{{data.title}}</h2>
    <h4>{{data.tagline}}</h4>
    <p>{{data.overview}}</p>
  </div>
</template>

<script>
import { getMovieById } from "../shared/api";
export default {
  name: "MovieCard",
  data() {
    return {
      data: {}
    };
  },
  props: {
    id: String
  },
  methods: {
    fetchMovie(id) {
      getMovieById(id)
        .then(resp => {
          this.data = {
            title: resp.data.original_title,
            tagline: resp.data.tagline,
            overview: resp.data.overview
          };
        })
        .catch(error => {
          alert("something went wrong", error);
        });
    }
  },
  created() {
    this.fetchMovie(this.id);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./src/styles/variables";
.movie-card {
  width: 300px;
  background: white;
  padding: 8px;
  text-align: left;
  margin: 8px;
  border-radius: 4px;
  box-shadow: 4px 5px 10px 0px rgba(0, 0, 0, 0.1);
}
</style>
