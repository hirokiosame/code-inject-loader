# code-inject-loader
Inject code to certain files


## How to use
Add as a loader rule to configure which files the loader should inject code into.

webpack.config.js
```
moule.exports = {
	...,

	module: {
		rules: [
			{
				test: /src/,
				loader: 'code-inject-loader',
				options: {
					prepend: `console.log('Hello Im in every file');`
				},
			},
			...
		]
	},

	...
}
```

### Options
- *prepend <string>* Add code to the beginning of the file
- *append <string>* Add code to the bottom of the file
- *transform(source) <function>* Function to make changes to the source code of the file
