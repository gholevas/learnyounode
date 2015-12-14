var sum = 0;
for(i=2;i<process.argv.length;i++){
	sum += +args[i];
}
console.log(sum);