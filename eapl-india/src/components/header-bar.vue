<template>
  <div class="hello">
    <nav class='navbar is-transparent is-primary' role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="../assets/logo.png" width="112" height="28">
        </a>
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">HOME</router-link>
          <div class="navbar-item has-dropdown is-hoverable">
            <router-link class='navbar-link' to="/about">ABOUT</router-link>
            <div class="navbar-dropdown">
              <a class="navbar-item">COMPANY PROFILE</a>
            </div>
          </div>  
          <router-link class='navbar-item' to="/products">PRODUCTS</router-link>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">CUSTOMERS</a>
            <div class="navbar-dropdown">
              <a class="navbar-item">ENQUIRY FORM</a>
              <a class="navbar-item">COMPLAINT FORM</a>
              <a class="navbar-item">PRODUCT WARRANTY</a>
              <a class="navbar-item">SAFETY MEASURES</a>
              <a class="navbar-item">DEALERS NETWORK</a>
            </div>
          </div> 
          <div class="navbar-item has-dropdown is-hoverable is-boxed">
            <a class="navbar-link">RESOURCES</a>
            <div class="navbar-dropdown">
              <a class="navbar-item">DOWNLOADS</a>
            </div>
          </div> 
          <a class="navbar-item">CONTACT US</a>
        </div>  
        <div class="navbar-end">
            <router-link class="navbar-item" to="/cart">CART</router-link>
        </div>  
      </div>
    </nav>    
  </div>
</template>

<script>
export default {
//   name: 'headerBar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
