# TASKS

## General

-   All the tasks must be worked on this repository;
-   Additional packages must be asked permission first before installed and
    used;
-   The project structure defined in `README.md` must be respected;
-   The file naming and structure defined in `README.md` must be respected;
-   Always use Tailwind classes;
    -   If the value/color is repeated multiple times it should be added to the
        TailwindCSS theme;
-   The project must be done in TypeScript.

## PanoroCRM Login

-   The design can be found [here](https://www.figma.com/file/rD9S6QJOrCS5o4pPtfoLHi/CRM---NOU?node-id=199%3A701);
-   Checking on client-side and show error if the password is less than
    `src/data/MinimumPasswordLength.ts` characteres;
-   Handle errors from the server;
-   See `user_flow_diagram.svg` for the user flow;
-   The **Register page** should be created as a single page holding all the
    data and each section be created as components and lazy loaded;
-   The phone inputs should be done using `react-phone-input-2`;
-   The data for the `accountType` represented by the select "Tip persoana" from
    the screen "Sign up" can be found `src/data/AccountType.ts`;
-   The data for the `businessActivity` represented by the select "Obiect de
    activitate" from the screen "Details" can be found
    `src/data/BusinessActivity.ts`;
-   The data for the `employees` represented by the select "Angajati" from the
    screen "Details" can be found `src/data/EmployeesSelect.ts`;
-   If the `accountType` is `AccountType.PERSON` then the register step
    represented by the screen "Details" is skipped and shown directly the "Module
    disponibile" screen;
-   The localization strings for `accountType`, `businessActivity`, `employees`
    can be found in the `localization/ro` directory;

## API

### Login

**Path**: `/api/users/login`  
**Method**: `POST`  
**Content-Type**: `application/json`  
**Params**:

-   `username` : string - the name of the user
-   `password` : string - the password of the user

**Returns**:

-   `200`, `true` - login with success
-   `400`, `error message` - failed to login

Request for login to the CRM.  
For testing the only result will return `200` is for:

-   username: `user@mail.com`;
-   password: `123456`.

### Register

**Path**: `/api/users/register`  
**Method**: `POST`  
**Content-Type**: `application/json`  
**Params**:

-   `username` : string - the name of the new user;
-   `password` : string - the password of the new user;
-   `email`: string - the email of the new user;
-   `modules`: string[] - the modules the user selected;
-   `accountType`: number - the type of account;
-   `[businessActivity]`: number - the business activity; required if the
    `accountType` is `AccountType.BUSINESS`;
-   `[businessName]`: string - the business name; required if the `accountType`
    is `AccountType.BUSINESS`;
-   `[businessPhoneNumber]`: string - the business phone number; required if the
    `accountType` is `AccountType.BUSINESS`;

**Returns**:

-   `200`, `true` - registered with success;
-   `400`, `{ field: string; error: string }` - failed to register; returning
    an object where parameter `field` is the field that failed and `error` is
    the error message.

Request for registering to the CRM.

### Recover password

**Path**: `/api/users/recover_password`  
**Method**: `POST`  
**Content-Type**: `application/json`  
**Params**:

-   `email` : string - the email for recovering the password

**Returns**:

-   `200`, `true`

Request for recovering the password of an user.

### Get modules

**Path**: `/api/modules`  
**Method**: `GET`  
**Content-Type**: `application/json`  
**Params**: nothing  
**Returns**:

-   `200`, `{ id: string; icon: string, color: string, name: string, description: string }[]` -
    login with success

Request for getting the modules. The `id` is the string that will must be sent
to the register request in the `modules` array. The `icon` is the path to the
SVG image of the module. The `color` is the color for the SVG. The `name`
and `description` are the text for the title and description for the module.
