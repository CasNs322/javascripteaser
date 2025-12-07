import antfu from '@antfu/eslint-config';

export default antfu({
  react:     true,
  stylistic: {
    semi:      true,
    overrides: {
      'style/key-spacing': ['error', {
        multiLine: {
          beforeColon: false,
          afterColon:  true,
        },
        align: {
          beforeColon: false,
          afterColon:  true,
          on:          'value',
        },
      }],
      'style/no-multi-spaces': ['error', {
        exceptions: { Property: true, ImportAttribute: true, TSTypeAnnotation: true },
      }],
    },
  },
});
