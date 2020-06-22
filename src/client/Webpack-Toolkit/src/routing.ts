/**

    This file controls the client-side routing, while the 
    main logic of the app is controlled by functions.ts

    We define a slug, and assign it a function. That function
    contains the different methods from functions.ts that will 
    execute on that slug.

    To add new JavaScript:
    1. Create a method in functions.ts to do what you need
    2. Call it from allPages() or wherever you need it using 
        context.functions.yourFunction 
    
**/

import { Functions } from './functions.ts'

import { Router } from './../dist/Router.js'

export class Routing {

    /** Pulls in the methods from functions.ts */
    functions: Functions = new Functions()

     /** This method is executed on all pages */

     allPages = () => {

        this.functions.printPeople()

    }

    /** This method is executed only on the homepage */

    home = () => {

        

    }

    constructor() {

        this.functions = new Functions()

        const router = new Router()

        /** .get() defines a route. Takes a slug, and a function */
        router.get( '.*', this.allPages )
        router.get(  '/', this.home )

        /** To add a new route:
         *  1. Choose a slug, such as about-us/team/.*
         *  2. Create a method for the route, such as singleTeam()
         *  3. Add the router with the slug and method mirroring the above
         *  4. Add new methods as needed in functions.ts, and call from the new routing method
         */
        
        router.init()

    }

}