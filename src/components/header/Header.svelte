<script lang="ts">
  import { link } from "svelte-navigator";
</script>

<header>
  <nav>
    <ul>
      <a use:link href="/">Home</a>
      <a use:link href="/">Max Rep Calculator</a>
      <a use:link href="/404">BMI Calculator</a>
    </ul>
  </nav>
</header>

<style>
  nav {
    background-color: #484848;
    padding: 15px;
  }

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: center;
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
