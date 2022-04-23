<script lang="ts">
  let weight: number | null = null
  let height: number | null = null

  const isInputValid = () => {
    if(
        !weight ||
        !height ||
        isNaN(weight) ||
        isNaN(height)
      ) return false
    return true
  }

  $: bmi = () => {
    if(!isInputValid()) return 0
    return (weight / Math.pow(height / 100, 2))
  }

</script>

<main class="calculator">
  <h1>BMI Kalkylator!</h1>
  <input id="weight" placeholder="vikt i KG" bind:value={weight}/>
  <input id="height" placeholder="Längd i CM" bind:value={height}/>

  {#if bmi()}
  <h3>Your BMI is: {bmi().toFixed(1)}</h3>
  {/if}
</main>

<style>
  .calculator {
    display: flex;
    flex: 1;
    padding: 60px 0;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  input {
    min-width: 300px;
  }
</style>
