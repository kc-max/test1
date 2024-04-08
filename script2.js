$(document).ready(function() {
  
  $(".dropdown-toggle").dropdown();
  function sleepFor(sleepDuration){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ 
        /* Do nothing */ 
    }
  }

  // -----------------Sample Size Calculator tab ----------------------
 // -----------------Sample Size Calculator tab ----------------------

 $("button[id='run-sample-size']").click(function (event) {

  event.preventDefault();
  $("#output").html("")
  $("#response").html("")
  var formData = {
  alternative_opt: $('#alternative').val() ,//,
  plotSample: $('#plot_sample').is(':checked') , 
  multiple_testing_adjust_val:$( "#bonferroni" ).val(),
  numberOfGroups: $("#number_of_groups").val(),
  confidenceLevel: $("#confidence_level").val(),
  power: $("#power").val(),
  baselineConversion: $("#baseline_conv_rate").val(),
  minDetectableRate: $("#detectable_effect").val(),
  dataAllocation: $("#data_allocation").val()
  };
  console.log(formData)
  $.ajax({
  type: "POST",
  timeout: 900000,
  url: "/calculate_conversion",
  dataType : "json",
  accept: "text/html",
  contentType: "application/json",
  data : JSON.stringify(formData),
  success: function(response) {
      text = response.text_output
      
      $("#textoutput").html("")

      text.forEach(element => {
          $("#output").append($("<li>").html(element));
      });

      $("#textoutput").html(response.text)

      if (response.graph != undefined ){
          $("#response").html("<img src='data:image/png;base64,"+ response.graph + "'/>")
      }
          
  },
  error: function(xhr, status, error) {
          $("#response").html(xhr.responseText)
          
          $("#textoutput").html(status + "<br>" + xhr.responseText)
  }
  
  });

});


// Sample size continuous metric --------
$("button[id='run-continuous-metric']").click(function (event) {

    event.preventDefault();
    $("#output").html("")
    $("#response").html("")
    var formData = {
    alternative_opt: $('#alternative').val() ,//,
    plotSample: $('#plot_sample').is(':checked') , //$("#plot_sample:checked").val(),
    multiple_testing_adjust_val:$( "#bonferroni" ).val(),
    numberOfGroups: $("#number_of_groups").val(),
    confidenceLevel: $("#confidence_level").val(),
    power: $("#power").val(),
    AvgVolume: $("#avg_volume").val(),
    StdVolume: $("#std_volume").val(),
    minDetectableRate: $("#detectable_effect").val(),
    dataAllocation: $("#data_allocation").val()
    };
    console.log(formData)
    $.ajax({
    type: "POST",
    timeout: 900000,
    url: "/calculate_continuous_metric",
    dataType : "json",
    accept: "text/html",
    contentType: "application/json",
    data : JSON.stringify(formData),
    success: function(response) {
       
        text = response.text_output
        $("#textoutput").html("")
        text.forEach(element => {
            $("#output").append($("<li>").html(element));
        });
        $("#textoutput").html(response.text)
        if (response.graph != undefined ){
            $("#response").html("<img src='data:image/png;base64,"+ response.graph + "'/>")
        }
            
    },
    error: function(xhr, status, error) {
            $("#response").html(xhr.responseText)
            $("#textoutput").html(status + "<br>" + xhr.responseText)
    }
    
    });

});



// Sample size ratio metric --------
$("button[id='run-ratio-metric']").click(function (event) {

event.preventDefault();
$("#output").html("")
$("#response").html("")
var formData = {
alternative_opt: $('#alternative').val() ,//,
plotSample: $('#plot_sample').is(':checked') , //$("#plot_sample:checked").val(),
multiple_testing_adjust_val:$( "#bonferroni" ).val(),
numberOfGroups: $("#number_of_groups").val(),
confidenceLevel: $("#confidence_level").val(),
power: $("#power").val(),
AvgVolumeX: $("#avg_volumeX").val(),
StdVolumeX: $("#std_volumeX").val(),
AvgVolumeY: $("#avg_volumeY").val(),
StdVolumeY: $("#std_volumeY").val(),
CorrXY: $("#corrXY").val(),
minDetectableRate: $("#detectable_effect").val(),
dataAllocation: $("#data_allocation").val()
};
console.log(formData)
$.ajax({
type: "POST",
timeout: 900000,
url: "/ratio_metrics",
dataType : "json",
accept: "text/html",
contentType: "application/json",
data : JSON.stringify(formData),
success: function(response) {
    text = response.text_output
    $("#textoutput").html("")
    text.forEach(element => {
        $("#output").append($("<li>").html(element));
    });
    $("#textoutput").html(response.text)
    if (response.graph != undefined ){
        $("#response").html("<img src='data:image/png;base64,"+ response.graph + "'/>")
    }
        
},
error: function(xhr, status, error) {
    $("#response").html('ERROR')
        $("#response").html(xhr.responseText)
        $("#textoutput").html(status + "<br>" + xhr.responseText)
}

});

});

// Sample size switchback --------
$("button[id='run-switchback']").click(function (event) {

    event.preventDefault();
    $("#output").html("")
    $("#response").html("")
    var formData = {
    alternative_opt: $('#alternative').val() ,//,
    plotSample: $('#plot_sample').is(':checked') , //$("#plot_sample:checked").val(),
    multiple_testing_adjust_val:$( "#bonferroni" ).val(),
    numberOfGroups: $("#number_of_groups").val(),
    confidenceLevel: $("#confidence_level").val(),
    power: $("#power").val(),
    AvgVolumeC: $("#avg_volumeC").val(),
    StdVolumeC: $("#std_volumeC").val(),
    AvgVolumeU: $("#avg_volumeU").val(),
    StdVolumeU: $("#std_volumeU").val(),
    CorrCU: $("#corrCU").val(),
    minDetectableRate: $("#detectable_effect").val(),
    dataAllocation: $("#data_allocation").val()
    };
    console.log(formData)
    $.ajax({
    type: "POST",
    timeout: 900000,
    url: "/calculate_switchback",
    dataType : "json",
    accept: "text/html",
    contentType: "application/json",
    data : JSON.stringify(formData),
    success: function(response) {
        text = response.text_output
        $("#textoutput").html("")
        text.forEach(element => {
            $("#output").append($("<li>").html(element));
        });
        $("#textoutput").html(response.text)
        if (response.graph != undefined ){
            $("#response").html("<img src='data:image/png;base64,"+ response.graph + "'/>")
        }
            
    },
    error: function(xhr, status, error) {
        $("#response").html('ERROR')
            $("#response").html(xhr.responseText)
            $("#textoutput").html(status + "<br>" + xhr.responseText)
    }
    
    });
    
});

// ---------END --------Sample Size Calculator tab ----------------------
// -----------------Test statistics tab  ----------------------



});
