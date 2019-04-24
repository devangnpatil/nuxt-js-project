import vuex from 'vuex';
const createStore = () =>{
    return new vuex.Store({
        state:{
            loadedPost: []
        },
        mutation:{
            setPost(state, post){
                state.loadedPost = post;
            }
        },
        actions:{
            nuxtServerInit(vuexContext, context){
                new Promise((resolve, reject) => {
                    vuexContext.commit('setPost', [{
                        id:'1',
                        isAdmin: true,
                        content: 'Test content',
                        thumbnails: 'https://dummyimage.com/600x400/000/fff&text=hi+this+is+dumy+image'
                      },{
                        id:'2',
                        isAdmin: true,
                        content: 'Test content 2',
                        thumbnails: 'https://dummyimage.com/600x400/000/fff&text=hi+this+is+dumy+image'
                      },{
                        id:'3',
                        isAdmin: true,
                        content: 'Test content3',
                        thumbnails: 'https://dummyimage.com/600x400/000/fff&text=hi+this+is+dumy+image'
                      }]);
                      resolve();
                })
            },
            setPost(context, post){
                context.commit('setPost', post)
            }
        },
        getters:{
            loadedPost(state){
                return state.loadedPost
            }
        }
    })
}

export default createStore
