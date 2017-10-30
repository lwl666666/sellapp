<template>
  <div id="app">
  	<v-header></v-header>
	<nav>
    	<div class="nav-item">
    		<router-link to="/goods">商品</router-link>
    	</div>
    	<div class="nav-item">
    		<router-link to="/ratings">评论</router-link>
    	</div>
    	<div class="nav-item">
    		<router-link to="/seller">商家</router-link>
    	</div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import header from 'components/header/header';
export default {
  components: {
  'v-header': header
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
	nav
		display: flex
		width: 100%
		height: 40px
		line-height: 40px
		.nav-item
			flex: 1
			text-align: center
			font-size: 14px
			color: rgb(77,85,93)
			&>a
				display:block
				&.active
					color:rgb(240,20,20)
</style>
