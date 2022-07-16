const EventEmitter = require("events");

const event =  new EventEmitter();

/*event.on("writeMyName", () => {
    console.log("your name is ajayrajsinh");
});

event.on("writeMyName", () => {
    console.log("your name is kanbha");
});

event.on("writeMyName", () => {
    console.log("your name is amit");
});

event.emit("writeMyName");*/

event.on("checkPage", (sc, msg) => {
    console.log(`status code is ${sc} and the page is ${msg}`);
});

event.emit("checkPage", 200, "ok");