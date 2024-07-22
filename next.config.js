const isProd = process.env.NODE_ENV === "production";

module.exports = isProd
	? {
			basePath: "/portfolio",
			assetPrefix: "/portfolio/",
	  }
	: {};
