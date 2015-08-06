var myApp = angular.module('ServicesModule', []);



myApp.factory('studentmodel',function(){

	function studentmodel( name,assignments) {
		this.name= name;
		this.assignments=assignments;
	}
	studentmodel.prototype.addItem = function (assignment) {
		this.assignments.push(assignment);
		var sum=0;
		
		for (var i = 0; i < this.assignments.length; i++) {
			sum= sum+this.assignments[i].score;
		}

		this.average = sum/this.assignments.length;

		if (this.average <= 100 && this.average >90){
			this.grade='A', 
			this.pass='passed';}
			
		else if(this.average <= 90 && this.average >80)
			{
			this.grade='B',
			this.pass='passed';}
			
		else if(this.average <= 80 && this.average >70)
			{
			this.grade='C',
			this.pass='passed';}
		else 
			{
			this.grade='F',
			this.pass='failed';}
			
	}

	return studentmodel;
})
