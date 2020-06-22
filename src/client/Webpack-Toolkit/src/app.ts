/**

    This file is compiled by webpack and Babel
    by running the command "webpack" on the terminal.
    Run "webpack --watch" to auto-compile

    This uses a client-side router to determine
    what JavaScript should be executed where.
    
    Please add additional code in routing.js & functions.js

**/

import './../assets/main.scss'

import { Routing } from './routing'

import 'bootstrap';

import * as $ from 'jquery'

$( document).ready( () => {

    const router = new Routing()

} ) 