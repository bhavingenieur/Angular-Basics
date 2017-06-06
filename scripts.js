

var app = angular.module('app1',['ngAnimate']);

app.service("initserv", function(){
  this.arr = [
    {name: "Brad Withings",
    age:24,
    address: "8, Ingram Avenue, London, England"
    },{
      name: "Rob Jones",
      age:25,
      address: "24, Baker St, London, England"
    },{
      name: "Chris Taskman",
      age:45,
      address:"3, Muvicci St, Italy, Rome"
    }];
});

var MainCtrl = function($scope,initserv){
  $scope.msg = "hello world";
  $scope.arr=initserv.arr;
  $scope.removelist= function(index){$scope.arr.splice(index,1);};
  
};

app.controller("MainCtrl", MainCtrl);