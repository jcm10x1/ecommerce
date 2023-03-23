<script lang="ts">
export default {
  name: 'OrderTrackingView'
}
</script>

<template>
  <main>
    <h1>Track Your Order</h1>
    <form action="">
      <label for="orderNumber">Order Number</label>
      <input type="text" name="orderNumber" id="orderNumber" />
      <label for="email">Email</label>
      <input type="email" name="email" id="email" />
      <input type="submit" value="Track Order" />
    </form>
    <h3>
      Please enter your order number or email above. If you choose to enter your email, we will send
      you a code to confirm it is really your email. If you enter both, we will search for the order
      number.
    </h3>
  </main>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
