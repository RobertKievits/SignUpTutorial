# SignUpTutorial

Single page app with a sign-up form.

- User can enter first name, last name, email, and password.
- All fields are required.
- Password validation:
	- Should be a minimum of eight characters,
	- Should contain lower and uppercase letters (custom validator),
	- Should not contain user’s first or last name (custom validator).
- Email validation using regex and custom validators
- On valid form POST request is first sent to `https://jsonplaceholder.typicode.com/photos/{last_name_length}` to get back a thumbnailUrl. The returned thumbnailUrl is attached to the filled in formdata (first name, last name and email address) and sent to `https://jsonplaceholder.typicode.com/users`
 
## Implemented additional nice to haves

- Created a reusable Input component to limit code reuse
- Show toast on success and error of submit (created toast service)
- Setup linting and prettier as well
- Last time I built this I used tailwind, but decided to use custom styling this time. 
- As an added bonus I used css variables to add a (simple) darkmode.
- Added some simple [Playwright](https://playwright.dev/) tests (happy and unhappy flows).
- Added screenshot testing of pristine page, filled in page and page in error state to detect visual changes
- Basic accessibility testing with [Pa11y](https://pa11y.org/) which triggers an error if you have any accessibility errors on your page

## TODO's / next steps (if more time)

- Additional unit and integration tests (since this is only a demo I did not create 100% code coverage. The tests that are there is to give a general idea of unit test knowledge)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). I decided to use Karma as a unit testing framework. Jest was also an option since I am currently working with jest tests in my current project, but Karma is the standard when generating a new Angular project. Therefore, I stuck with that.

## Running a11y tests

Make sure the application is running with `npm run start` then run `npm run a11y`. The results will be output in the `coverage/a11y` folder.

## Running e2e tests

Run e2e tests with `npm run e2e`. Playwright will output a report for you.

## Linting

Run `npm run lint` to execute linting. If you run `npm run lint:fix` eslint will automatically fix all possible errors that can be automatically fixed.

## Prettier

This project uses prettier for code consistency. Run `npm run format` to auto format all files according to prettier formatting. If you are a contributor make sure to use the [IDE integration](https://prettier.io/docs/en/editors.html) to auto format while coding.