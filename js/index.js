
var generateContact = function()
{
  var vcname = ['Rishav Kumar','Santosh Kumar Shaw','Arnab Podder','Argha Misra','Rudraprasad Mahapatra'
                ,'Prince Mukherjee','Debotri Das','Debparna Kar','Subha Bose','Saurav Payra','Subhramoy Dey' ];
  var desig = ['Registration','Web Development','Help Desk','Volunteer Co-ordinator','Requirements','Finance',
              'Requirements','Help Desk','Registration','Robotics','Robotics'];
  var number = ['919883823668','918583055132','918724826524','917551005794','918016029547','919614729651',
              '919051768795','918017774439','917602555378','919593314688','918513964314'];
  var fblinks = ['https://www.facebook.com/rishav.raj.336717',
                  'https://www.facebook.com/devsks',
                  'https://www.facebook.com/profile.php?id=100008731904717',  
                  'https://www.facebook.com/argha.misra.5',
                  'https://www.facebook.com/profile.php?id=100002269062121',
                  'https://www.facebook.com/profile.php?id=100006128929455',
                  'https://www.facebook.com/profile.php?id=100008147474724',
                  'https://www.facebook.com/debparna.kar.5',
                  'https://www.facebook.com/shubho.bose',
                  'https://www.facebook.com/profile.php?id=100004862118317',
                  'https://www.facebook.com/subhramoy.dey'
              ];

  var str="";
  for(var i=2;i<=10;++i)
  {
    str+='<div class="inner-div">\
          <div class="front">\
      <div class="front__bkg-photo"></div>\
      <div style="position: relative;\
      top: -72px;\
      height: 150px;\
      width: 150px;\
      margin: 0 auto;\
      border-radius: 50%;\
      border: 3px solid #f1faee;\
      background: url(\'images/'+vcname[i]+'.jpg\') no-repeat;\
      background-size: contain;\
      -webkit-backface-visibility: hidden;\
        backface-visibility: hidden;\
      overflow: hidden;\
      z-index: 3;"></div>\
      <div class="front__text">\
      <h3 class="front__text-header">'+vcname[i]+' <br>\
        <span class="front__text-desc front__text-desc-emphasis">'+desig[i]+'</span>\
      </h3>\
      </div>\
      <div class="front__footer">Hover to Connect</div>\
    </div>\
    <div class="back">\
      <div class="social-media-wrapper">\
      <a href="'+fblinks[i]+'" class="social-icon" target="_blank"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>\
      <a href="https://api.whatsapp.com/send?phone='+number[i]+'" class="social-icon" target="_blank"><i class="fa fa-whatsapp" aria-hidden="true"></i></a>\
      <a onclick="alert(\'Mobile Number: +'+number[i]+'\')" class="social-icon"><i class="fa fa-phone" aria-hidden="true"></i></a>\
      </div>\
    </div></div>';
  }
  $('.outer-div').append(str);

}
$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 3500);
	
});
			
			var value = 0,index=1,value1=0,value3=0;
			var heading=['PIONEER','ROBOTICS','BRAIN STORM','CODE ARENA'];
			
			var head_colors=['#a905ab','#a6d107','#ff5a30','#ecce01'];
			var sub_event=[
							'ENVISAGING THE FUTURE<br>SOAR WITH DRONES<br>THE STARTUP',
							'THE 101<br>FEEL THE THRILL<br>ROBOSALO<br>LINE ON FIRE',
							'NEW-AGE DRAFTER<br>DESIGN SCHEMATICS<br>OPERATION CODING',
							'CODING MASTER<br>IDEATE,DESIGN,LAUNCH<br>CYBER HUNT<br>INITIATE CODE'];
			rot_clock = function()
			{
				if(value > 360)
				{
					value = -360;
					//alert(value);
				}
				else
				
					$(".clockwise").rotate({ animateTo:value});
				value +=9;
			}
			rot_anti_clock = function()
			{
				if(value1 < -360 )
					value1 = 360;
				else
					$(".anti-clockwise").rotate({ animateTo:value1});
				value1 -=5;
			}
			rot_main_console = function()
			{
				
						$(".event_name").css( "color",head_colors[index]);
						$(".event_date").css( "color",head_colors[index]);
						$(".tech").css( "color",head_colors[index]);
						
						$(".event_name").text(heading[index]);
						$(".event_brief").html(sub_event[index]);
						index = (index+1)%4;
						value3+=90;
						$("#img").rotate({ animateTo:value3});
			}
			setInterval(function()
    {
				rot_anti_clock();
				rot_clock();
    },250);
    
    setInterval(function()
    {
			rot_main_console();
    },3000);
  generateContact();
