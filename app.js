
function upvoteGenerator()


{

	var a = prompt("Enter the amount of Upvotes want?")
	var i;
	for (i = 0; i <= a; i++)
	{
		document.getElementById("space").innerHTML += "<span id=\"RxltgH\"><a class=\"TwoStateButton Upvote Answer Button primary_action answer_upvote main_button\" href=\"#\" action_click=\"AnswerUpvote\" action_target=\"{&quot\;aid&quot\;\: 74703830, &quot;type&quot\;\: &quot;answer&quot;}\" id=\"__w2_WUkcOhT_button\">\
		<span class=\"button_text\" id=\"__w2_WUkcOhT_text\">\
		Upvote |\
		</span>\
		\<span class=\"count\" id=\"__w2_WUkcOhT_count_wrapper\"><span id=\"__w2_WUkcOhT_count\">" + " " + "<strong>" + i + "</strong>" + "</span></span>\
		    </a>\
		</span>";
	}

}

