<template>
  <div class="footer">
    <span>
      <i class="fa fa-facebook-official"></i>
      <i class="fa fa-twitter-square"></i>
    </span>
    <p>Copyright Imdb.com, Inc</p>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
.footer {
  background: #35495e;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 62px;
  color: white;
  text-align: center;
 
}
.fa{
  padding-top:6px;
    font-size: 25px;
    padding-left: 10px;
}
p{
    font-size: 19px;
    padding-top: 0px;
    margin-bottom: 0px;
}


</style>