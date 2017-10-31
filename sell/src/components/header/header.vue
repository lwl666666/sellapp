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
    				<span class="icon"></span>
    				<span class="text">{{seller.supports[0].description}}</span>
    			</div>
    		</div>
    	</div>
    	<div class="bulletin-wrap">
    		
    	</div>
    </div>
</template>

<script type="ecmascript-6">
    export default{
    	props:{
    		seller:{
    			type: Object
    		}
    	}
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
	@import "../../common/stylus/mixin.styl"

	.header
		background: rgba(7,17,27,0.5)
		color: #fff
		font-size: 0
		.content-wrap
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
					font-size: 12px
					font-weight: 200
</style>