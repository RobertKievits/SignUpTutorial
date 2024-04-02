# SignUpTutorial

Basic sign up form built with Angular 17.3.2

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Linting

Run `npm run lint` to execute linting. If you run `npm run lint:fix` eslint will automatically fix all possible errors that can be automatically fixed.

## Prettier

This project uses prettier for code consistency. Run `npm run format` to auto format all files according to prettier formatting. If you are a contributor make sure to use the [IDE integration](https://prettier.io/docs/en/editors.html) to auto format while coding.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Technical choices

A description of technical choices:

## Styling

Last time I built this I used tailwind, but decided to use custom styling this time. As an added bonus I used css variables to add a (simple) darkmode.

## Testing

I decided to use Karma as a unit testing framework. Jest was also an option since I am currently working with jest tests in my current project, but Karma is the standard when generating a new Angular project. Therefore, I stuck with that.
