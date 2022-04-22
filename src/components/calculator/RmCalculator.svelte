<script lang="ts">
  let weight: number | null = null
  let repititions: number | null = null
  const percentages = [100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50]
  
  $: pctOfOneRepMax = (pct: number) => {
    if(!weight || !repititions) return 0
    return calculateWeight(pct) / calculateWeight(100) * 100
  }

  $: calculateWeight = (pct: number) => {
    if(!weight || !repititions) return 0
    const maxPct = 100 - (repititions * 2.5)
    const decimal = maxPct / pct
    const repMax = weight / decimal
    return repMax
  }

</script>

<main class="calculator">
  <h1>1 Rep Max!</h1>
  <input id="lift" placeholder="Weight in KG" bind:value={weight}/>
  <input id="repititions" placeholder="Max Repetitions" bind:value={repititions}/>

  <table class="results">
    <tr>
      <th>Percent</th>
      <th>Weight</th>
    </tr>
    {#each percentages as pct}
    <tr>
      <td>{Math.round(pctOfOneRepMax(pct))}%</td>
      <td>{Math.round(calculateWeight(pct))} kg</td>
    </tr>
    {/each}
  </table>
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

  table {
    text-align: center;
    min-width: 300px;
  }
</style>
