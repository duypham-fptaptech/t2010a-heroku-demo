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
export default {
name: "EditProduct"
}
</script>

<style scoped>

</style>