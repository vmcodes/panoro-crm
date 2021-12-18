# TASKS

## General

-   All the tasks must be worked on this repository;
-   Additional packages must be asked permission first before installed and used;
-   The project structure defined in `README.md` must be respected;
-   The file naming and structure defined in `README.md` must be respected;
-   Always use Tailwind classes;
    -   If the value/color is repeated multiple times it should be added to the TailwindCSS theme;

## PanoroCRM Login

-   Checking on client-side and show error if the password is less than 
    `src/data/MinimumPasswordLength.ts` characteres;
- Handle errors from the server;

## API

### Login

**Path**: `/api/login`  
**Method**: `POST`  
**Content-Type**: `application/json`  
**Params**:

- `username` - the name of the user
- `password` - the password of the user

**Returns**:

- `200`, `true` - login with success
- `400`, `error message` - failed to login

Request for login to the CRM.  
For testing the only result will return `200` is for:

- username: `user@mail.com`;
- password: `123456`.

### Register

**Path**: `/api/register`  
**Method**: `POST`  
**Content-Type**: `application/json`  
**Params**:

- `username` - the name of the new user;
- `password` - the password of the new user.

**Returns**:

- `200`, `true` - registered with success;
- `400`, `{ field: string; error: string }` - failed to register; returning
    an object where parameter `field` is the field that failed and `error` is
    the error message.

Request for registering to the CRM.  

### Get modules

**Path**: `/api/modules`  
**Method**: `GET`  
**Content-Type**: `application/json`  
**Params**: nothing  
**Returns**:

- `200`, `{ icon: string, name: string, description: string }[]` - login with success

Request for getting the modules.
