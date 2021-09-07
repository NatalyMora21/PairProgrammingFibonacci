var obtenerFibonacci = (num) => {

        let fibonacci=[0,1];
        if(num >= 0){
            if (num>1) {
    
                for (let i=0 ; i < num-1; i++){
                    fibonacci.push(fibonacci[i]+fibonacci[i+1])
                }
        
            }
            //Mostrar fibonacci
            if (num==0){
                console.log(fibonacci[0]);
            }
            else {
                fibonacci.forEach(element => {
                    console.log(element)
                    
                });
            }
        }else {
            console.log("Error, digite numero valido ");
        }
}

obtenerFibonacci(-1)