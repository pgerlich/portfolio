serve:
	cd lib/out/ && python -m SimpleHTTPServer 8080

build: sass lint
	webpack

run:
	webpack -w

zip:
	@echo "Have you enabled the minification plugs? If so, run: make zip-real"

zip-real:
	mkdir build
	mkdir build/assets
	cp lib/out/index.html build/
	cp lib/out/main.css build/
	cp lib/out/bundle.js build/
	cp -r lib/out/assets/* build/assets/
	zip -r build.zip build
	rm -rf build

sass:
	sass --sourcemap=none ./lib/src/ui/sass/main.scss ./lib/out/main.css

run-sass:
	sass --sourcemap=none --watch ./lib/src/ui/sass/main.scss:./lib/out/main.css

lint:
	./node_modules/.bin/eslint ./lib/src/ui
