module.exports = [
    {
      files: ['**/*.js'],
      languageOptions: {
        ecmaVersion: 'latest', // or the specific version you're using
      },
      env: {
        node: true, // Enables Node.js global variables
      },
      rules: {
        semi: ['error', 'always'], // Add other rules as needed
      },
    },
  ];