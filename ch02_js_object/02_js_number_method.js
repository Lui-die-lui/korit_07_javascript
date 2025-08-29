let x = 10.656;
console.log(x.toFixed(0)); // 11
console.log(x.toFixed(2)); // 10.66
console.log(x.toFixed(5)); // 10.65600

// toPrecision()
console.log(x.toPrecision()); 
console.log(x.toPrecision(2)); 
console.log(x.toPrecision(4));

// parseInt()

console.log(parseInt('-10')); // -10
parseInt('-12.33'); // 12
parseInt('10'); // 10
parseInt('12.33'); // 12
parseInt('10 20 30'); 
parseInt('10 years');
parseInt('years 10');

