<template>
    <div class="header">
    	<div class="content-wrap">
    		<div class="avatar">
    			<img width="64px" height="64px" :src="seller.avatar">
    		</div>
    		<div class="content">
    			<div class="title">
    				<span class="brand">
    					<img src="" alt="">
    				</span>
    				<span class="name">
    					{{seller.name}}
    				</span>
    			</div>
    			<div class="description">
    				{{seller.description}}/{{seller.deliveryTime}}分钟
    			</div>
    			<div v-if="seller.supports" class="support">
    				<span class="icon" :class="supportClassMap[seller.supports[0].type]"></span>
    				<span class="text">{{seller.supports[0].description}}</span>
    			</div>
    		</div>
    		<div class="supports" @click="showMask">
    			<span class="supports-text">{{seller.supports.length}}个</span>
    			<i class="supports-arrow icon-keyboard_arrow_right"></i>
    		</div>
    	</div>
    	<div class="bulletin-wrap" @click="showMask">
    		<span class="bulletin-icon"></span><span class="bulletin-content">{{seller.bulletin}}</span>
    		<i class="icon-keyboard_arrow_right"></i>
    	</div>
    	<div class="header-background">
    		<img :src="seller.avatar" width="100%" height="100%">
    	</div>
    	<div class="mask" v-show="maskShow">
    		<div class="details-wrap clearfix">
    			<div class="details-main">
    				<h1 class="name">
    					<span>{{seller.name}}</span>
    				</h1>
    				<star :scores="seller.score" :size="48"></star>
    			</div>
    		</div>
    		<div class="details-close">
    			<i class="icon-close" @click="closeMask"></i>
    		</div>
    	</div>
    </div>
</template>

<script type="ecmascript-6">
	import star from 'components/star/star';
    export default{
    	props:{
    		seller:{
    			type: Object
    		}
    	},
    	data(){
    		return {
    			maskShow: false
    		}
    	},
    	methods: {
    		showMask(){
    			this.maskShow = true;
    		},
    		closeMask(){
    			this.maskShow = false;
    		}
    	},
    	created(){
    		this.supportClassMap = ['decrease','discount','special','invoice','guarantee'];
    	},
    	components:{
    		star
    	}
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
	@import "../../common/stylus/mixin.styl"

	.header
		position:relative
		background: rgba(7,17,27,0.5)
		color: #fff
		.content-wrap
			font-size: 0
			position: relative
			padding: 24px 12px 18px 24px
			.avatar
				vertical-align: top
				display: inline-block
				img
					border-radius: 4px
			.content
				margin-left: 16px
				display: inline-block
				.title
					margin: 2px 0 8px 0
					font-size: 16px
					font-weight: bold
					.brand
						display: inline-block
						vertical-align: top
						width: 30px
						height: 18px
						bg-image('brand')
						background-size: 30px 18px
						background-repeat: no-repeat
					.name
						margin-left:6px
						line-height: 18px
				.description
					margin-bottom: 10px
					font-size: 12px
					line-height: 12px
					font-weight: 200
				.support
					.icon
						display: inline-block
						width: 12px
						height: 12px
						margin: 0 4px 0 2px
						background-repeat: no-repeat
						background-size: 12px 12px
						vertical-align: top
						&.decrease
							bg-image("decrease_1")
						&.discount
							bg-image("discount_1")
						&.special
							bg-image("special_1")
						&.invoice
							bg-image("invoice_1")
						&.guarantee
							bg-image("guarantee_1")
					.text
						font-size: 12px
						font-size: 200
			.supports
				position: absolute
				display: inline-block
				padding: 0 8px
				background: rgba(0,0,0,0.2)
				right: 12px
				bottom: 16px
				height: 24px
				line-height: 24px
				border-radius: 14px
				text-align: center
				.supports-text
					margin-right: 2px
					font-size: 10px
				.supports-arrow
					font-size: 10px
		.bulletin-wrap
			position:relative
			height: 28px
			line-height: 28px
			padding:0 22px 0 12px
			background: rgba(7,17,27,0.2)
			white-space: nowrap
			overflow: hidden
			text-overflow: ellipsis
			.bulletin-icon
				display:inline-block
				vertical-align: top
				margin-top: 9px
				width: 22px
				height: 12px
				bg-image('bulletin')
				background-size:22px 12px
				background-repeat: no-repeat
			.bulletin-content
				margin: 0 4px
				font-size: 10px
			.icon-keyboard_arrow_right
				position: absolute
				font-size: 12px
				right: 10px
				top: 9px
		.header-background
			position: absolute
			top: 0
			left: 0
			width: 100%
			height: 100%
			z-index: -1
			filter: blur(10px)
			overflow: hidden
		.mask
			position: fixed
			top: 0
			left: 0
			width: 100%
			height: 100%
			z-index: 100
			overflow: auto
			background: rgba(7,17,27,0.8)
			.details-wrap
				width: 100%
				min-height: 100%
				.details-main
					margin-top: 64px
					padding-bottom: 64px
					.name
						line-height: 16px
						text-align: center
						font-size: 16px
			.details-close
				position:relative
				width: 32px
				height: 32px
				margin: -64px auto 0 auto
				clear: both
				font-size: 32px



					
</style>