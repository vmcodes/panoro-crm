# README

Also read the **TASKS.md** file for the job's tasks.

## Running

Run the project by calling `npm run-script run`.

## Project structure

All the files names are in **PascalCase**, while the folders names are in **snake_case**.

-   **dummy_api_server** - the source for the dummy API server;
-   **src** - all the project source files are placed here;
    -   **components** - the React components that are components part of one page;
    -   **data** - files containing no functionality, only constant data and structures;
        -   **AccountType.ts** - the types of account a user can choose from when register;
        -   **AccountTypeValues.ts** - the values of the `AccountType` object;
        -   **BusinessActivity.ts** - the types of business activity a user can choose from when register;
        -   **BusinessActivityValues.ts** - the values of the `BusinessActivity` object;
        -   **EmployeesSelect.ts** - the number of employees' values a user can choose from when register;
        -   **EmployeesSelectValues.ts** - the values of the `EmployeesSelect` object;
        -   **MinimumPasswordLength.ts** - the number of minimum characters a password must contain;
    -   **localization** -
        -   **ro** -
            -   **AccountTypeLocalization.ts** - the localization for the `AccountType` object;
            -   **BusinessActivityLocalization.ts** - the localization for the `BusinessActivity` object;
            -   **EmployeesSelectLocalization.ts** - the localization for the `EmployeesSelect` object;
    -   **pages** - the React pages composed of multiple **components**;
    -   **styles** - the SASS style files where the name;
        -   **components** - the style files for the components files where the name of the file is the name of the component;
        -   **pages** - the style files for the pages files where the name of the file is the name of the component;
        -   **global.scss** - the global style file that is imported in **App.tsx**;
    -   **modules** - multiple parts of the application;
        -   **...[module name]**
            -   **components** - the React components that are components part of one page;
            -   **pages** - the React pages composed of multiple **components**;
            -   **styles** - the SASS style files where the name;
                -   **components** - the style files for the components files where the name of the file is the name of the component;
                -   **pages** - the style files for the pages files where the name of the file is the name of the component;
            -   **utils** - the module utility functions files;
    -   **utils** - the directory containing all the general utility function files;
        -   **fetch.ts** - Fetch function for fetching `application/json` requests;
    -   **App.tsx** - the main React component file that is rendered from **run.tsx**;
    -   **index.ejs** - the HTML main file;
    -   **run.tsx** - the main file that run the project;
-   **tmp** - temporary files;
-   **.gitignore** - the Git ignore filel
-   **.prettierrc.json** - the Prettier configuration file;
-   **package.json** - the NPM package configuration;
-   **README.md** - this file
-   **tailwind.config.ts** - the TailwindCSS configuration file;
-   **TASKS.md** - the job tasks;
-   **tsconfig.build.json** - the build TypeScript configuration file;
-   **tsconfig.json** - the general TypeScript configuration file;
-   **webpack.config.ts** - the Webpack configuration file.

## File structure

### React components & pages

-   the React components and pages should be defined as functional components;
-   the React components and pages should be exported as default.

### SCSS styles

-   the name of the classes are in **kebab-case**;
-   the name of the IDs are in **PascalCase**.

## Packages used

-   **ReactJS**
-   **SASS**
-   **TailwindCSS**

### Compiling & building

-   **Babel**
-   **Webpack**
