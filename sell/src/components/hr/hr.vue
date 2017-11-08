<template>
    <div class="hr-wrapper">
    	<div class="hr border-1px"></div>
    	<div class="content">{{ content }}</div>
    	<div class="hr border-1px"></div>
    </div>
</template>

<script type="ecmascript-6">
    export default {
    	props: {
    		content: {
    			type: String 
    		}
    	}
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
	@import "../../common/stylus/mixin.styl"
	.hr-wrapper
		margin: 28px auto 24px auto
		display: flex
		width: 80%
		.hr
			flex: 1
			position: relative
			top: -6px
			border-bottom: 1px solid rgba(255,255,255,0.2)
		.content
			padding: 0 12px
			font-size: 14px
			font-weight: 700
</style>