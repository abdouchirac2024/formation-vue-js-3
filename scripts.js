

const app = Vue.createApp({
  data() {
    return {
      products: [
        {
          "photo": "img/big-mac.png",
          "name": "Big Mac",
          "price": 20.10,
          "active": false,
          "quantity": 1
        },
        {
          "photo": "img/mc-chicken.png",
          "name": "Mc Chicken",
          "price": 4.99,
          "active": false,
          "quantity": 1
        },
        {
          "photo": "img/double-cb.png",
          "name": "Double Cheese Burger",
          "price": 2.99,
          "active": false,
          "quantity": 6
        },
        {
          "photo": "img/fries.png",
          "name": "Fries",
          "price": 2.99,
          "active": false,
          "quantity": 1
        },
        {
          "photo": "img/nuggets.png",
          "name": "Mc Nuggets",
          "price": 3.49,
          "active": false,
          "quantity": 4
        },
        {
          "photo": "img/salad.png",
          "name": "Salad",
          "price": 2.79,
          "active": false,
          "quantity": 1
        },
        {
          "photo": "img/cola.png",
          "name": "Coke",
          "price": 1.99,
          "active": false,
          "quantity": 1
        },
        {
          "photo": "img/lipton.png",
          "name": "Ice Tea",
          "price": 1.99,
          "active": false,
          "quantity": 1
        },
        {
          "photo": "img/water.png",
          "name": "Water",
          "price": 1.49,
          "active": false,
          "quantity": 1
        }
      ]
    };
  },
  methods: {
    incrementQuantity(index) {
      this.products[index].quantity++;
    },
    decrementQuantity(index) {
      if (this.products[index].quantity > 1) {
        this.products[index].quantity--;
      }
    }
  }
});

app.mount("#app");

