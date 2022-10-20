//Given an object with the following layout (it's a linked list, for those who know what that is):
//I want you to write a function that takes this object as input, and sums all of the values
//of itself and all the nested objects, and return that number.
//Each object's "next" property may be another object of the same format, or it may be null.
//Your function should be able to handle any amount of nexted objects (any size of linked list).

obj = {
    value: 6,
    next: {
        value: 5,
        next: {
            value: 0,
            next: {
                value: 7,
                next: null
            }
        }
    }
}

function nestedObj(obj) {
	let currObj = obj
	let result = 0
	while (currObj !== null) {
		result += currObj.value
		currObj = currObj.next
	}
	return result
}

console.log((nestedObj(obj)))

//your function should return 18 for this object

//Bonus: solve this using recursion