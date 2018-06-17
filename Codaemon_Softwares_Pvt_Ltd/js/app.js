angular
 	.module("myapp", [])
 	.controller("CodaemonController", function($scope,$http,$timeout,$filter) {
    	var thisCtrl = this; 
    	$scope.table_form = false;
    	$scope.codaemonDetails = [];
    	$scope.newArray = [];

    	$scope.showCommonLoadingIcon = function (){
                var color ="rgb(255, 255, 255)";
                var loadingIconTemplate = $('<div />',{id:"loadingmask"}).css({'position':'fixed','top':'0','left':'0','width':'100%','height':'100%','background-color':'rgba(255,255,255,0.8)',
                                                                                'z-index':'100009','overflow':'hidden'});
                var img =$('<img />',{src:"images/loading.gif",id:"imageajaxloader"}).css({'top': "30%",'position': "absolute",'left': "50%",'transform':'translateX(-50%)'});
                loadingIconTemplate.append(img);
                var para = $('<p />').html("Please wait while page is loading...").css({'color':'#111','top':'50%','left':'50%','transform':'translateX(-50%)'
                                                                                                                ,'position':'absolute','font-weight':'900'      
                                                                                                                ,'font-size':'15px'     
                                                                                                                        }); 
                loadingIconTemplate.append(para);
                var body = $('body');

                if (!body.find('#loadingmask').length) { 
                    $('body').append(loadingIconTemplate);
                };
            };
            // remove loading icon from html body
            $scope.removeCommonLoadingIcon = function (){
                var color ="rgb(255, 255, 255)";
                var loadingIconTemplate = $('<div />',{id:"loadingmask"}).css({'position':'fixed','top':'0','left':'0','width':'100%','height':'100%','background-color':'rgba(255,255,255,0.8)',
                                                                                'z-index':'100009','overflow':'hidden'});
                var img =$('<img />',{src:"images/loading.gif",id:"imageajaxloader"}).css({'top': "30%",'position': "absolute",'left': "50%",'transform':'translateX(-50%)'});
                loadingIconTemplate.append(img);
                var para = $('<p />').html("Please wait while page is loading...").css({'color':'#111','top':'50%','left':'50%','transform':'translateX(-50%)'
                                                                                                                ,'position':'absolute','font-weight':'900'      
                                                                                                                ,'font-size':'15px'     
                                                                                                                        }); 
                loadingIconTemplate.append(para);
                var body = $('body');

                setTimeout(function() {
                    $('body').find('#loadingmask').remove();
                },500);
            };


		thisCtrl.getCodaemon = function(){
			$scope.showCommonLoadingIcon();
			var url = '../Codaemon_Softwares_Pvt_Ltd/codaemon_Softwares_Pvt_Ltd_api.php';
			$http
				.get(url,{headers: {
									'Access-Control-Allow-Origin':'*',
									'Access-Control-Allow-Methods':'POST, GET, OPTIONS, DELETE',
									'Access-Control-Allow-Headers':'x-requested-with'
								}
				})
				.success(function(response) {
					$scope.codaemonDetails = response;
					$scope.removeCommonLoadingIcon();
		   	 	})
		    	.error(function(response) {
		        	$scope.error = "An Error has occured while loading posts!";   
		        	$scope.removeCommonLoadingIcon();        
		    	});
		};

		thisCtrl.getCodaemon();
		
		/*$timeout( function(){
            thisCtrl.getBittrex();
        }, 3000 );*/

        $scope.formatDate = function(date) {
	       return moment(date).format('DD-MM-YYYY');
	    };

	    $scope.toggleForm = function(status){
			if($scope.table_form == true)
			{
				if (angular.isDefined(status) && status=='back') 
				{
					thisCtrl.getCodaemon();
				}
				else if (angular.isDefined($scope.newArray) && $scope.newArray.length > 0) 
				{
					$scope.codaemonDetails = [];
					$scope.codaemonDetails = $scope.newArray;
				}
				$scope.table_form = false;
			}
			else
			{
				thisCtrl.getCodaemon();
				$scope.table_form = true;
			}
		}


		$scope.searchDetails = function(formdata){
					$scope.newArray = [];
					$scope.showCommonLoadingIcon();
				angular.forEach($scope.codaemonDetails, function(value)
				{
					if (angular.isDefined(formdata.first_name) && formdata.first_name && angular.isDefined(formdata.last_name) && formdata.last_name)
                	{
                		if(value.first_name === formdata.first_name && value.last_name === formdata.last_name)
						{
							$scope.newArray.push(value);
						}
                	}
					else if (angular.isDefined(formdata.first_name) && formdata.first_name) 
                	{
						if(value.first_name===formdata.first_name)
						{
							$scope.newArray.push(value);
						}
					}
					else if (angular.isDefined(formdata.last_name) && formdata.last_name)
                	{
						if(value.last_name === formdata.last_name)
						{
							$scope.newArray.push(value);
						}
                	}
				});
                $scope.toggleForm();
                $scope.removeCommonLoadingIcon();
            }; //end of filterUsers


            
 });