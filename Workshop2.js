var myApp=angular.module('test01', ['ServicesModule']);


myApp.controller('MyController',function($scope,studentmodel){
	var self=this;

	self.student=new studentmodel('John Smith',[]);

	
	self.addAssignment = function(assignment) {
		self.student.addItem(assignment)
		self.assignment = {};
	};
});
