<template>
  <div>
<h4>List Product</h4>
    <a href="create">Create new product</a>
    <div>
      <table class="table table-striped table-bordered no-wrap">
        <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Slug</th>
          <th>Description</th>
          <th>Price</th>
          <th>Manufacturer</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        <tr :class="{ active: index === currentIndex }" v-for="(product, index) in products"  v-bind:key="index">
          <td v-text="product.id"></td>
          <td v-text="product.name"></td>
          <td v-text="product.slug"></td>
          <td v-text="product.description"></td>
          <td v-text="product.price"></td>
          <td v-text="product.manufacturer"></td>
          <td>
            <a href="/edit">Edit  </a>
            <a href="/detail">Detail</a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import ProductService from "../service/ProductService";
export default {
  name: "products-list",
  data() {
    return {
      products: [],
      currentIndex: -1,
      currentProduct: -1,
      id: "",
      name: ""
    };
  },
  methods: {
    retrieveTutorials() {
      // console.log()
      // let urlParams = new URLSearchParams(window.location.search);
      // console.log("Check keyowrd: ", urlParams.get("keyword"));
      // if (urlParams.has("keyword")){
      //   // if (this.keyword === ""){
      //   console.log("Chay vao Co keywordx");
      //   this.keyword = urlParams.get("keyword");
      //   ProductService.getAllByTitle(this.page,this.limit,this.keyword)
      //       .then(response => {
      //         this.products = response.data.content;
      //         this.page = response.data.currentPage;
      //         this.totalItems = response.data.totalItems;
      //         console.log(response.data);
      //       })
      //       .catch(e => {
      //         console.log(e);
      //       });
      // } else {
        console.log("Chay vao KO keywordx");
        ProductService.getAll()
            .then(response => {
              this.products = response.data;
              console.log(response.data);

            })
            .catch(e => {
              console.log(e);
            });
    },
    deleteProduct() {
      ProductService.delete(this.product.id)
          .then(response => {
            console.log(response.data);
            this.$router.push({ name: "products" });
          })
          .catch(e => {
            console.log(e);
          });
    },
  },
  created() {
    this.retrieveTutorials();
  },
};
</script>
<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>