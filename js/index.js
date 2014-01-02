/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        // if (parseFloat(window.device.version) === 7.0) {
        //   document.body.style.marginTop = "20px";
        // }
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        // var parentyearent = document.getyearentById(id);
        // var listeningyearent = parentyearent.querySelector('.listening');
        // var receivedyearent = parentyearent.querySelector('.received');

        // listeningyearent.setAttribute('style', 'display:none;');
        // receivedyearent.setAttribute('style', 'display:block;');

        // console.log('Received Event: ' + id);
    }
};

function toTitleCase(str)
{ if(str)
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
                                                $(window).scrollLeft()) + "px");
    return this;
};

Number.prototype.formatMoney = function(c, d, t){
var n = this, 
    c = isNaN(c = Math.abs(c)) ? 2 : c, 
    d = d == undefined ? "." : d, 
    t = t == undefined ? "," : t, 
    s = n < 0 ? "-" : "", 
    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };

 function hide_all() {
    $('#btnBack').hide();
    $('#btnFinish').hide();
    $('#navbar').hide();
    $('.spinner_index').hide();
    $('#index_content').hide();
    $('#feedback1_content').hide();
    $('#feedback2_content').hide();
    $('#finish_content').hide();
 }


var selected_feedback1_val;
var selected_feedback2_val;
var selected_feedback3_val;
var selected_feedback_chk;
var selected_feedback_other;


var step_back = function() {};

var current_step = function() {};

show_feedback_1();

function show_feedback_1(){
    hide_all();
    $('#feedback1_content').html('');
    $('#feedback2_content').html('');
    $('#finish_content').html('');

    selected_feedback1_val = '';
    selected_feedback2_val = '';
    selected_feedback3_val = '';
    selected_feedback_chk = '';
    selected_feedback_other = '';


    var results_div='<div class="nexus_content_container">';
    results_div +='<div style="width: 640px; margin: auto;">';
    results_div +='<div id="first_screen" style="display: block;">';
    results_div +='<div class="overall_header_container">How was your meal?</div>';
    results_div +='<div class="default_container overall_answer_container">';
    results_div +='<a class="smile_container smile_container_first" href="javascript:show_feedback_2(4)">';
    results_div +='<img class="smile_image" src="img/awesome.png">';
    results_div +='<div class="smile_text"> awesome </div>';
    results_div +='</a>';
    results_div +='<a class="smile_container" href="javascript:show_feedback_2(3)">';
    results_div +='<img class="smile_image" src="img/good.png">';
    results_div +='<div class="smile_text"> good </div>';
    results_div +='</a>';
    results_div +='<a class="smile_container" href="javascript:show_feedback_2(2)">';
    results_div +='<img class="smile_image" src="img/medium.png">';
    results_div +='<div class="smile_text"> average </div>';
    results_div +='</a>';
    results_div +='<a class="smile_container" href="javascript:show_feedback_2(1)">';
    results_div +='<img class="smile_image" src="img/bad.png">';
    results_div +='<div class="smile_text"> bad </div>';
    results_div +='</a>';
    results_div +='<div style="clear: both;"> </div>';
    results_div +='</div>';
    results_div +='</div>';
    results_div +='</div>';
    results_div +='</div>';

    $('#feedback1_content').show();
    $('#feedback1_content').html(results_div);
}

function show_feedback_2(feedback1_val){
    hide_all();
    selected_feedback1_val = feedback1_val;

    $('#btnBack').show();
    $('#btnFinish').show();

    step_back = show_feedback_1;
    var results_div = '';
    // alert(selected_feedback1_val);
    if(selected_feedback1_val==4 || selected_feedback1_val==3){
        results_div += '<div class="default_container smile_rating_container">';
        results_div += '<div class="smile_rating_text">';
        results_div += 'How would you rate our service?';
        results_div += '</div>';

        results_div += '<div class="smile_rating_options_container">';
        results_div += '<div class="smile_rating_option_container">';                
        results_div += '<div class="smile_rating_option_selected" style="display: none;" id="5"></div>';
        results_div += '<img class="smile_rating_option_image" src="img/awesome.png">';
        results_div += '<div class="smile_rating_option_text"> awesome </div>';
        results_div += '</div>';

        results_div += '<div class="smile_rating_option_container">';
        results_div += '<div class="smile_rating_option_selected" style="display: none;" id="4"></div>';
        results_div += '<img class="smile_rating_option_image" src="img/great.png">';
        results_div += '<div class="smile_rating_option_text"> great </div>';
        results_div += '</div>';

        results_div += '<div class="smile_rating_option_container">';
        results_div += '<div class="smile_rating_option_selected" style="display: none;" id="3"></div>';
        results_div += '<img class="smile_rating_option_image" src="img/good.png">';
        results_div += '<div class="smile_rating_option_text"> good </div>';
        results_div += '</div>';

        results_div += '<div class="smile_rating_option_container">';
        results_div += '<div class="smile_rating_option_selected" style="display: none;" id="2"></div>';
        results_div += '<img class="smile_rating_option_image" src="img/medium.png">';
        results_div += '<div class="smile_rating_option_text"> medium </div>';
        results_div += '</div>';

        results_div += '<div class="smile_rating_option_container">';
        results_div += '<div class="smile_rating_option_selected" style="display: none;" id="1"></div>';
        results_div += '<img class="smile_rating_option_image" src="img/bad.png">';
        results_div += '<div class="smile_rating_option_text"> bad </div>';
        results_div += '</div>';

        results_div += '</div>';
        results_div += '</div>';

        results_div += '<div class="default_container smile_rating_container">';
        results_div += '<div class="smile_rating_text">';
        results_div += 'Would you recommend us to a friend?';
        results_div += '</div>';

        results_div += '<div class="smile_rating_options_container">';

        results_div += '<div class="smile_rating_option_container">';
        results_div += '<div class="smile_rating_option_selected" style="display: none;" id="50"></div>';
        results_div += '<img class="smile_rating_option_image" src="img/awesome.png">';
        results_div += '<div class="smile_rating_option_text"> awesome </div>';
        results_div += '</div>';

        results_div += '<div class="smile_rating_option_container">';
        results_div += '<div class="smile_rating_option_selected" style="display: none;" id="40"></div>';
        results_div += '<img class="smile_rating_option_image" src="img/great.png">';
        results_div += '<div class="smile_rating_option_text"> great </div>';
        results_div += '</div>';

        results_div += '<div class="smile_rating_option_container">';
        results_div += '<div class="smile_rating_option_selected" style="display: none;" id="30"></div>';
        results_div += '<img class="smile_rating_option_image" src="img/good.png">';
        results_div += '<div class="smile_rating_option_text"> good </div>';
        results_div += '</div>';

        results_div += '<div class="smile_rating_option_container">';
        results_div += '<div class="smile_rating_option_selected" style="display: none;" id="20"></div>';
        results_div += '<img class="smile_rating_option_image" src="img/medium.png">';
        results_div += '<div class="smile_rating_option_text"> medium </div>';
        results_div += '</div>';

        results_div += '<div class="smile_rating_option_container">';
        results_div += '<div class="smile_rating_option_selected" style="display: none;" id="10"></div>';
        results_div += '<img class="smile_rating_option_image" src="img/bad.png">';
        results_div += '<div class="smile_rating_option_text"> bad </div>';
        results_div += '</div>';

        results_div += '</div>';
        
        results_div += '</div>';
    }
    else{
        results_div += '<div class="content_area" data-role="content">';
        results_div += '<div class="overall_answer overall_answer_'+ selected_feedback1_val +'" style="display: block;">';
        results_div += '<div class="checkbox_question">';
        results_div += 'We sincerely apologize! <br> Please tell us what went wrong.';
        results_div += '</div>';
        results_div += '<div style="clear: both;"> </div>';

        results_div += '<div class="default_container checkbox_item_container">';
        results_div += '<img id="unchk_1" class="checkbox_item_tick_image checkbox_item_tick_image_2_0" src="img/tick.png" style="display: none;"> ';
        results_div += '<img id="chk_1" class="checkbox_item_checkbox_image" src="img/checkbox.png"> ';
        results_div += '<div class="checkbox_item_text"> There was not enough <span class="checkbox_item_keyword">variety </span>in the menu</div>';
        results_div += '<div style="clear: both;"> </div>';
        results_div += '</div>   ';

        results_div += '<div class="default_container checkbox_item_container">';
        results_div += '<img id="unchk_2" class="checkbox_item_tick_image checkbox_item_tick_image_2_1" src="img/tick.png" style="display: none;"> ';
        results_div += '<img id="chk_2" class="checkbox_item_checkbox_image" src="img/checkbox.png"> ';
        results_div += '<div class="checkbox_item_text"> The restaurant should be <span class="checkbox_item_keyword">cleaner</span></div>';
        results_div += '<div style="clear: both;"> </div>';
        results_div += '</div>   ';

        results_div += '<div class="default_container checkbox_item_container">';
        results_div += '<img id="unchk_3" class="checkbox_item_tick_image checkbox_item_tick_image_2_2" src="img/tick.png" style="display: none;"> ';
        results_div += '<img id="chk_3" class="checkbox_item_checkbox_image" src="img/checkbox.png"> ';
        results_div += '<div class="checkbox_item_text"> The <span class="checkbox_item_keyword">neighbourhood </span>is run down</div>';
        results_div += '<div style="clear: both;"> </div>';
        results_div += '</div>   ';

        results_div += '<div class="default_container checkbox_item_container">';
        results_div += '<img id="unchk_4" class="checkbox_item_tick_image checkbox_item_tick_image_2_3" src="img/tick.png" style="display: none;"> ';
        results_div += '<img id="chk_4" class="checkbox_item_checkbox_image" src="img/checkbox.png"> ';
        results_div += '<div class="checkbox_item_text"> Staff should provide a <span class="checkbox_item_keyword">better service </span> and give more information on the dishes</div>';
        results_div += '<div style="clear: both;"> </div>';
        results_div += '</div>   ';
              
        results_div += '<div class="default_container checkbox_item_container">';
        results_div += '<img id="unchk_5" class="checkbox_item_tick_image checkbox_item_tick_image_2_4" src="img/tick.png" style="display: none;"> ';
        results_div += '<img id="chk_4" class="checkbox_item_checkbox_image" src="img/checkbox.png"> ';
        results_div += '<div class="checkbox_item_text"> My meal <span class="checkbox_item_keyword">took forever </span>to be served</div>';
        results_div += '<div style="clear: both;"> </div>';
        results_div += '</div>   ';
              
        results_div += '<div class="default_container checkbox_item_container">';
        results_div += '<img id="unchk_6" class="checkbox_item_tick_image checkbox_item_tick_image_2_5" src="img/tick.png" style="display: none;"> ';
        results_div += '<img id="chk_6" class="checkbox_item_checkbox_image" src="img/checkbox.png"> ';
        results_div += '<div class="checkbox_item_text"> The dishes are <span class="checkbox_item_keyword">overpriced</span></div>';
        results_div += '<div style="clear: both;"> </div>';
        results_div += '</div>   ';
              
        results_div += '<input id="checkbox_other_input_2" class="checkbox_other_input" type="text" style="height: 45px;" placeholder="Other" value="">';
             
        results_div += '<div class="checkbox_finish_container">';
        results_div += '<button class="btn btn-primary btn-large checkbox_finish_button" type="button" onclick="show_finish()">Finish</button>';
        results_div += '</div>';

        results_div += '</div>';
        results_div += '</div>';
    }

    $('#feedback2_content').show();
    $('#feedback2_content').html(results_div);

    $(".smile_rating_option_image").click(function(){
        $(this).closest(".smile_rating_options_container").find(".smile_rating_option_selected").hide();
        $(this).prev("div").show();
        //alert($(".smile_rating_option_selected:visible").length);
        // alert($(".smile_rating_option_selected:visible:eq(0)").attr("id")+" - "+$(".smile_rating_option_selected:visible:eq(1)").attr("id"));
        if($(".smile_rating_option_selected:visible").length == 2){
            if($(".smile_rating_option_selected:visible:eq(0)").attr("id")>10){
                selected_feedback3_val = $(".smile_rating_option_selected:visible:eq(0)").attr("id")/10;
            }
            else{
                selected_feedback2_val = $(".smile_rating_option_selected:visible:eq(0)").attr("id");    
            }
            if($(".smile_rating_option_selected:visible:eq(1)").attr("id")>10){
                selected_feedback3_val = $(".smile_rating_option_selected:visible:eq(1)").attr("id")/10;
            }
            else{
                selected_feedback2_val = $(".smile_rating_option_selected:visible:eq(1)").attr("id");    
            }
            // alert(selected_feedback2_val + ' - ' + selected_feedback3_val);
            show_finish();
        }
    })
    selected_feedback_chk = ",";
    $(".checkbox_item_checkbox_image").click(function(){
        selected_feedback_chk += $(this).attr("id").substr(4) + ",";
        $(this).prev("img").show();
    })
    $(".checkbox_item_tick_image").click(function(){
        selected_feedback_chk = selected_feedback_chk.replace("," + $(this).attr("id").substr(6) + "," , ",");
        $(this).hide();
    })
}

function show_finish(){
    if($('#checkbox_other_input_2').length){     
        selected_feedback_other = $('#checkbox_other_input_2').val();
    }
    hide_all();

    var results_div = '';
    results_div += '<div class="thank_you_container">';
    results_div += '<div style="height: 130px;"></div>';
    results_div += '<div> Thank you! </div>';
    results_div += '<div style="height: 50px;"></div>'
    results_div += '<div class="form-inline">';
    results_div += '<div style="font-size: 20px; margin-bottom: 10px;">I would like to be contacted:</div> ';
    results_div += '<input id="input_contact_info" type="email" class="input-large" style="height: 34px;" placeholder="Email or Phone" value=""> ';
    results_div += '<select id="select_contact_type" style="height: 45px; width: 100px;">';
    results_div += '<option>Email</option>';
    results_div += '<option>Phone</option>';
    results_div += '</select>';
    results_div += '<button class="btn btn-primary btn-large" type="button" onclick="final_submit()" >';
    results_div += 'Submit ';
    results_div += '</button>';
    results_div += '</div>';
    results_div += '</div>';

    $('#finish_content').show();
    $('#finish_content').html(results_div);

}

function final_submit(){
    var params = "";
    if($('#select_contact_type').val()=="Email")
        params = "&email=" + $('#input_contact_info').val();
    else
        params = "&phone=" + $('#input_contact_info').val();

    if(selected_feedback_chk == ",")
        selected_feedback_chk = "";

    $.ajax({
      url: "https://www.getvesseltracker.com/feedback_hero_BSM_dev/send_feedback.php?feedback1=" + selected_feedback1_val 
            + "&feedback2=" + selected_feedback2_val + "&feedback3=" + selected_feedback3_val 
            + "&feedback4=" + selected_feedback_chk + "&feedbackother=" + selected_feedback_other + params,
      datatype: 'json',
      beforeSend: function() {
        $(".spinner_index").css('display','block');
        $(".spinner_index").center();
      },
      success: function(data){        
        show_feedback_1();
      },
      error: function() {        
        alert('Please try again in a minute.');
        $('.spinner_index').hide();
     } 
    });
}