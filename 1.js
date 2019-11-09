//作业1
const user = {name: "john",year: 30};
let {name:name,year:age,isAdmin:isAdmin}=user
if(isAdmin==undefined){
isAdmin='false'}
console.log(name);
console.log(age);
console.log(isAdmin);

//作业2
//方法1
const sumTo = (n) => {
    let sum = 0;
    for(let i=1;i<=n;i++){
    sum = sum + i   }
return sum
}

console.log(sumTo(100));
//方法2
const sumTo = (n) => {
    if (n>1){
             return n + sumTo(n-1);
           }
   else{ return 1;}
   }
   
   console.log(sumTo(100));
//方法3
const sumTo = (n) => 
{ return n+n*(n-1)/2}

console.log(sumTo(100));

//作业3
const accumulator = new Accumulator(1) 
function Accumulator(startingValue){
    this.value = startingValue
    this.read = function(n){
        this.value = this.value + n
    }
}
accumulator.read(2); 
accumulator.read(3); 
console.log(accumulator.value); 

//作业4
function deepClone(target, map = new WeakMap()) {
	 if (typeof target === 'object') {
        let cloneTarget = Array.isArray(target) ? [] : {};//考虑为数组的时候的问题
		if(map.get(target)) return map.get(target);//检查是否有克隆过的对象
		map.set(target, cloneTarget);
		for (let key in target) {
			cloneTarget[key] = deepClone(target[key], map); // 递归
		}
		return cloneTarget;
	} else {
		return target;
    }
}