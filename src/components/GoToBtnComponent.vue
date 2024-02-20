<template>
    <div class="gototop" >
        <i @click="console.log('top');" class="fa-solid fa-caret-up"></i>
    </div>
    <div class="gotodown">
        <i @click="console.log('bottom');" class="fa-solid fa-caret-down"></i>
    </div>
</template>
  
  
<script>
export default {
    name: 'GoToBtnComponent',
    methods: {

    }
}
</script>
  
<style>

.gototop{
    position: fixed;
    right: 76px;
    bottom: 59px;
    color: #313131;
    font-size: 64px;
    z-index: 10;
    cursor: pointer;
    border: none;
    background: none;
  }
  .gotodown{
    position: fixed;
    right: 75px;
    bottom: 36px;
    color: #313131;
    font-size: 64px;
    z-index: 10;
    cursor: pointer;
    border: none;
    background: none;
  }
</style>
  