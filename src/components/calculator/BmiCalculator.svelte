<script lang="ts">
  let weight: number | null = null
  let height: number | null = null

  $: bmi = () => {
    if(!weight || !height) return 0
    return (weight / Math.pow(height / 100, 2))
  }

</script>

<main class="calculator">
  <h1>BMI Calculator!</h1>
  <input id="weight" placeholder="Weight in KG" bind:value={weight}/>
  <input id="height" placeholder="Height in CM" bind:value={height}/>

  {#if bmi()}
  <h3>Your BMI is: {bmi().toFixed(1)}</h3>
  {/if}
</main>

<style>
  .calculator {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  input {
    min-width: 300px;
  }
</style>
