<template>
  <div>
    <h1>List of Blogpost</h1>
    <section class="all-posts">
      <PostPreview 
      id="1"
      title="FIRST"
      contentPreview="Test Content"
      thumbnails="https://dummyimage.com/600x400/000/fff&text=hi+this+is+dumy+image"
      />
      <PostPreview 
      id="2"
      title="Second"
      contentPreview="Test Content"
      thumbnails="https://dummyimage.com/600x400/000/fff&text=hi+this+is+dumy+image"
      />
    </section>
  </div>

</template>

<script>
import PostPreview from '~/components/PostPreview'
export default {
  components:{
    PostPreview
  }
}
</script>

<style>
.all-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
