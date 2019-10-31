# myBoilerMoneymaker

## Made a starting point for all future projects


### Folder structure varies by build system and programming language. Here are some standard conventions:

* src/: "source" files to build and develop the project. This is where the original source files are located, before being compiled into fewer files to dist/, public/ or build/.

* dist/: "distribution", the compiled code/library, also named public/ or build/. The files meant for production or public use are usually located here.

* lib/: external dependencies (when included directly).

* test/: the project's tests scripts, mocks, etc.

* node_modules/: includes libraries and dependencies for JS packages, used by Npm.

* vendor/: includes libraries and dependencies for PHP packages, used by Composer.

* bin/: files that get added to your PATH when installed.

### Markdown/Text Files:

* README.md: A help file which addresses setup, tutorials, and documents the project. README.txt is also used.

* LICENSE.md: any rights given to you regarding the project. LICENSE or LICENSE.txt are variations of the license file name, having the same contents.

* CONTRIBUTING.md: how to help out with the project. Sometimes this is addressed in the README.md file.


### Specific (these could go on forever):

* package.json: defines libraries and dependencies for JS packages, used by Npm.

* package-lock.json: specific version lock for dependencies installed from package.json, used by Npm.

* composer.json: defines libraries and dependencies for PHP packages, used by Composer.

* composer.lock: specific version lock for dependencies installed from composer.json, used by Composer.

* gulpfile.js: used to define functions and tasks to be run with Gulp.

* .travis.yml: config file for the Travis CI environment.

* .gitignore: Specification of the files meant to be ignored by Git.
