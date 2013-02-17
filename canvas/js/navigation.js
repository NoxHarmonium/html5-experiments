var navigation = {
	scrollSpeed : 400,
	scrollOffsetY: -50,

	navigateTo: function (id)
	{
		var top;		
		if (id === "")
		{
			top = 0;
		}		
		else
		{
			top = $("#heading_" + id).offset().top + navigation.scrollOffsetY
		}
		$('html, body').animate({
         scrollTop: top
    	 }, navigation.scrollSpeed);
	},
	navigateToHash: function ()
	{
	 	var hash = window.location.hash.slice(1); 
		navigation.navigateTo(hash);
	},
	loadNavList: function (src)
	{		
		$.getJSON(src, function(data) {
			var ddl = $("<li class='dropdown'></li>");
			if (window.location.pathname === data.src)
			{
				ddl.addClass("active");
			}

			var ddlToggle = $("<a class='dropdown-toggle' data-toggle='dropdown'>" + 
				data.title + "<b class='caret'></b></a>");

			var ddlList = $("<ul class='dropdown-menu'>");		
			
			var ddItem = $("<li></li>");
			var ddLink = $("<a></a>");
			ddLink.text("Overview");
			ddLink.prop("href",data.src);
			ddItem.append(ddLink);
			ddlList.append(ddItem);			
			
		  $.each(data.examples, function(key, val) {
				ddItem = $("<li></li>");
				ddLink = $("<a></a>");
				ddLink.text(val.title);
				ddLink.prop("href",data.src + 	"#"+val.id);
				ddItem.append(ddLink);
				ddlList.append(ddItem);
			});

			ddl.append(ddlToggle);		
			ddl.append(ddlList);
			
			$("ul.nav").append(ddl);
		});
	}



};

navigation.loadNavList("js/basic-examples.json");
navigation.loadNavList("js/animation-examples.json");



$(window).bind('hashchange', function () { //detect hash change
       navigation.navigateToHash();
});
