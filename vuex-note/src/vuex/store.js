import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	notes: [],
	activeNote: {},
	favorNotes: []
}

const getters = {
	notes: (state) => state.notes,
	activeNote: (state) => state.activeNote,
	favorNotes: (state) => state.favorNotes
}


const mutations = {
	ADD_NOTES(state) {
		const noteid = Math.round(Math.random()*10000);
		const note = {
			id : noteid,
			text : "写点什么吧",
			favor : false
		}
		state.notes.push(note);
		state.activeNote = note;
	},
	DELETE_NOTES(state) {
		let notes = state.notes;
		for(let key in notes){
			if(notes[key].id == state.activeNote.id) {
				state.notes.splice(key,1)
			}
		}
		//state.notes.$remove(state.activeNote);
		if (!state.notes.length) return;
		state.activeNote = state.notes[0];
	},
	ADD_FAVOR(state) {
		//if(!state.activeNote.favor) return;
		if(state.activeNote.favor){
			state.activeNote.favor = false
		}else{
			state.activeNote.favor = true
		}
	},
	EDIT_NOTE(state,text) {
		state.activeNote.text = text;
		for(let i in state.notes) {
			if(i == state.activeNote) {
				i.text = text
			}
		}
	},
	SET_ACTIVENOTE(state,item) {
		state.activeNote = item
	}
}

const actions = {
	add_notes({commit}) {
		return commit('ADD_NOTES')
	},
	delete_note({commit}) {
		return commit('DELETE_NOTES')
	},
	add_favor({commit}) {
		return commit('ADD_FAVOR')
	},
	delete_favor({commit}) {
		return commit('DELETE_FAVOR')
	},
	edit_note({commit},text) {
		return commit('EDIT_NOTE',text)
	},
	set_activenote({commit},item) {
		return commit('SET_ACTIVENOTE',item)
	}
}

console.log("asss");

export default new Vuex.Store({
	state,
	actions,
	mutations,
	getters
})
