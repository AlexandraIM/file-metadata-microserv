// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  
  $('form').submit(function(e){
    e.preventDefault();
    var file = $('#file').get(0).files[0];
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      type: "POST",
      url: "../api/file",
      data: formData,
      cache: false,
		  processData: false,
		  contentType: false,
      error: function (jXhr, status) {
			  alert('error: ' + status);
		  },
      success: function(data){
        alert('file size: ' + data.size);
        $('#file').val('');
      }
    })
  });

});
