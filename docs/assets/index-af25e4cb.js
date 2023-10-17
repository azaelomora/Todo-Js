(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}})();let b;const L=new Uint8Array(16);function C(){if(!b&&(b=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!b))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return b(L)}const r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function S(e,t=0){return r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]}const E=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),T={randomUUID:E};function P(e,t,a){if(T.randomUUID&&!t&&!e)return T.randomUUID();e=e||{};const l=e.random||(e.rng||C)();if(l[6]=l[6]&15|64,l[8]=l[8]&63|128,t){a=a||0;for(let o=0;o<16;++o)t[a+o]=l[o];return t}return S(l)}class h{constructor(t){this.id=P(),this.description=t,this.done=!1,this.createdAt=new Date}}const c={All:"All",Completed:"Completed",Pending:"Pending"},d={todos:[new h("Piedra del alma"),new h("Piedra del tiempo"),new h("Piedra del realidad"),new h("Piedra del poder"),new h("Piedra del espacio")],filter:c.All},A=()=>{v(),console.log("Init Store")},v=()=>{if(!localStorage.getItem("state"))return;const{todos:e=[],filter:t=c.All}=JSON.parse(localStorage.getItem("state"));d.todos=e,d.filter=t},f=()=>{console.log(),localStorage.setItem("state",JSON.stringify(d))},I=(e=c.All)=>{switch(e){case c.All:return{...d.todos};case c.Completed:return d.todos.filter(t=>t.done);case c.Pending:return d.todos.filter(t=>!t.done);default:throw new Error(`Option ${e} isn't valid.`)}},k=e=>{if(!e)throw new Error("Description is required");d.todos.push(new h(e)),f()},O=e=>{d.todos=d.todos.map(t=>(t.id===e&&(t.done=!t.done),t)),f()},U=e=>{d.todos=d.todos.filter(t=>t.id!==e),f()},x=()=>{d.todos=d.todos.filter(e=>!e.done),f()},D=(e=c.All)=>{d.filter=e,f()},q=()=>d.filter,i={initStore:A,loadStore:v,addTodo:k,toggleTodo:O,deleteTodo:U,getTodos:I,deleteCompleted:x,setFilter:D,getCurrentFilter:q},F=`<section class="todoapp">\r
    <header class="header">\r
        <h1>Tareas</h1>\r
        <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus>\r
    </header>\r
    \r
    <!-- This section should be hidden by default and shown when there are todos -->\r
    <section class="main">\r
        <input id="toggle-all" class="toggle-all" type="checkbox">\r
        <label for="toggle-all">Mark all as complete</label>\r
        <ul class="todo-list">\r
            <!-- These are here just to show the structure of the list items -->\r
            <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->\r
            <!-- <li class="completed" data-id="abc">\r
                <div class="view">\r
                    <input class="toggle" type="checkbox" checked>\r
                    <label>Probar JavaScript</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Create a TodoMVC template">\r
            </li> -->\r
            <!-- <li>\r
                <div class="view">\r
                    <input class="toggle" type="checkbox">\r
                    <label>Comprar un unicornio</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Rule the web">\r
            </li> -->\r
        </ul>\r
    </section>\r
\r
    <!-- This footer should hidden by default and shown when there are todos -->\r
    <footer class="footer">\r
        <!-- This should be "0 items left" by default -->\r
        <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>\r
        <!-- Remove this if you don't implement routing -->\r
        <ul class="filters">\r
            <li>\r
                <!-- selected -->\r
                <a class="filtro" class="selected" href="#/">Todos</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/active">Pendientes</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/completed">Completados</a>\r
            </li>\r
        </ul>\r
        <!-- Hidden if no completed items are left ↓ -->\r
        <button class="clear-completed">Borrar completados</button>\r
    </footer>\r
</section>\r
\r
\r
<footer class="info">\r
    <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>\r
    <!-- Change this out with your name and url ↓ -->\r
    <p>Creado por <a href="http://todomvc.com">ti</a></p>\r
    <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>\r
</footer>`;let w;const M=e=>{if(w||(w=document.querySelector(e)),!w)throw new Error(`Element ${e} not found`);w.innerHTML=i.getTodos(c.Pending).length},N=e=>{if(!e)throw new Error("A TODO object is required");const{done:t,description:a,id:l}=e,o=`
        <div class="view">
            <input class="toggle" type="checkbox" ${t?"checked":""}>
            <label>${a}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">`,n=document.createElement("li");return n.innerHTML=o,n.setAttribute("data-id",l),e.done&&n.classList.add("completed"),n};let g;const H=(e,t=[])=>{if(g||(g=document.querySelector(e)),!g)throw new Error(`Element ${e} not found`);g.innerHTML="",Object.values(t).forEach(l=>{g.append(N(l))})},m={ClearCompletedButton:".clear-completed",TodoList:".todo-list",NewTodoInput:"#new-todo-input",TodoFilters:".filtro",PendingCountLabel:"#pending-count"},V=e=>{const t=()=>{const s=i.getTodos(i.getCurrentFilter());H(m.TodoList,s),a()},a=()=>{M(m.PendingCountLabel)};(()=>{const s=document.createElement("div");s.innerHTML=F,document.querySelector(e).append(s),t()})();const l=document.querySelector(m.NewTodoInput),o=document.querySelector(m.TodoList),n=document.querySelector(m.ClearCompletedButton),u=document.querySelectorAll(m.TodoFilters);l.addEventListener("keyup",s=>{s.keyCode===13&&s.target.value.trim().length!==0&&(i.addTodo(s.target.value),t(),s.target.value="")}),o.addEventListener("click",s=>{const p=s.target.closest("[data-id]");i.toggleTodo(p.getAttribute("data-id")),t()}),o.addEventListener("click",s=>{const p=s.target.className==="destroy",y=s.target.closest("[data-id]");!y||!p||(i.deleteTodo(y.getAttribute("data-id")),t())}),n.addEventListener("click",()=>{i.deleteCompleted(),t()}),u.forEach(s=>{s.addEventListener("click",p=>{switch(u.forEach(y=>y.classList.remove("selected")),p.target.classList.add("selected"),p.target.text){case"Todos":i.setFilter(c.All);break;case"Pendientes":i.setFilter(c.Pending);break;case"Completados":i.setFilter(c.Completed);break}t()})})};i.initStore();V("#app");
