const arr = [1, 2, 3, "chandan"]
arr.push(4)
arr.unshift(0)
arr.pop()
arr.shift()

for (const item of arr) {
  console.log(item)
}

// methods, maps, filter, reduce, concat,slice and splice

// worst case time complexity
// objects 
// Charecteristica
// unrodered key value pairt
// "symbols" read this 
// .notation or bracket notation 


const obj = {
  name: "bruce ",
  age: 25,
  "key-there": true,
  sayMyName: function() {
    console.log(this.name)
  }
}


obj.hobby = 'football'
delete obj.hobby
console.log(obj)
console.log(obj.name)
console.log(obj['age']) // . notation does not work here
console.log(obj['key-there'])
console.log(obj)
obj.sayMyName()

// object.keys(),values, enteries()


// set
const set = new Set([1, 2, 3])
set.add(4)
console.log(set.has(4))
set.delete(3)
console.log(set.size)
set.clear() // clears everything

for (const item of set) {
  console.log(item)
}

// maps
// keys and value can be any data type 
// iterable ordered

const map = new Map([['a', 1], ['b', 2]])

map.set('c',3)
console.log(map.has('a'))
map.delete('c')
console.log(map.size)
map.clear()

for (const [key, value] of map) {
  console.log(`${key}:${value}`)
}


console.log("  ")

class Stack{
  constructor(){
    this.items = []
    
  }
  push(element){
    this.items.push(element)    
  }
  pop(){
    return this.items.pop()
  }
  peek(){
    return this.items[this.items.length - 1 ]
  }
  isEmpty(){
    return this.items.length ===0 
  }
  size(){
    return this.items.length
  }
  print(){
    console.log(this.items.toString())
  }
}

const stack = new Stack()
console.log(stack.isEmpty())
stack.push(20)
stack.push(10)
stack.push(30)
console.log(stack.size())
stack.print()

console.log(stack.pop())
console.log(stack.peek())



// Queue 
// Enqueue add element
// Dequeue remove oldest element
// peek() get the front of the ques

class Queue{
  constructor(){ // implemnenting list
    this.items = []
  }
  enqueue(element){
    this.items.push(element)
  }
  dequeue(){
  return this.items.shift() // removes and returns the element so return
    
  }
  isEmpty(){
    return this.items.length ===0
  }
  peek(){
    if(!this.isEmpty()){
      return this.items[0]
    }
    return null
  }
  size(){
    return this.items.length
  }
  print(){
    console.log(this.items.toString())
  }
}


const que = new Queue()
console.log(que.isEmpty())


que.enqueue(10)

que.enqueue(20)

que.enqueue(30)
console.log(que.size())
que.print()


console.log(que.dequeue())
console.log(que.peek())
que.print()
