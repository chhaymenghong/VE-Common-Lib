## Project Overview
- This is a seed project for creating a new Angular 6 library. Service class should not be mixed within a library
with components/directives/pipes, because we normally want services to be singleton. Service class should be in a separate library
repository.

- The project has two main entities. ```VE-Common-App``` and ```VE-Common``` under ```projects``` directory. ```VE-Common-App```
should be used to document how to use ```VE-Common``` library.

- Circle CI is used to automatically publish only ```VE-Common```, the library and not the app, to npm registry. The publish
job is only run on successful merge to ```master``` branch. Any other projects that need to use this library can just install it
directly from npm registry.

- Don't forget to increment projects/ve-common/package.json to the appropriate version before the library is published to npm.

## Installation
- Install Node 10.8.0.
- Install Angular-Cli:  ```npm install -g @angular/cli```.
- Install dependencies: ```npm install```.

## Building/Running
- Consult ```package.json``` at the root of the project to learn more about all the development workflow scripts.
