<template>
    <AdminForm :postId="loadedPost"/>    
</template>

<script>
import AdminForm from '~/components/admin-post-form';
export default {
    components:{
        AdminForm
    },data(){
        return{
            loadedPost: {
                author: 'TEST',
                title: 'Title1',
                content: 'Test desc',
                thumbnaillink: 'https://dummyimage.com/600x400/000/fff&text=hi+this+is+dumy+image'
            }
        }
    }
}
</script>

<style scoped>

</style>
