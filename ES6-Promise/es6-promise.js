const timeout = ms => new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve();
	}, ms);
});

const ajax1 = () => timeout(2000).then(() => {
	console.log('1');
	return 1;
});

const ajax2 = () => timeout(1000).then(() => {
	console.log('2');
	return 2;
});

const ajax3 = () => timeout(2000).then(() => {
	console.log('3');
	return 3;
});

const mergePromise = ajaxArray => {
	var data = [];
	var sequence = Promise.resolve();
	ajaxArray.forEach(item => {
		sequence = sequence.then(item).then(res => {
			console.log(item, sequence);
			data.push(res);
			console.log(data);
			return data;
		})
	});
	return sequence;
};

mergePromise([ajax1, ajax2, ajax3]).then(data => {
	console.log('done');
	console.log(data); // data 为 [1, 2, 3]
});

// 1
// 2
// 3
// done
// [1, 2, 3]