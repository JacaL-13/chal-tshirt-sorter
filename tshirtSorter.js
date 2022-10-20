// Write your solution below:
function tshirtSorter(str) {
	return str.split('').sort().reverse().join('')
}

console.log(tshirtSorter('slsmmsllsmsmlmsls'))

// var str = 'dfj,dsf7lfsd .sdklfj';
// str = str.replace(/[^A-Za-z0-9]/g, ' ');

// console.log(str)

testStr = 'sdoinwenlkweasdhovwnxlkcmwoejasdokl'

console.log(testStr.replace(/^[s\m\l]/g, ''))