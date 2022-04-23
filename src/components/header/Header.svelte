<script lang="ts">
  import { link } from "svelte-navigator";
  let scrollPosition: number
</script>

<header>
  <nav class:scrolling={scrollPosition > 0}>
    <ul>
      <a use:link href="/">Hem</a>
      <a use:link href="/one-rm-calculator">1 RM Max</a>
      <a use:link href="/bmi-calculator">BMI Kalkylator</a>
    </ul>
  </nav>
</header>

<svelte:window bind:scrollY={scrollPosition} />

<style>
  nav {
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    padding: 15px;
    position: fixed;
    transition: background-color 0.5s ease;
  }
  
  .scrolling {
    background-color: rgba(0,0,0,0.6)
  }

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: right;
  }
  
  a {
    color: white;
    font-weight: 100;
    margin: 0px 15px;
  }

  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }
</style>
