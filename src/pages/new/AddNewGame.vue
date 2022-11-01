<template>
  <base-dialog
      v-if="inputIsInvalid"
      title="Input is invalid"
      @close="confirmError"
  >
    <template #default>
      <p>At least one input value is invalid.</p>
    </template>
    <template #actions>
      <base-button @click="confirmError">Okay</base-button>
    </template>
  </base-dialog>

  <base-card>
    <form @submit.prevent="addNewProduct">
      <div>
        <div class="form-control">
          <label for="name">Name</label>
          <input id="name" name="name" type="text" v-model="request.productName"/>
        </div>
        <div class="form-control">
          <label for="price">Price</label>
          <input id="price" name="price" type="text" v-model="request.price"/>
        </div>
        <div class="form-control">
          <label for="amount">Amount</label>
          <input id="amount" name="amount" type="text" v-model="request.amount"/>
        </div>
        <base-button type="addNewProduct">Add New Game</base-button>
      </div>
    </form>
  </base-card>
</template>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      request: {},
      inputIsInvalid: false,
    }
  },

  methods: {
    addNewProduct() {
      const enteredName = this.request.productName;
      const enteredPrice = this.request.price;
      const enteredAmount = this.request.amount;
      if (
          enteredName.trim() === "" ||
          enteredPrice === 0 ||
          enteredAmount === 0
      ) {
        this.inputIsInvalid = true;
        return;
      }
      this.$router.push('/games');

      axios.post("/product/new", this.request)
          .then(response => {
            alert("New product is added!")
            this.request = {}
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  }
}

</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
