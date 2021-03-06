//defines global variable to hold colours associated with each party
var colours = [
  {'color': '#4EB271'},
  {'color': '#F3514E'},
  {'color': '#297635'},
  {'color': '#61E471'},
  {'color': '#DD92F3'},
  {'color': '#3C7CD9'},
]

//uses jquery to infinately loop through parties and binds them to html element with class 'party'
$(function(){
    var names = [
    	'Fianna F&aacute;il',
      'Labour',
      'Sinn F&eacute;in',
      'the Green Party',
      'everyone else',
      'Fine Gael',
    ],
    i = 0;
    d = 0;
    setInterval(
      function(){
        $('.party').fadeOut(function(){
            $(this).html(names[i=(i+1)%names.length])
                   .css(colours[d=(d+1)%colours.length])
                   .fadeIn();
        });
      },
    3000);
});
