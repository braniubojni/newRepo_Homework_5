// N1 Deep copy function
{
	const deepCopy = obj => {
		let newObj = {};
		for(let key in obj){
			let arr = [];
			if(Array.isArray(obj[key])){
				obj[key].forEach(item => arr.push(item))
				newObj[key] = arr;
			} else if(typeof obj[key] !== 'object'){
				newObj[key] = obj[key];
			} else {
				newObj[key] = deepCopy(obj[key]);
			}
		}
		return newObj;
	};
	var a = { a: '1111', b: { a: 2}, c:[1,2,3] };
	var b = deepCopy(a);
	a.b.a = 123

	console.log(b.c.push(5));
	console.log(a);
	console.log(b);
}
// N3
{
	const mapRange2 = (arr,x,y) => {
		arr = arr.slice(arr.indexOf(x),arr.lastIndexOf(y)+1)
		let mapObj = new Map(),
			obj = {},
			dublicates = [],
			temp2 = [],
			numArr = [];

		for(let key of arr){
			if(obj.hasOwnProperty(obj[key])){
				dublicates.push(key)
			}
			obj[key] = key
			mapObj.set(key, `${key}`)
		}
		numArr = Object.keys(obj).map(item => +item)
		temp2 = Object.keys(obj).map(item => +item)

		for(let i in temp2){
			if(dublicates.includes(temp2[i])){
				numArr.splice(numArr.indexOf(temp2[i]), 0, temp2[i])
			}
		}

		return [arr, numArr]
	}
	console.log(mapRange2([-5, 3, 2, 5,3, -9, 6, 3, 11, 6], 2, 6))
}
