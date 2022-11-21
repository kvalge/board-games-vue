<template>
  <base-card>
    <div>
      <div>
        <base-button @click="getAllProducts">List of Games</base-button>
      </div>
      <div>

        <div>
          <table v-if="products.length>0">
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Price</th>
              <th>Amount</th>
            </tr>
            <tr v-for="(row, index) in products" key="id">
              <td>{{ index + 1}}</td>
              <td>{{ row.productName }}</td>
              <td>{{ Math.round(row.price * 100) / 100 }}</td>
              <td>{{ row.amount }}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </base-card>
</template>

<script>
export default {
  data: function () {
    return {
      products: {},
    }
  },

  methods: {
    getAllProducts() {
      fetch("/product/get/all")
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
          })
          .then((data) => {
            const dataProduct = [];
            for (const id in data) {
              dataProduct.push({
                id: id,
                productName: data[id].productName,
                price: data[id].price,
                amount: data[id].amount,
              });
            }
            this.products = dataProduct;
          });
    }
  }
}
</script>

<style scoped>
th,
td {
  margin: 2rem auto;
  max-width: 45rem;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>