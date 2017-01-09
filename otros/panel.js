var panel = (function () {

    //var urlWidget = "http://api.mixxertv.com/api/v1/panel/tables/6?company_id=22";

    var data = [];
    var apiUrl = "";
    var ajaxInterval = null;
    var moveInterval = null;
    var fadeInterval = null;


    var renderWidgetWithData = function() {

        $(".mx-panel").children().remove();
        _.templateSettings = {
          interpolate: /\{\{\=(.+?)\}\}/g,
          evaluate: /\{\{(.+?)\}\}/g
          };        
         
            
        try {            
            $(".mx-panel").empty();   
            var dayFormat = 'DD-MM-YYYY';
            var today = moment().format(dayFormat),
                filteredData = _.where(data, {fecha: today}),

                tmplList = _.template( $('#tmpl').html() );

            $('.mx-panel').append( tmplList({ list: _.where(filteredData) }) );            

            }
            catch (err) {
                // logger.error(err);
            }
    }

    function renderWidget(){
        apiUrl = $('.mx-panel').first().data('url');
        ajaxCall();
        ajaxInterval = setInterval(function () {
            ajaxCall();            
        }, 60*1000);
    }

    function stopWidget(){
        if( ajaxInterval != null) clearInterval(ajaxInterval);
    }

    function ajaxCall(){

        $.ajax({
            type: "GET",  
            url: apiUrl,
            success: function(jsonData){
                data = jsonData;
                renderWidgetWithData();
                animateWidget();
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                try {
                    //logger.error("Status: " + textStatus);
                    //logger.error("Error: " + errorThrown);
                }
                catch ( err ) {                        
                    console.log("Status: " + textStatus);
                    console.log("Error: " + errorThrown);
                }
            }
        });

    }

    function animateWidget() {

        if ($(".mx-panel .element li:only-child" ).parent().removeClass("element").addClass("element-single") ); 

          var ticker = $('.mx-panel ul.element');
          ticker.children('li:first').show().siblings().hide();

          setInterval(function() {
            ticker.find('li:visible').fadeOut(4000, function() {
              $(this).appendTo(ticker);
              ticker.children('li:first').fadeIn(4000);
            });
          },15000);
        }
    
    var _public = {
      renderWidget: renderWidget,
      stopWidget: stopWidget      
    };

    return _public;

})();

panel.renderWidget();



/*Window Size*/
var windowWidth = $(window).width(); //retrieve current window width
var windowHeight = $(window).height(); //retrieve current window height

/*Widget Size*/
var myContainer = $(".mx-panel").parent();
var widgetWidth = myContainer.width();
var widgetHeight = myContainer.height();

/*TV orientatión*/
function setTVAspect(){
  if(windowWidth > widgetHeight){
      $("body").addClass("tvLandscape");
    } else{
      $("body").addClass("tvPortrait");
    }
};


/*Widget Orientation*/
function setAspect(container){
  if(widgetWidth > widgetHeight){
      container.addClass("landscape");
    } else{
      container.addClass("portrait");
    }
};


// Scale Landscape
function setScale(container){

  if (widgetWidth >= (1920 / 4) && widgetHeight <= (1080 / 6) ) {
    container.addClass("widget-marquee");
  }

  else if (widgetWidth <= (1920 / 4) && widgetHeight <= (1080 / 4) ) {
    container.addClass("widget-sm");
  }

  else if(widgetWidth <= (1920 / 4) || widgetHeight <= (1080 / 3) ){
    container.addClass("widget-md");
  } 

  else if (widgetWidth <= (1920 / 2) || widgetHeight <= (1080 / 2) ) {
    container.addClass("widget-lg");
  }

  else{
    container.addClass("widget-xl");
  }
};

setTVAspect();
setAspect(myContainer);
setScale(myContainer);  



