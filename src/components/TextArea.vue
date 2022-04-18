<template>
  <div class="form-group">
    <label class="caption" for="inputeTextArea">{{label}}</label>
    <textarea
      class="form-control"
      id="inputeTextArea"
      rows="3"
      :value='modelValue'
      @input='$emit("update:modelValue", $event.target.value)'
    ></textarea>
  </div>
</template>

<script>
export default {
  name: 'TextArea',
  props: {
    label: String,
    modelValue: String
  },
}
</script>

<style scoped>
textarea {
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
textarea:focus{
  outline:none;
  border-color:#2ecc71;
  box-shadow:0 0 10px #2ecc71;
}
.caption {
  font-size: 18px;
}
</style>
