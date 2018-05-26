<template>
  <div class="Input">
    <input :type="type" :placeholder="placeholder" :border="border" />
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    type: {
      type: String,
      default: 'text',
      validator: (value) => {
        return ['text', 'password'].indexOf(value) !== -1
      }
    },
    value: [String, Number],
    maxlength: Number,
    minlength: Number,
    placeholder: String,
    disabled: Boolean,
    size: {
      type: String,
      default: 'normal',
      validator: (value) => ['normal', 'small', 'large'].indexOf(value) !== -1
    },
    name: String,
    readonly: Boolean,
    border: Boolean
  }
}
</script>

<style scoped>
  input {
    border: 0px;
    margin: 20px;
    padding: 20px;
  }
</style>
