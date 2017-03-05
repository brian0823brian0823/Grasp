

var levelColors = ['panel-danger', 'panel-danger', 'panel-warning', 'panel-default', 'panel-success', 'panel-success'];

function addNewReview(courseCategory, data)
{

	var codes = Object.keys(data);
									   if (codes.length % 2 == 1)
									   {
									     var numberOfRows = parseInt(codes.length/2)+1;
									   }
									   else
									   {
										 var numberOfRows = codes.length/2;
									   }
									   var eachRow = '';
										var countCol = 0;
									   for(var i=0; i < codes.length; i++)
									   {
										   var courseData = data[codes[i]];
										   var courseCode = codes[i];
										   var title = courseData.title;
										   var sentiments = courseData.sentimentStatistics;
										   var comments = courseData.comments;
										   var score = (parseInt(sentiments.score*50)+50);
										   var modalId = courseCategory+courseCode+"Modal";
										   
										   if (title !== '???') {
											   
											   var commentElem = "<div>";
											   comments.forEach(function(comment, i){
																console.log(comment, i);
																if (comment.text !== '') {
																	commentElem += "<p class='commentBorder'>"+comment.text+"</p><br>";
																}
											});
											   commentElem += "</div>";
											   console.log(commentElem);
											   
											   // modal
											   var modal = "<div class='modal fade' id='"+modalId+"' tabindex='-1' role='dialog' aria-labelledby='"+modalId+'Title'+" aria-hidden=true><div class='modal-dialog' role='document'><div class='modal-content'><div class='modal-header'><h2 class='modal-title' id='"+modalId+'Title'+"'>Comments</h5><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div><div class='modal-body'>" +commentElem+ "</div><div class='modal-footer'><button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button><button type='button' class='btn btn-primary'>Save changes</button></div></div></div></div>"
											   
											   // row panel
											   if (countCol === 0) {
												   eachRow += "<div class='row'>";
											   }
											   eachRow += modal + "<div class='col-md-6 img-portfolio' data-toggle='modal' data-target='#"+modalId+"'><div class='panel " + levelColors[parseInt(score/20)] + "'><div class='panel-heading'><div class='row'><div class='col-md-9 img-portfolio'><strong>"+ courseCode + ' ' + courseData.title + "</strong></div><div class='col-md-3 img-portfolio'><p>" + comments.length + ' ' + "reviews</p></div></div></div><div class='panel-body'><div class='row'><div class='col-md-9 img-portfolio'>";
											   if (sentiments.grade.count != 0)
												eachRow += "<p>Grade" +'    '+  (parseInt(sentiments.grade.score*50)+50) + "</p>";
											  if (sentiments.professor.count != 0)
												eachRow += "<p>Instructor" +'    '+  (parseInt(sentiments.professor.score*50)+50) + "</p>";
											  if (sentiments.workload.count != 0)
												eachRow += "<p>Workload" +'    '+  (parseInt(sentiments.workload.score*50)+50) + "</p>";
											   
											   eachRow += "</div><div class='col-md-3 img-portfolio'><h1><span class='label label-success'>" + score + "</span></h1></div></div></div></div>";
											   
											   if (countCol === 0) {
												   eachRow += "</div>"
											   };
											
											   
											   // add
											   countCol++;
											   if (countCol == 2) {
												   $("#"+courseCategory).append(eachRow);
												   eachRow = '';
												   countCol = 0;
											   }
										   }
									   }
}


var database = firebase.database();

var CCCHdata = firebase.database().ref('/course/hku/CCCH');
CCCHdata.once("value", function(data){
			  addNewReview('CCCH', data.val());
			  });

var CCGLdata = firebase.database().ref('/course/hku/CCGL');
CCGLdata.on("value", function(data){
			addNewReview('CCGL',data.val());
			});

var CCHUdata = firebase.database().ref('/course/hku/CCHU');
CCHUdata.on("value", function(data){
			addNewReview('CCHU',data.val());
			});

var CCSTdata = firebase.database().ref('/course/hku/CCST');
CCSTdata.on("value", function(data){
			addNewReview('CCST',data.val());
			});




