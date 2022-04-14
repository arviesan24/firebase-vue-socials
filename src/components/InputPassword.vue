<template>
  <div class="caption"><label>{{label}}</label></div>
  <input
    type="password"
    :value='modelValue'
    @input='$emit("update:modelValue", $event.target.value)'
  />
</template>

<script>
export default {
  name: 'InputPassword',
  props: {
    label: String,
    modelValue: String
  },
}
</script>

<style scoped>
input[type=password] {
  width: 80%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type='password']:focus{
    outline:none;
    border-color:#2ecc71;
    box-shadow:0 0 10px #2ecc71;
}
.caption {
  font-size: 18px;
  display: inline-block;
  width: 20%;
}
</style>
