var miaplicacion= angular.module("FerretePinturas",[]);

miaplicacion.controller("controlPinturas",function($scope){
	$scope.datos={};
	$scope.datos.temperatura=0;
	$scope.FahrenheitCentigrados=function(){
		var resultado=0;
		resultado = ($scope.datos.temperatura-32)*5/9
            alert(resultado);
			//alert($scope.datos.temperatura);
		};

	$scope.CentigradosFahrenheit=function(){
        var resultado=0;
		resultado = ($scope.datos.temperatura*9)/5+32
            alert(resultado);
		};		


});