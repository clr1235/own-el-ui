module.exports = {
	root: true,
	env: {
		node: true,
	},
	plugins: ["prettier"],
	extends: [
		"plugin:vue/vue3-essential",
		"plugin:prettier/recommended",
		"eslint:recommended",
		"@vue/eslint-config-typescript/recommended",
		"@vue/eslint-config-prettier",
	],
	parserOptions: {
		ecmaVersion: 6,
		sourceType: "module",
		parser: ["@babel/eslint-parser", "@typescript-eslint/parser"],
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
		"no-unused-vars": 0,
		"no-undef": "off",
		"no-unused-components": "off",
		"no-var": 1,
		// 关掉必须使用const命名
		"prefer-const": 0,
		// 关掉tab缩进
		indent: [0, "tab"],
		"@typescript-eslint/no-explicit-any": 0,
	},
}
