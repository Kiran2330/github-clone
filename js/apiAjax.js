// Left panel details
		$.ajax({
            type: "Get",
            dataType: 'JSON',
            url: "https://api.github.com/users/supreetsingh247",
            async: false,
            contentType: "application/json; charset=utf-8",
            success: function (jsonData) {
                $('#userContent').append("<img src="+jsonData['avatar_url']+" />");
                $('#userContent').append("<h1 class='username'>"+jsonData['name']+"</h1>"+"<h5 class='email'>"+jsonData['login']+"</h5>"+"<p class='bio'>"+jsonData['bio']+"</p>"+"<button class="+"btn btn-default"+">"+"Edit bio"+"</button>"+"<hr>"+"<span class='fa fa-users'>" +"</span>"+" <span>"+jsonData['company']+"</span>"+"<br>"+"<span class='fa fa-map-marker'>"+"</span>"+" <span>"+jsonData['location']+"</span>"+"<br>"+"<span class='fa fa-envelope'>"+"</span>"+"<a>"+" supreetsingh247@gmail.com"+"</a>");

            }
 		});
 // Right panel information
 		$.ajax({
            type: "Get",
            dataType: 'JSON',
            url: "https://api.github.com/users/supreetsingh247/repos",
            async: false,
            contentType: "application/json; charset=utf-8",
            success: function (repos) {
                $('.vd-repos').append("<li>"+"<h4>"+repos[7]['name']+"</h4>"+"<span class='fa fa-circle vd-labelDot'>"+"</span>"+"<span class='vd-lang'>"+repos[7]['language']+"</span>"+"<span class='vd-sign'>"+"Updated 20 days ago"+"</span>"+"<hr>"+"</li>");
                $('.vd-repos').append("<li>"+"<h4>"+repos[2]['name']+"</h4>"+"<p class='vd-lang'>"+repos[2]['description']+"</p>"+"<span class='fa fa-circle vd-labelDot'>"+"</span>"+"<span class='vd-lang'>"+repos[2]['language']+"</span>"+"<span class='vd-sign'>"+"Updated 27 days ago"+"</span>"+"<hr>"+"</li>");
                $('.vd-repos').append("<li>"+"<h4>"+repos[6]['name']+"</h4>"+"<p class='vd-lang'>"+repos[6]['description']+"</p>"+"<span class='fa fa-circle vd-labelDot'>"+"</span>"+"<span class='vd-lang'>"+repos[6]['language']+"</span>"+"<span class='vd-sign'>"+"Updated on 9 feb"+"</span>"+"<hr>"+"</li>");
                $('.vd-repos').append("<li>"+"<h4>"+repos[9]['name']+"</h4>"+"<span class='fa fa-circle vd-labelDot'>"+"</span>"+"<span class='vd-lang'>"+repos[9]['language']+"</span>"+"<span class='vd-sign'>"+"Updated on 30 Jan"+"</span>"+"<hr>"+"</li>");
            }
 		});



function searchRepo() {
    var input, filter, ul, li, h4, i;
    input = document.getElementById('repository');
    filter = input.value.toUpperCase();
    ul = document.getElementById("selectedRepo");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        h4 = li[i].getElementsByTagName("h4")[0];
        if (h4.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function filterRepo(){
    var filter, select, option, h4, i;
    input = document.getElementById('repoType');
    filter = input.value.toUpperCase();
    ul = document.getElementById("selectedRepo");
    li = ul.getElementsByTagName('li');
    
    for (i = 0; i < li.length; i++) {
        h4 = li[i].getElementsByTagName("h4")[0];
        if (h4.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}