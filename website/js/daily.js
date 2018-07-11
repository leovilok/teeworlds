//main
$(document).ready(function() {
	var currentTime = new Date();
	var month = currentTime.getMonth() +1;
	var day = currentTime.getDate();
	var year = currentTime.getFullYear();
	var filename = "stats_" + year + (month < 10 ? "0" : "") + month + (day < 10 ? "0" : "") + day;
	draw_dashboard(root_dir + "/" + filename);
	setInterval(function() { draw_dashboard(root_dir + "/" + filename, true); }, 5000);
});