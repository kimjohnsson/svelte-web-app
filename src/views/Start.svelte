<script lang="ts">
	const headerImage = './images/rik1.jpg'
	const siteImage = './images/rik3.jpg'
	const ArrowDown = './icons/arrow-down.svg'
</script>

<div>
	<div class="banner">
		<img src={headerImage} alt="gym equipment" />
		<div class="tint" />
		<h1>Romeleåsens idrottskrets</h1>
		<img class="arrow" src={ArrowDown} alt="scroll down" />
	</div>
	<main>
		<!-- <p>
			All verksamhet bedrevs i stora hallen, bl.a. annat så var styrketräningen ledarledd, ett tio-tal skivstänger och ett hantelställ var inköpt.
			I lokalen var det även fester på helgerna vilket innebar att bandybollen knappt rullade veckan efter!
		<p>
			Ovanvåningen var tidigare kontor och där fanns t.o.m. en Schacksektion.
			I källarvåningen har det funnit Dartsektion (Flyttade sen upp i stora hallen till Jiu-jitsuns förtret då pilarna hade en tendens att ”råka” träffa deras instruktions tavlor.
		<p>
			Barngymnastik fanns både i hallen och på Heckeberga skolan. 
			”Hålet” i väggen in till stora hallen innehöll musikanläggning då vi även haft Discodans och Barndans (Inte att förväxla med helgens aktiviteter även om det ibland såg ut så).
		<p>
			Klubben startade 1978 då man övertog Konsums gamla lokaler (Kuriosa, styrketräningen var tidigare ingången till mejerivarorna).
			Det var verkligen en allsidig klubb, precis som nu. Det fanns bl.a. en Friidrottssektion som sedermera bröt sig ut.
			RIK hade till och med en sektion för Hockeylag som spelade i seriesystem!? Hur det gick för den sektionen har tydligen alla glömt.
		</p> -->

		<h2>Avgifter 2022</h2>
		<div class="container">
			<div class="membership">
				<h3>Medlemskort</h3>
				<p>Upp till 12år: 350kr</p>
				<p>13-20år: 700kr</p>
				<p>21-99år: 1000kr</p>
				<p>Familjekort: 1500kr</p>
			</div>
			<div class="local">
				<h3>Hallhyra</h3>
				<p>Behövs ingen medlemsavgift.</p>
				<p>Enstaka timmar: 150kr/timme</p>
				<p>För helt år: 4500kr/timme</p>
				<br>
				<b>Tider för hallen bokas/betalas till:</b>
				<p>Jonas Andersson</p>
				<p>liljegårdsvägen 11</p>
				<p>070-516 11 58</p>
				<br>
				<p>Christian Karlsson</p>
				<p>Ringaregården 4</p>
				<p>070-763 00 97</p>
			</div>
			<div class="image">
				<img src={siteImage} alt="tränings vikter" />
			</div>
		</div>
	</main>
</div>

<style>
	.banner {
		height: 100vh;
		position: relative;
	}

	.banner .tint {
		background-color: rgba(0, 0, 0, 0.5);
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.banner img {
		object-fit: cover;
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.banner h1 {
		position: relative;
		text-align: center;
		color: white;
		display: flex;
		height: 100%;
		margin: 0;
		justify-content: center;
		align-items: center;
	}

	.banner .arrow {
		position: absolute;
		margin: auto;
		bottom: 10px;
		left: 0;
		right: 0;
		width: 48px;
		height: 48px;
		animation-duration: 2s;
    animation-iteration-count: infinite;
		animation-name: bounce;
    animation-timing-function: ease;
	}

	@keyframes bounce {
		0%   { transform: translateY(0); }
		30%  { transform: translateY(-10px); }
		50%  { transform: translateY(0); }
		100% { transform: translateY(0); }
	}

	/* p {
		font: 100%/1.5 Arial, sans-serif; 
		text-align: left;
		margin: 0 0 1em;
		line-height: 1.5;
		max-width: 65ch;
	} */

	h2 {
		padding: 0 10px;
		margin: 0 10px;
	}

	.container div {
		margin: 10px;
		padding: 10px;
	}

	.container h3, .container p {
    margin: 0;
	}

	.container .membership,
	.container .local,
	.container .contact {
		flex: 1;
		flex-grow: 1;
		flex-shrink: 1;
	}

	.container .image {
		flex: 2;
	}

	.container .image img {
		width: 100%;
	}
</style>
