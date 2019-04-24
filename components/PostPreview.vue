<template>
    <nuxt-link :to="getLink">
        <section class="post-preview">
            <div 
                class="post-thumbnail" 
                :style="{backgroundImage:'url('+thumbnails+')'}"></div>
            <div class="post-content">
                <h1>{{title}}</h1>
                <p>{{contentPreview}}</p>
            </div>
        </section>
    </nuxt-link>
</template>

<script>

export default {
    computed: {
      getLink(){
        return this.isAdmin ? "/admin/"+this.id : '/blog/'+this.id
      }
    },
    props: {
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        contentPreview: {
            type: String,
            required: true
        },
        thumbnails: {
            type: String,
            required: true
        },
        isAdmin:{
          type: Boolean,
          required: true
        },
        posts:{
          type: Array,
          required: true
        }
    }

}
</script scoped>

<style scoped>
.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}
a {
  text-decoration: none;
  color: black;
}
@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}
.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding: 10px;
  text-align: center;
}
a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>
