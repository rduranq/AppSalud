//comenta esto para que funcione el eslint
//que hace el eslint? es un linter que te ayuda a escribir codigo mas limpio
module.exports = { //exporta un objeto
  root: true,
  env: { browser: true, es2020: true },
  extends: [//extiende de los siguientes
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],//ignora estos archivos
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],//plugins que se van a usar
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },//permite exportar constantes
    ],
  },
}
