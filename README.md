# Grunt Secure Config

A simple set of grunt tasks to manage secure-config encrypted JSON files.

## Example Usage

Use `grunt.initConfig` to configure secure-config. Both `basePath` and `keyPath` are required and can be with a `String` or a `Function`.

```javascript
var getKeyPath = function () {
	return "/home/node/secure-store.pem";
};

grunt.initConfig({
	secure: {
		options: {
			basePath: path.join(__dirname, "config", "secure"),
			keyPath: getKeyPath
		}
	}
});
```

### Encrypt a .json file

1. Create a JSON file `{basePath}/secure/{"defaults" || env}.json`.
2. Run `grunt secure:encrypt --env={env}`. The `env` option is not used when encrypting defaults.json.
3. Remove the .json file

### Decrypt a .store file to console

Run `grunt secure:decypt --env={env}`. The `env` option is not used when decrypting defaults.store.

Decrypt a .store file to a .json file by adding `--toFile`

## License

View the [LICENSE](https://github.com/AppPress/node-connect-datadog/blob/master/LICENSE) file.
