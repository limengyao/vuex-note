<template>
	<div class="tool-list">
		<i @click="add_notes" :class="">添加</i>
		<i @click="add_favor" :class="{active:isFavor}">喜爱</i>
		<i @click="delete_note">删除</i>
	</div>
</template>

<script >

	import store from '@/vuex/store'
	import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'

	export default {
		computed: {
			isFavor() {
				return this.$store.getters.activeNote.favor;
			}
		},
		methods: {
			...mapActions(['add_notes','add_favor','delete_note']),
			//...mapMutations(['ADD_NOTES','ADD_FAVOR'])
			// add_notes() {
			// 	this.$store.dispatch('add_notes');
			// },
		}
	}
</script>

<style lang="less">
.tool-list {
    width: 100px;
    height: 100%;
    background-color: darksalmon;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    box-sizing: border-box;
    i{
    	color: #fff;
    	cursor: pointer;
    	display: inline-block;
    	height: 30px;
    	line-height: 30px;
    	width: 100%;
    	text-align: center;
    	&.active{
    		color:red;
    	}
    }
}
.tool-btn {
    font-size: 30px;
    display: inline-block;
    margin: 10px 0;
}
.favor {
    color: blanchedalmond;
}
</style>