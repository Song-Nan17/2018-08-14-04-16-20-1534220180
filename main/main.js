module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maximum()}
o) 元素数量 = ${sequence.length()}
o) 平均值 = ${sequence.average()}`);
};

class Sequence {
  constructor(input) {
     this.input = input;// Write your code here
  }

  minimum() {
    var min = this.input[0];
	for (var i = 1;i < this.input.length;i++) {
		if (this.input[i] < min){
			min = this.input[i];
		}
	}
	return min;// Write your code here
  }

  maximum() {
    var max = this.input[0];
	for (var i = 1;i < this.input.length;i++) {
		if (this.input[i] > max){
			max = this.input[i];
		}
	}
	return max;// Write your code here
  }
  
  length() {
	  var i = this.input.length;
	  return i;
  }
  
  average() {
	  var s = 0;
	  for (var i = 0;i < this.input.length;i++) {
		  s = s + this.input[i];
	  }
	  var x = this.input.length;
	  var ave = s/x;
	  ave = ave.toFixed(2);
	  return ave;
  }
}
