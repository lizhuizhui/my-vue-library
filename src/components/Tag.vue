<template>
  <div class="tag" :class="classes" @click="onClick" :style="style">{{ label }} </div>
</template>

<script  setup>
import { computed } from 'vue';

const emit = defineEmits(['click']);
const props = defineProps({
  size: {
    default: 'medium',
  },
  label: {
    type: String,
  },
  backgroundColor: {
    type: String,
  },
  borderColor: {
    type: String,
    default: '#029cfd',
  },
  borderColor: {
    type: String,
    default: '#029cfd',
  },
  borderRadius: {
    type: Number,
    default: 6,
  },
});


const classes = computed(() => {
  let str = ''
  if (props.size) {
    str += ' tag-' + props.size;
  }
  return str
});

const style = computed(() => ({
  backgroundColor: props.backgroundColor,
  borderColor: props.borderColor,
  borderRadius: (props.borderRadius||0)+'px',
}));

function onClick() {
  emit('click');
}
</script>

<style>
.tag {
  display: inline-block;
  border: 1px solid;
  color: #666;
}
.tag-small {
  padding: 6px;
  font-size: 12px;
}
.tag-medium {
  padding: 10px;
  font-size: 16px;
}
.tag-large {
  padding:20px;
  font-size: 30px;
}
</style>