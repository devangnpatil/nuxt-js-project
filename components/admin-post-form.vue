<template>
    <div>
        <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
        <AppControlInput v-model="editedPost.title">Title</AppControlInput>
        <AppControlInput v-model="editedPost.thumbnaillink">thumbnaillink</AppControlInput>
        <AppControlInput 
            control-type="textarea"
            v-model="editedPost.content">Cotent Type
        </AppControlInput>
        <AppButton type="submit">Save</AppButton>
        <AppButton 
            type="button"
            style="margin-left:10px"
            btn-style="cancel"
            @click="onCancel">Cancel
        </AppButton>    
    </div>
</template>
<script>
import AppButton from '@/components/AppButton';
import AppControlInput from '@/components/AppControlInput';
export default {
    props:{
        postId:{
            type:Object,
            required: false
        }
    },
    components:{
        AppButton,
        AppControlInput
    },
    data(){
        return{
            editedPost:this.postId ? {...this.postId} : {
                title: '',
                author: '',
                thumbnaillink:'',
                content:''
            }
        }
    },
    methods: {
        OnSave:function(){
            console.log(this.editedPost);
        },
        onCancel: function(){
            this.$router.push('/admin');
        }
    }
}
</script>
