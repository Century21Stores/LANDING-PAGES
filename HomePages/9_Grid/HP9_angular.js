
var app = angular.module('jmrv-hp9', [])

    .directive('myDirective', function () {
        var template = 
        	'<div class="MyDirective" style="display:{{ data.show }};">' +
				'<p class="content-block-content__action content-block-content__action--button">' +
					'<a class="button button--alt{{ data.ctaType }} button--wide button--large" href="{{ data.url }}">{{ data.cta }}</a>'+
				'</p>'+
			'</div>';
        return {
            template: template,
            scope: {
                data: '='
            },
            link: function (scope, element, attrs) {

            }
        };
    })

    .controller('HP9controller', function ($scope) {
        show_CTA_arr= [];
	 	show_CTA_LC = [];
        show_MOB_arr= [];
        show_ctaTYPE_arr= [];        
        for (var i = 1; i <= 9; i++) {
            show_CTA_arr.push(eval("SHOW_CTA"+i))
            show_MOB_arr.push(eval("SHOW_mobile"+i))
            show_ctaTYPE_arr.push(eval("TYPE_CTA"+i))                        
        }
		for (var i = 0; i < show_CTA_arr.length; i++) {
		    show_CTA_LC.push(show_CTA_arr[i].toLowerCase());
		}
		for (var i = 0; i < show_CTA_LC.length; i++) {
			if(show_CTA_LC[i] == "no"){
				show_CTA_LC[i] = "none";
			}
			else{
				show_CTA_LC[i] = "block";
			}		
		}
		for (var i = 0; i < show_MOB_arr.length; i++) {
			if(show_MOB_arr[i] == "0"){
				show_MOB_arr[i] = "jmrv-desktop";
			}
			else{
				show_MOB_arr[i] = show_MOB_arr[i];
			}	
		}
		for (var i = 0; i < show_ctaTYPE_arr.length; i++) {
			if(show_ctaTYPE_arr[i] == "2"){
				show_ctaTYPE_arr[i] = "-inverse";
			}
			else if(show_ctaTYPE_arr[i] == "3"){
				show_ctaTYPE_arr[i] = "-solidWhite";
			}
			else{
				show_ctaTYPE_arr[i] = "";
			}	
		}
		console.log(show_CTA_LC);
		console.log(show_MOB_arr);
		console.log(show_ctaTYPE_arr);		
        	
        $scope.myDirectiveData = [       
                { ctaType: show_ctaTYPE_arr[0], cta: CTA1, url: URL1, show:show_CTA_LC[0]},
                { ctaType: show_ctaTYPE_arr[1], cta: CTA2, url: URL2, show:show_CTA_LC[1]},
                { ctaType: show_ctaTYPE_arr[2], cta: CTA3, url: URL3, show:show_CTA_LC[2]},
                { ctaType: show_ctaTYPE_arr[3], cta: CTA4, url: URL4, show:show_CTA_LC[3]},
                { ctaType: show_ctaTYPE_arr[4], cta: CTA5, url: URL5, show:show_CTA_LC[4]},
                { ctaType: show_ctaTYPE_arr[5], cta: CTA6, url: URL6, show:show_CTA_LC[5]},
                { ctaType: show_ctaTYPE_arr[6], cta: CTA7, url: URL7, show:show_CTA_LC[6]},
                { ctaType: show_ctaTYPE_arr[7], cta: CTA8, url: URL8, show:show_CTA_LC[7]},
                { ctaType: show_ctaTYPE_arr[8], cta: CTA9, url: URL9, show:show_CTA_LC[8]},
            ];
        $scope.myDirectiveDataMOB = [       
                { ctaType: show_ctaTYPE_arr[4], cta: CTA5, url: URL5, show:show_CTA_LC[4]},
            ]; 
		$scope.imagesMOB = [
    		{"background" : "url(" + IMAGE5 + ")",},
    	];
    	                       
		$scope.images = [
    		{"background" : "url(" + IMAGE1 + ")",},
    		{"background" : "url(" + IMAGE2 + ")",},
    		{"background" : "url(" + IMAGE3 + ")",},
    		{"background" : "url(" + IMAGE4 + ")",},
    		{"background" : "url(" + IMAGE5 + ")",},
    		{"background" : "url(" + IMAGE6 + ")",},
    		{"background" : "url(" + IMAGE7 + ")",},
    		{"background" : "url(" + IMAGE8 + ")",},
    		{"background" : "url(" + IMAGE9 + ")",}    		    		    		    		    		    		    		    		
    	];  
    	
	  	$scope.class = [show_MOB_arr[0], show_MOB_arr[1], show_MOB_arr[2], show_MOB_arr[3], show_MOB_arr[4], show_MOB_arr[5], show_MOB_arr[6], show_MOB_arr[7], show_MOB_arr[8]];  

    });

