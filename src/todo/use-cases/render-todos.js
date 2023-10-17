import { Todo } from "../models/todo"
import { createTodoHTML } from "./create-todo-html";

let element;


/**
 * 
 * @param {String} elementId 
 * @param {Todo} todos 
 */

export const renderTodos = ( elementId, todos = []) => {

    if(!element)
        element = document.querySelector(elementId);
    
    if(!element) throw new Error(`Element ${elementId} not found`);

    element.innerHTML = '';


    let arregloTodos = Object.values(todos);
    arregloTodos.forEach(todo => {
        element.append(createTodoHTML(todo));
    });

}