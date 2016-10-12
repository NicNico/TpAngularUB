var app= angular.module("Juego",[]);

app.controller("controlJuego",function($scope){
$scope.datos={}; //creo el objeto datos


$scope.datos.numerosecreto=Math.floor((Math.random() * 100) + 1);
$scope.datos.numero=0;
$scope.datos.contador=0;
	$scope.jugar=function(){


		if($scope.datos.numero == $scope.datos.numerosecreto) 
		{
			switch ($scope.datos.contador) 
			{
    			case 0: 
    				alert("Mentalista Ganó $10Mil");
    				break;
    			case 1: 
    				alert("Suerte");
    				break;    				
    			case 2: 
    				alert("Poca Suerte");
    				break;    				    				
    			case 3: 
    				alert("muchos intentos");
    				break;    				    				    				
    			case 4: 
    				alert("demasiados intentos");
    				break;    				    				    				    				
    			case 5: 
    				alert("muuuchos intentos");
    				break;    				    				    				    				    				
    			default :
    				alert("NO practicaste :( ");

    		}

		}
		else
		{
			$scope.datos.contador ++;

			if($scope.datos.numero < $scope.datos.numerosecreto)
			{
				alert("subi la apuesta");
			}
			else
			{
				alert("Demasiado grande, bajala");
			}


		}//fin jugar=function

   		console.info("Datos", $scope.datos);

	}


});