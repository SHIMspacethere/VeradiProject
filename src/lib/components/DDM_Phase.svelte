<script>
	import { Col, Row, Container } from 'sveltestrap';

	export let phaseBool = [1, 0, 0, 0];

	function phaseToggle(num) {
		for (let i = 0; i < phaseBool.length; i++) phaseBool[i] = 0;
		phaseBool[num] = 1;
	}
</script>

<Container class="tw-flex">
	<Col>
		<Row>
			<button on:click={() => phaseToggle(0)} class="tw-bg-blue-300 tw-block"> 
        1. Genogram 
      </button>
		</Row>
	</Col>
	<Col>
		<Row>
			<button on:click={() => phaseToggle(1)} class="tw-bg-blue-400 tw-block">
				2. WhoisChinese
			</button>
		</Row>
	</Col>
	<Col>
		<Row>
			<button on:click={() => phaseToggle(2)} class="tw-bg-blue-500 tw-block">
				3. Condition
			</button>
		</Row>
	</Col>
	<Col>
		<Row>
			<button on:click={() => phaseToggle(3)} class="tw-bg-blue-600 tw-block"> 
        4. Compile 
      </button>
		</Row>
	</Col>
</Container>
