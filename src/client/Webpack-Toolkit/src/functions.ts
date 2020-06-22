/**

    This file is mainly a playground to add any code needed.
    Add a method here, import what you need, and then call the
    method in routing.ts wherever you need it executed.
    
**/

import * as $ from 'jquery'

import people from './_person.ts'

export class Functions {

    /* Prints the people imported from _person.ts */
    printPeople = () => {

        people.forEach( person => {
            
            console.log( `${person}!` )

        } )

    }

}