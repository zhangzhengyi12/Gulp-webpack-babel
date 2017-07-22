/**
 * Created by zhang on 7/7/2017.
 */

class Calculate{
    conmputeCount(active,play_name){
        let count = 0;
        const exist = this.play_list.has(play_name);
        const arr = new Array(active).fill("0");
        
        if(exist && play_name.at(0) === "r"){
            count = Calculate.combine(arr,play_name.split('')[1]);
        }
        
        return count;
    }
    
    computeBonus(active,play_name){
    
    }
    
    static combine(arr,size){
        let allResult = [];
        
        (function f(arr,size,result) {
            let arrLen = arr.length;
            if(size > arrLen){
                return;
            }
            if(size === arrLen){
                allResult.push([].concat(result,arr))
            }else{
                for(let i = 0;i<arrLen;i++){
                    let newResult = [].concat(result);
                    newResult.push(arr[i]);
                    
                    if(size === 1){
                        allResult.push(newResult)
                    }
                    else {
                        let newArr = [].concat(arr);
                        newArr.splice(0,i+1);
                        f(newArr,size-1,newResult)
                    }
                }
            }
        })(arr,size,allResult)
    }
}
