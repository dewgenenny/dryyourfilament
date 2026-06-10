// Eleventy configuration

module.exports = function(eleventyConfig) {
    // Copy the `assets` directory to the compiled site folder
    eleventyConfig.addPassthroughCopy("assets");

    // Create a collection for guide pages (shown in nav)
    eleventyConfig.addCollection("tools", function(collection) {
        return collection.getFilteredByGlob("guides/**/*.md");
    });
    eleventyConfig.addPassthroughCopy("CNAME");
    eleventyConfig.addPassthroughCopy("robots.txt");



    return {
        markdownTemplateEngine: "njk"
    }
};
