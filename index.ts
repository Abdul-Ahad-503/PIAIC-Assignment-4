{   console.log("........................................................................................................");
    console.log("Develop a program that calculates and prints the sum of the first n even numbers using a for loop.")
    console.log("........................................................................................................");
    var n:number = 5;
    var sum:number = 0;
    for(var i = 0; i<=n*2; i+=2){
            sum+=i;
    }
    console.log(`The sum of first ${n} even numbers is:  ${sum}`);
    
}

 
{
    console.log("........................................................................................................");
    console.log("Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.");
    console.log("........................................................................................................");
    var numbers:number[] =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20]
    for(var i =0; i<numbers.length; i++){
        if(numbers[i]%2==0){
            console.log(numbers[i]);
        }   
    }
}



{
    console.log("........................................................................................................");
    console.log("Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones");
    console.log("........................................................................................................");
    var numbers:number[] =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20]
    for(var i =0; i<numbers.length; i++){
        if(numbers[i]%2==0){
            numbers.splice(i,1);
        }   
    }
    console.log(numbers);
    
}


{
    console.log("........................................................................................................");
    console.log("Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.");
    console.log("........................................................................................................");
    function areaOfCircle(r:number){
        return 3.1416*(r**2);
    }

    var radius:number = 4;
    console.log(areaOfCircle(radius));
    
}



{
    console.log("........................................................................................................");
    console.log("Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.");
    console.log("........................................................................................................");
    var grades:number[] =[23,64,26,75,74,85,73,27,93,96,88,56]
    for(var i =0; i<grades.length; i++){
        if(grades[i]<=50){
            grades.splice(i,1);
        }   
    }
    console.log(grades);
}


{
    console.log("........................................................................................................");
    console.log("Write a program that uses a function to find the largest element in an array of numbers.");
    console.log("........................................................................................................");
    function maxNumberOfArray(arr:number[]){
        var max = arr[0];
        for(var i = 0; i<arr.length; i++){
            if(arr[i]>max){
                max = arr[i];
            }
        }
        return max;
    }
    var array:number[] = [1,2,3,4,5,2,5,8,3,9,2]
    console.log(maxNumberOfArray(array))
}