module.exports = {
	root: true,
	env: {
		node: true,
    },
    plugins: ['prettier'],
    extends: [
        'plugin:vue/vue3-essential',
        'plugin:prettier/recommended',
        'eslint:recommended',
        '@vue/eslint-config-typescript/recommended',
        '@vue/eslint-config-prettier'
    ],
	parserOptions: {
        parser: "@babel/eslint-parser",
        requireConfigFile: false,
	},
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		"vue/multi-word-component-names": [
			"error",
			{
				ignores: ["index"], //需要忽略的组件名
			},
		],
		"no-unused-vars": 1,
		"no-undef": "off",
		"no-unused-components": "off",
        "no-var": 1,
	},
};
