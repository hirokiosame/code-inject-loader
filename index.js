const loaderUtils = require('loader-utils');

module.exports = function(source) {
	const options = loaderUtils.getOptions(this);
	const prepend = options.prepend || '';
	const append = options.append || '';

	if (typeof options.transformer === 'function') {
		source = options.transformer(source);
	}

	return prepend + source + append;
};
