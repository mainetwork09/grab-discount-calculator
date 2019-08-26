export default {
  rules: {
    length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
    required: v => !!v || 'This field is required',
    isNumber: v => !isNaN(v) || 'is not number',
  }
}