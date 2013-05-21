var path = require("path");
var fs = require("fs");
var SecureStore = require("secure-config").SecureStore;

module.exports = function (grunt) {

	grunt.registerTask("secure", function () {
		var env = grunt.option("env") || "defaults";
		var store = new SecureStore(this.options());

		switch (this.args[0]) {
			case "encrypt":
				try {
					store.encrypt(env);
					grunt.log.ok();
				} catch (err) {
					grunt.log.error();
					grunt.verbose.error(err);
					grunt.fail.warn("Secure encrypt operation failed");
				}
				break;
			case "decrypt":
				var data;

				try {
					data = store.decrypt(env);
				} catch (err) {
					grunt.log.error();
					grunt.verbose.error(err);
					grunt.fail.warn("Secure decrypt operation failed");
				}

				data = JSON.stringify(data, null, "\t")

				if (grunt.option("toFile")) {
					try {
						fs.writeFileSync(
							path.join(store.basePath, env + ".json"),
							data
						);

						grunt.log.ok();
					} catch (err) {
						grunt.log.error();
						grunt.verbose.error(err);
						grunt.fail.warn("Secure decrypt operation failed");
					}
				} else {
					grunt.log.writeln(data);
				}

				break;
			default:
				grunt.fail.warn("Unkown task " + this.args);
		};
	});
};
