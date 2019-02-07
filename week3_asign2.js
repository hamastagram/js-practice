// Write a JavaScript function which will take an array of numbers
// stored and find the second lowest 
// and second greatest numbers, respectively.  
// Sample array : [2,4,1,3,5]
// Expected Output : 2,4

function x(input){

    let min = 1;
    let mincount =0;
    let maxcount =0;
    let max = 1;

        for(const i= 0; i<input.length; i++){
                if(input[i]<input[i]++){
                    min = input[i];

                    if(mincount === 1){
                        min = input[i];
                    }
                    mincount++;
                }
              return min;
        }
          


}

const arr = [2,4,1,3,0];




// second question

function repeated(text, letter){
    let count=0;
        for(texts of text)
        {
            if(texts === letter)
            count++;
        }
        return count;
}

const text = "helloworld";

console.log(repeated(text, 'o'));


