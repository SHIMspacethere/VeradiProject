<script>
	import DDM_ButtonUi from './DDM_ButtonUi.svelte';
	import {
		Alert,
		Button,
		Container,
		Col,
		Row,
		Card,
		CardBody,
		CardHeader,
		CardTitle,
		Input,
		Form,
		FormGroup,
		Image
	} from 'sveltestrap';

	import img_none from '$lib/static/img/veradiBioProject/genogram/none.png';
  import img_unknown from '$lib/static/img/veradiBioProject/genogram/unknown.png';
	import img_block from '$lib/static/img/veradiBioProject/genogram/block.png';
	import img_blockCenterDown2 from '$lib/static/img/veradiBioProject/genogram/blockCenterDown2.png';
	import img_blockCenterDown3 from '$lib/static/img/veradiBioProject/genogram/blockCenterDown3.png';
	import img_blockCenterUp from '$lib/static/img/veradiBioProject/genogram/blockCenterUp.png';
	import img_blockLeftDown from '$lib/static/img/veradiBioProject/genogram/blockLeftDown.png';
	import img_blockRightDown from '$lib/static/img/veradiBioProject/genogram/blockRightDown.png';
	import img_blockX from '$lib/static/img/veradiBioProject/genogram/blockX.png';
	import img_blockY from '$lib/static/img/veradiBioProject/genogram/blockY.png';
	import img_man from '$lib/static/img/veradiBioProject/genogram/man.png';
	import img_manA from '$lib/static/img/veradiBioProject/genogram/manA.png';
	import img_woman from '$lib/static/img/veradiBioProject/genogram/woman.png';
	import img_womanA from '$lib/static/img/veradiBioProject/genogram/womanA.png';

  export let buttonX = 10;
  export let buttonY = 7;
  export let buttonId = [];
  export const phaseMode = [];

	let axisX, axisY = 0;
	let debugMode = false;
	let uiMode = false;
	let result;

	let onClose = () => {};

  const VP_DDM_INPUTCHECKS = [
    {
      id : 0,
      img : img_block,
      img2 : img_none
    },
    {
      id : 1,
      img : img_man
    },
    {
      id : 2,
      img : img_woman
    },
    {
      id : 3,
      img : img_unknown
    },
    {
      id : 4,
      img : img_blockCenterUp
    },
    {
      id : 5,
      img : img_blockX
    },
    {
      id : 6,
      img : img_blockCenterDown2
    },
    {
      id : 7,
      img : img_blockCenterDown3
    },
    {
      id : 8,
      img : img_blockY
    },
    {
      id : 9,
      img : img_blockLeftDown
    },
    {
      id : 10,
      img : img_blockRightDown
    },
    {
      id : 11,
      img : img_none
    }
  ];

  
	//$: bs[10][10] = new ButtonState()
	//class ButtonState {
	//  constructor{
	//    this.x = x;
	//    this.y = y;
	//    this.image = img_block;
	//  }
	//  set x(num) {
	//    this._x = num;
	//  }
	//  set y(num) {
	//    this._y = num;
	//  }
	//  set img(image) {
	//    this._image = image;
	//  }
	//  get x(num) {
	//    return this._x;
	//  }
	//  get y(num) {
	//    return this._y;
	//  }
	//  get img(image) {
	//    return this_image;
	//  }
	//}

	function debugToggle() {
		if (debugMode) debugMode = false;
		else debugMode = true;
		console.log('debug : ' + debugMode);
	}

	function onUiToggle() {
		if (uiMode == true) {
			uiMode = false;
			if (result != null) {
				buttonId[axisX][axisY] = result;
        updateImage();
				if (debugMode) console.log('(' + axisX + ', ' + axisY + ') => ' + result);
			}
		} else uiMode = true;
	}

	function onClick(x, y) {
		(axisX = x), (axisY = y);
		onUiToggle();
	}

  () => {
    if (phaseMode[0] == 1) {
      document
    }
  }

</script>

<Container>
	<button on:click={() => debugToggle()} class="tw-pb-2">
		debugMode : {debugMode}
	</button>
	<Col lg="8">
		{#each Array(buttonY) as _, intX}
			<Row>
				<div class="tw-flex">
					{#each Array(buttonX) as _, intY}
						<button
							id="button[{intX}][{intY}]"
							on:click={() => onClick(intX, intY)}
							class="tw-flex tw-px-0"
						>
							<div class="">
								<Image id="img[{intX}][{intY}]" src={VP_DDM_INPUTCHECKS[buttonId[intX][intY]].img} style="width:100%;" />
								{#if debugMode}
									{intX + ', ' + intY}
								{/if}
							</div>
						</button>
					{/each}
				</div>
			</Row>
		{/each}
	</Col>
	{#if uiMode}
		<DDM_ButtonUi onClose={() => onUiToggle()} {axisX} {axisY} maxX={buttonX} maxY={buttonY} onTouch={uiMode} bind:result />
	{/if}
</Container>

<style>
	button {
		display: flex;
		flex-grow: 1;
		padding: 0;
	}
</style>
