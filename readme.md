TokoBagas
=====================
this is infamous clone of http://tokobagus.com (olx) as a learning purpose only for KeJarDev. Built on AngularJs using Gulp Angular Generator with REST API Backend. Feel free to fork, pull request, etc.

Demo available at http://tokobagas.dev.my.id

REST API Backend
--------------
See https://github.com/SuBali/tokobagas-restapi for more details

----------

Frontend AngularJS
--------------
**Build Tools**
scafolding tools: Yeoman http://yeoman.io
Generator: https://github.com/Swiip/generator-gulp-angular 

#### prerequisites
 1. Git http://git-scm.com
 2. NodeJS http://nodejs.org
 3. Yeoman http://yeoman.io
 4. GulpJS http://gulpjs.com
 5. Bower http://bower.io
 
#### Install 
clone the repo first

inside the newly clone directory, install library needed
```
npm install
```
once nodejs module installed, install angularjs modules needed
```
bower install
```

#### Testing
to test local sites run
```
gulp serve
```
it will automatically open new browser window to test. every changes in the files will trigger browser refresh to reflect the changes.

#### Build to production
  To build production ready files run
```
gulp
```
all minified files will be generated in dist/ folder ready to upload

{todo: how to unit test, end-to-end test}

#### Discussion
We're using Slack to discuss related to this repo
https://subali.slack.com/messages/tokobagas/
