var js_growl = new jsGrowl('js_growl');
var run_once = 0
var now = new Date()
var page_load = -1

/* show tasks not yet recorded, update task found time in hidden field */

function get_latest_task_info() {
  var username = document.getElementById("username").value

  /* FIXME: used the logged in user here instead */
  /* FIXME: don't show events that are older than 40 seconds */

  $.getJSON("/cblr/svc/op/events/user/" + username,
    function(data){$.each(data, function(i,record) {
      var id = record[0];
      var ts = record[1];
      var name = record[2];
      var state = record[3];
      var buf = ""
      var logmsg = " <a href=\"/cobbler_web/eventlog/" + id + "\">(log)</A>";
      if (state == "complete") {
        buf = "Task " + name + " is complete: " + logmsg
      }
      else if (state == "running") {
        buf = "Task " + name + " is running: " + logmsg
      }
      else if (state == "failed") {
        buf = "Task " + name + " has failed: " + logmsg
      }
      else {
        buf = name
      }
      window.status = buf;
      js_growl.addMessage({msg:buf});
    });
  });
}

function hide_rebuild() {
    $("#listitems tbody tr").each(function() {
            var v_tds = $(this).find("td");
            if (v_tds.length >= 7) {
                var v_td_t = v_tds[3].innerHTML.replace(/(^\s*)|(\s*$)/g, "");
                if (v_td_t=="production"){
                    //alert("zhf1:" + $($(v_tds[0]).children()).attr("disabled", "disabled"));
                    $($(v_tds[0]).children()).attr("disabled", "disabled");
                    var v_spans = $(this).find("td span");
                    for (var i=0;i<v_spans.length;i++) {
                        //alert("zhf.test:v_spans:" + v_spans[i].innerHTML);
                        if (v_spans[i].innerHTML=="Rebuild") {
                            //v_spans[i].css("display","none");
                            $(v_spans[i]).hide();
                        }
                    }
                }
            }
        }); 
}

function go_go_gadget() {
    setInterval(get_latest_task_info, 2000)
    try {
       hide_rebuild()
       page_onload()
    } 
    catch (error) {
    }
}

function page_onload() { }
