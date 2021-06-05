// 1) Deep copy function
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
