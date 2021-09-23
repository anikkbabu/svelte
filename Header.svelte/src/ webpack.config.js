const sveltePreprocess = require('svelte-preprocess');
module.exports = {
  // ...
	module: {
		rules: [
			{
				test: /\.svelte$/,
				use: {
					loader: 'svelte-loader',
					options: {
						emitCss: true,
						hotReload: true,
						preprocess: sveltePreprocess({
							// https://github.com/kaisermann/svelte-preprocess/#user-content-options
							sourceMap: !prod,
							postcss: {
								plugins: [
									require("tailwindcss"), 
									// require("autoprefixer"),
									require("postcss-nesting")
								],
							},
						}),
					}
				}
      },
    ],
}
}