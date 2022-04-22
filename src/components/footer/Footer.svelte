<script lang="ts">
</script>

<footer>
  <div class="container">
    <div class="adress">
      <h4>Romeleåsens idrottskrets</h4>
      <p>Bygatan 7</p>
      <p>247 71 Genarp</p>
    </div>
    <div class="payment">
      <h4>Betalning</h4>
      <p>Swishnummer: 1233466299</p>
      <p>Bankgiro: 482-2482 Sparbanken Skåne</p>
    </div>
  </div>
  <small>© Romeleåsens idrottskrets</small>
</footer>

<style>
  footer {
    background-color: black;
    color: white;
    padding: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .adress, .payment {
    padding: 30px;
  }

  h4 {
    margin: 0
  }

  p {
    margin: 0;
    font-weight: 100;
  }

  small {
    display: block;
    text-align: center;
    font-weight: 100;
  }

  @media (min-width: 640px) {
		.container {
      min-width: 900px;
		}
	}
</style>
