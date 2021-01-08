# Express with Typescript Demo

## Overview
Small demo showing what express with typescript looks like made following [Brad Traversy's tutorial](https://www.youtube.com/watch?v=zRo2tvQpus8). 

Alternatively, you could implement something like [NestJS](https://nestjs.com/) but this does away with the need for the overhead that it would come with. 

In addition to using typescript types - this allows you to import custom types for *node*, *express*, etc and use those when building out your app. 

This demo assumes that [typescript](https://www.npmjs.com/package/typescript) is installed `globally` which will give you access to `tsc`/typescript compiler. 

## Frameworks / Libraries 
- [typescript](https://www.npmjs.com/package/typescript)
- [express](https://expressjs.com/)
- [ts-node](https://www.npmjs.com/package/ts-node)
- [@types/node](https://www.npmjs.com/package/@types/node) *(Custom types for node)*
- [@types/express](https://www.npmjs.com/package/@types/express) *(Custom types for express)*
- [nodemon](https://www.npmjs.com/package/nodemon)

# Scripts
`npm run dev`
- will watch `src` folder (eg. `ts` files)

`npm run build`
- will output to `dist` folder

`npm run start`
- will run the files in `dist` (eg. the js files resulting from build)