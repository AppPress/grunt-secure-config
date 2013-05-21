/*
 * grunt-secure-config
 *
 * Copyright (c) 2013 Kevin Smith, contributors
 * Licensed under MIT
 */

"use strict";

module.exports = function (grunt) {
	grunt.initConfig({
		jshint: {
			all: [
				"Gruntfile.js",
				"tasks/**/*.js"
			]
		}
	});

	grunt.loadTasks("tasks");
	grunt.loadNpmTasks("grunt-contrib-jshint");

	grunt.registerTask("default", ["jshint"]);
};
