// Your code here
class Polygon {
    constructor(arr){
        this.arr = arr 

    }
    get countSides(){
        return this.arr.length 
    }

    get perimeter(){
        let sum = 0
        this.arr.forEach(element => {
            sum+=element
        });
        return sum
    }
}

class Triangle extends Polygon{

    get isValid(){
        let value
        if((this.arr[0] + this.arr[1]) < this.arr[2]){
            value =  false 
        }
        else if((this.arr[1]+this.arr[2]) < this.arr[0]){
            value =  false
        }
        else if((this.arr[0]+this.arr[2]) < this.arr[1]){
            value =  false
        }
        else {
            value =  true 
        }
        return value
       
    }
}

class Square extends Polygon {

    get isValid(){
        let a = this.arr[0]
        let value;
        for(let i=1;i<this.arr.length;i++){
            if(a === this.arr[i]){
                value = true
            }
            else {
                value = false 
                break 
            }
        }
        return value 

    }

    get area(){
        return this.arr[0] * this.arr[0]

    }
}