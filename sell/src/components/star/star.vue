<template>
    <div :class="starType" class="star">
    	<span v-for="itemClass in itemClasses" class="star-item" :class="itemClass"></span>
    </div> 
</template>

<script type="ecmascript-6">
	const LENGH = 5;
	const CLS_ON = "on";
	const CLS_OFF = "off";
	const CLS_HALF = "half";
    export default {
    	props: {
    		size: {
				type: Number
    		},
    		scores: {
    			type: Number
    		}
    	},
    	computed: {
    		starType(){
    			return "star-"+this.size;
    		},
    		itemClasses(){
    			let result = [];
    			let score  = Math.round(this.scores *2) / 2;
    			let hasHalfStar = score%1 !== 0
    			for(let i=1 ; i<=score; i++){
    				result.push(CLS_ON);
    			}
    			if(hasHalfStar){
    				result.push(CLS_HALF);
    			}
    			while(result.length < 5){
    				result.push(CLS_OFF);
    			}
    			return result;
    		}
    	}
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
	@import "../../common/stylus/mixin.styl"

	.star
		font-size: 0
		.star-item
			display: inline-block
			background-repeat: no-repeat
		&.star-48
			.star-item
				width: 20px
				height: 20px
				margin-right: 22px
				background-size: 20px 20px
				&:last-child
					margin-right: 0
				&.on
					bg-image('star48_on')
				&.off
					bg-image('star48_off')
				&.half
					bg-image('star48_half')
		&.star-36
			.star-item
				width: 15px
				height: 15px
				margin-right: 16px
				background-size: 15px 15px
				&:last-child
					margin-right: 0
				&.on
					bg-image('star36_on')
				&.off
					bg-image('star36_off')
				&.half
					bg-image('star36_half')
		&.star-36
			.star-item
				width: 10px
				height: 10px
				margin-right: 3px
				background-size: 10px 10px
				&:last-child
					margin-right: 0
				&.on
					bg-image('star24_on')
				&.off
					bg-image('star24_off')
				&.half
					bg-image('star24_half')					


</style>