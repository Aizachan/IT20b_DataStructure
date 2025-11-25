class Stack{
    constructor(){
        this.data = {};
        this.topindex = -1;
    }

    push(element){
        this.data[this.topindex] = element;
    }
}

    arrayTraverse(){
        let output = "";

        for(let i = 0; i <= this.topindex; i++){
            output += this.data[i] + "";
        }
        console.log(ooutput);


    }
       
        is_empty(){
            return this.topindedex === -1;
        }

        size (){
            return this.topindex + 1;
        }
         
        peek(){
            // Correcting statament
            if(this.is_empty()) return null;

            let value = this.data[this.topindex];

            delete this.data[this.topindex];
            this.topindex --;
            return value;
        }

    
    //
    stack1 = new Stack();

    console.log(stack1.is_empty());
    stack1.push(4);
    stack1.push(2);
    stack1.push(3);
    stack1.push(5);
    stack1.push(8);
    console.log("The current size is "+stack1.size());
    console.log("The top element is " +stack1.peek());
    console.log("Top element" + stack.pop() + "is popped the new top element is " + stack.peek());
    console.log("the new stack size is" +Stack1.size());
