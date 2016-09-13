var app= angular.module("FerreteFacturacion",[]);

app.controller("controlFacturacion",function($scope){

		$scope.datos={};
        $scope.mensajeRespuesta="sin rta";
		//$scope.datos.precioUno="111";

		$scope.sumar=function(dato1, dato2, dato3){
		$scope.mensajeRespuesta=(parseInt(dato1)+parseInt(dato2)+parseInt(dato3));
        alert($scope.mensajeRespuesta);
		};


		//$scope.datos.precioDos="222";
		$scope.promedio=function(){

			alert("promedio");
		};		


		//$scope.datos.PrecioTres="333";
		$scope.precioFinal=function(){

			alert("precioFinal");
		};				

});