# BnB-Angular

An Angular Project. Angular Material used to help with UI (and some custom CSS).

Idea - This is a small app that lets users browse through accomodation listings and book or add one themselves.

Server - A Node.js SERVER provided in repo. Rum npm install and npm start to connect to DB (needs mongodb).

Guest and User functionality:

Guest can regsiter, login and view catalog.
User can add a listing (which can then edit and/or delete), book a listing and has a profile page. 

Architecture:

Build in 4 modules: core, shared, feature and user. Implements components, services, models, interceptors etc.
