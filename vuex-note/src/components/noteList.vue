<template>
	<div class="note-list">
        <h3>记事本</h3>
        <div class="list-wraper">
            <div class="tab">
                <div @click="showAll" v-bind:class="{active:showor}">全部</div>
                <div  @click="showfavor" v-bind:class="{active:!showor}">我喜欢的</div>
            </div>
            <ul class="show-all" v-for="(item,index) in notelistAll" v-show="showor" >
                <li :class="{activenote: activeNote.id==item.id}" @click="set_activenote(item)">
                    {{item.text}}
                </li>
            </ul>
            <ul class="favorites" v-show="!showor"  v-for="(item,index) in notelistAll" @click="set_activenote(item)">
                <li v-show="item.favor" :class="{activenote: activeNote.id==item.id}">
                   {{item.text}}
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
    
    import store from '@/vuex/store'
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
    export default {
        data () {
            return {
                showor : true
            }
        },
        computed: {
            isFavor() {
                return this.$store.getters.activeNote.favor;
            },
            notelistAll() {
                return this.$store.getters.notes;
            },
            favorlist () {
                return this.$store.getters.favorNotes;
            },
            activeNote () {
                return this.$store.getters.activeNote;
            }
        },
        methods: {
            showAll () {
                this.showor = true;
            },
            showfavor () {
                this.showor = false;
            },
            ...mapActions(['add_notes','set_activenote'])
        }
    }

</script>

<style lang="less">
.note-list {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: whitesmoke;
}
.list-wraper {
    display: flex;
    flex-direction: column;
    align-content: center;
    overflow-y: scroll;
}
.tab {
    margin: 0 auto;
    margin-bottom: 10px;
}
.tab div{
    cursor: pointer;
    display: inline-block;
    border: 1px solid #ddd;
    border-radius: 1px;
    padding: 2px 14px;
}
.active {
    background-color: darksalmon;
    color: white;
}
.show-all, .favorites {
    width: 300px;
    margin: 0;
    padding: 0;
}
.show-all li, .favorites li{
    overflow: hidden;
    word-wrap: break-word; 
    height: 50px;
    margin: 0;
    list-style: none;
    border-bottom: 1px solid #ddd;
    padding: 5px 10px;
    /*background: orange;
    color: #666;*/
}
.activenote {
    background-color: blanchedalmond;
}
</style>