install:
	npm ci
gendiff:
	node bin/gendiff.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
test_coverage:
	npm test -- --coverage
test:
	NODE_OPTIONS=--experimental-vm-modules npx jest
