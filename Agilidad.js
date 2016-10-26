var app= angular.module("Agilidad",[]);

app.controller("controlAgilidad",function($scope){
$scope.datos={}; //creo el objeto datos


$scope.datos.Numero1=Math.floor((Math.random() * 10) + 1);
$scope.datos.Signo='+';
$scope.datos.Numero2=Math.floor((Math.random() * 10) + 1);

$scope.datos.NumSigno=Math.floor((Math.random() * 3) + 1);

$scope.datos.resultado="";



switch ($scope.datos.NumSigno) {
    case 1:
            $scope.datos.Signo='+';
            $scope.datos.resultado=$scope.datos.Numero1 + $scope.datos.Numero2
            break;
    case 2:
            $scope.datos.Signo='-';            
            $scope.datos.resultado=$scope.datos.Numero1 - $scope.datos.Numero2
            break;            
    case 3:
            $scope.datos.Signo='*';            
            $scope.datos.resultado=$scope.datos.Numero1 * $scope.datos.Numero2
            break;    

}
console.info($scope.datos);            

}); //Fin control.-