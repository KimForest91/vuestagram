<template>
  <div class="post">
    <div class="post-header">
      <div class="profile" :style="{ backgroundImage : `url(${ post.userImage })`}"></div>
      <span class="profile-name">{{ post.name }}</span>
    </div>
    <div @click="$store.commit('like')" :class="post.filter" class="post-body" :style="{ backgroundImage : `url(${ post.postImage })`, filter: `${post.filter}`}"></div>
    <div class="post-content">
      <p>{{ $store.state.likes }} Likes</p>
      <p><strong>{{ post.name }}</strong> {{ post.content }}</p>
      <p class="date">{{ post.date }}</p>
    </div>
  </div> 
</template>

<script>

export default {
  name: 'PostView',
  post() {
    return {

    }
  },
  props: {
    post: Object,
  }
}
</script>

<style>

</style>