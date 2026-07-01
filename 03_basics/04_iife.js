//Immediately Invoked Function Expression (IIFE) is a function that runs as soon as it is defined. It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts. The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope. The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.


(function welcome(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();
 
((name) => {
    //unnamed IIFE  
    console.log(`DB CONNECTED TWO${name}`);
})("anekk")

