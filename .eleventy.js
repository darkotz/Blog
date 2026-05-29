module.exports = function(eleventyConfig) {
  // Passthrough copy for static assets
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("public");

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    }
  };
};
