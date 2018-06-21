# API Boilerplate for SQL

## Summary

This is a simple API boilerplate that can be used with SQL databases. App uses ES6 and babel to compile the scripts for production

## Set Up

Create a SQL database and add the settings in /config/default

### Development

to run a dev environment run `npm run start-dev`

#### Production

To run a production environment first build and compile using babel
`npm run build`
Then start the app `npm start`

## Editing

Basic crud functionality is found within `src/controllers/crud`
Follow example route to create new endpoints `src/routes/example`