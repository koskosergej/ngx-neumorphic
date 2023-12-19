# ngx-ks

Angular Neomorphism UI kit

Based on [Neumorphism and CSS](https://css-tricks.com/neumorphism-and-css/)

Neumorphism, also known as neomorphism, has emerged as a contemporary design trend that has garnered significant attention recently. Its visual appeal lies in its minimalist yet realistic user interface, offering a fresh interpretation of skeuomorphism, thus deriving its name. Coined in a UX Collective post from December 2019, this trend has sparked diverse discussions within design and development circles, evoking mixed opinions. While some like Chris have humorously criticized it on platforms like Twitter, others like Adam Giebl have embraced it by creating an online generator.

The trend has prompted active engagement from developers, designers, and UX specialists, inviting debates on aspects such as aesthetics, usability, accessibility, and practicality.

Evidently, it has resonated with the community in some way or another.

Let's venture into the realm of neumorphism, exploring the diverse neumorphic effects achievable through our chosen language, CSS. We'll delve into both the arguments supporting and opposing this style, assessing its potential application within a web interface.

Neumorphic UI elements boast a seamless integration with the background, appearing either subtly extruded from or elegantly inset into it. Often dubbed as 'soft UI,' these elements employ gentle shadows skillfully to craft an effect that imparts a tactile and connected feel.

# Project NPM Scripts

This project includes various NPM scripts that aid in different development tasks. Below is a list of available scripts with their associated commands:

- **ng**
  - Alias for the Angular CLI (`@angular/cli`).
  ```bash
  npm run ng

- **start**
  - Initiates the development server using Nx to serve the application.
  ```bash
  npm run start

- **build**
  - Executes the Nx build process for the project.
    ```bash
    npm run build

- **watch**
  - Runs Nx build in watch mode with the 'development' configuration.
    ```bash
    npm run watch

- **test**
  - Runs Nx tests for the project.
    ```bash
    npm run test

- **lint**
  - Performs linting using ESLint for TypeScript files located in the 'src' directory.
    ```bash
    npm run lint

- **lint:fix**
  - Attempts to automatically fix linting issues in the TypeScript files using ESLint.
    ```bash
    npm run lint:fix

- **storybook**
  - Invokes the Storybook runner via Nx for the project.
    ```bash
    npm run storybook
