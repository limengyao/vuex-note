<template>
	<div class="text-wraper">
		<textarea class="text-input" v-bind:value="text" ref="texval"></textarea>
        <button v-on:click="saveNote">保存</button>
        
    </div>
</template>

<script>

	import store from '@/vuex/store'
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'

	export default {
		data() {
			return {
				textInput: ""
			}
		},
		computed: {
			text() {
				this.textInput = this.$store.getters.activeNote.text;
				if (this.textInput == undefined) return "";
				return this.$store.getters.activeNote.text;	
			}
		},
		methods: {
			saveNote(e) {
				this.textInput = this.$refs.texval.value;
				this.$store.dispatch("edit_note",this.textInput);
				console.log(this.textInput);
				console.log(this.$store.state.notes)
			}
		}
	}
</script>

<style>
.text-wraper {
    width: 100%;
}
.text-input {
    width: 100%;
    height: 80%;
    border: none;
    outline: none;
    padding: 20px;
    font-size: 15px;
}
button {
    width: 100%;
    background-color: darksalmon;
    color: white;
    border: none;
    outline: none;
}
</style>
