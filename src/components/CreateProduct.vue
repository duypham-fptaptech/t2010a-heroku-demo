<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <div>
          <input
              type="text"
              placeholder="Please enter id"
              class="form-control"
              required
              v-model="product.id"
              name="id"
          />
        </div>
      </div>
      <div class="form-group">
        <input
            type="text"
            placeholder="Please enter name"
            class="form-control"
            required
            v-model="product.name"
            name="name"
        />
      </div>
      <div class="form-group">
        <input
            type="text"
            placeholder="Please enter slug"
            class="form-control"
            required
            v-model="product.slug"
            name="slug"
        />
      </div>
      <div class="form-group">
        <input
            type="text"
            placeholder="Please enter description"
            class="form-control"
            required
            v-model="product.description"
            name="description"
        />
      </div>
      <div class="form-group">
        <input
            type="text"
            placeholder="Please enter detail"
            class="form-control"
            required
            v-model="product.detail"
            name="detail"
        />
      </div><div class="form-group">
      <input
          type="text"
          placeholder="Please enter price"
          class="form-control"
          required
          v-model="product.price"
          name="price"
      />
    </div><div class="form-group">
      <input
          type="text"
          placeholder="Please enter thumbnail"
          class="form-control"
          required
          v-model="product.thumbnail"
          name="thumbnail"
      />
    </div>
      <div class="form-group">
        <input
            type="text"
            placeholder="Please enter manufacturer"
            class="form-control"
            required
            v-model="product.manufacturer"
            name="manufacturer"
        />
      </div>
      <button @click="saveProduct" class="btn btn-success">Submit</button>
    </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <a href="/">Return list product</a>
    </div>
  </div>
</template>

<script>
import ProductService from "@/service/ProductService";

export default {
  name: "CreateProduct",
  data() {
    return {
      product: {
        id: "",
        name: "",
        slug: "",
        description: "",
        detail: "",
        price: "",
        thumbnail: "",
        manufacturer: "",
        status: 1,
        published: true
      },
      submitted: false
    };
  },
  methods: {
    saveProduct() {
      var data = {
        id: this.product.id,
        name: this.product.name,
        slug: this.product.slug,
        description: this.product.description,
        detail: this.product.detail,
        price: this.product.price,
        thumbnail: this.product.thumbnail,
        manufacturer: this.product.manufacturer,
        status: this.product.status
      };
      ProductService.create(data)
          .then(response => {
            this.product.id = response.data.id;
            console.log(response.data);
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
    },
}};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>