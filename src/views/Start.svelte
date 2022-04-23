<script lang="ts">
	const headerImage = './images/rik1.jpg'
	const siteImage = './images/rik3.jpg'
	const ArrowDown = './icons/arrow-down.svg'
</script>

<div class="start-page">
	<div class="banner">
		<img src={headerImage} alt="gym equipment" />
		<div class="tint" />
		<h1>Romeleåsens idrottskrets</h1>
		<img class="arrow" src={ArrowDown} alt="scroll down" />
	</div>
	<main class="container">
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

		<section class="row">
			<h2 class="col-6">Avgifter 2022</h2>
			<div class="col membership">
				<h3>Medlemskort</h3>
				<p>Upp till 12år: 350kr</p>
				<p>13-20år: 700kr</p>
				<p>21-99år: 1000kr</p>
				<p>Familjekort: 1500kr</p>
			</div>
			<div class="col local">
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
			<div class="image col-3">
				<img src={siteImage} alt="tränings vikter" />
			</div>
		</section>

		<section class="row">
			<h2 class="col-6">RIK's Gruppledda styrketräning</h2>
			<div class="col-2">
				<h3>Måndagar 17:00-21:00</h3>
				<p>17:00-18:30 Filip Nilsson</p>
				<p>18:00-19:30 Isak Ekqvist</p>
				<p>18:30-20:00 Viktor Skaneborn</p>
				<p>19:00-20:30 Oscar Jägerstedt</p>
			</div>
			<div class="col-2">
				<h3>Tisdagar 17:00-21:00</h3>
				<p>17:00-19:00 Kim Johnsson</p>
				<p>18:00-20:00 Mikael Müller</p>
				<p>19:00-20:00 Johan Larsson</p>
				<p>19:00-20:30 Oscar Jägerstedt</p>
			</div>
			<div class="col-2">
				<h3>Onsdagar 17:00-21:00</h3>
				<p>17:00-18:30 Filip Nilsson</p>
				<p>17:00-19:00 Kim Johnsson</p>
				<p>19:00-20:30 Isak Ekqvist</p>
				<p>19:30-20:30 Viktor Skaneborn</p>
			</div>
			<div class="col-2">
				<h3>Torsdagar 17:00-21:00</h3>
				<p>17:00-18:30 Filip Nilsson</p>
				<p>18:30-20:00 Tord Håkansson</p>
				<p>19:00-20:30 Johan Larsson</p>
				<p>19:00-20:30 Oscar Jägerstedt</p>
			</div>
			<div class="col-2">
				<h3>Fredagar 17:00-21:00</h3>
				<p>17:00-18:30 Kim Johnsson</p>
				<p>18:00-20:00 Mikael Müller</p>
				<p>19:00-20:00 Viktor Skaneborn</p>
			</div>
		</section>
	</main>
</div>

<style>
	main {
		padding: 4em 1em;
	}

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

	h2 {
		padding: 0 10px;
	}

	.spacing {
		padding-bottom: 100px;
	}

	.image img{
		width: 100%;
	}
</style>
