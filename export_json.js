/*
Add a link that exports board in JSON
*/
//{
    var previous_node = document.getElementById("permission-level");
    if( previous_node ) {
        var re = /(.*\/trello.com\/b\/[^\/]+)/;
        var url = document.URL;
        var board_url = url.match(re)[0];
        var link = document.createElement("a");
        link.id="json_save";
        link.title = "Save backup for reference";
        // style same as other buttons
        link.classList = ["board-header-btn"];
        // but without padding for icon
        link.style.paddingLeft = "0px";
        // link directly to json export
        link.href= board_url + ".json";
        link.innerHTML = "JSON";
        previous_node.parentElement.appendChild(link);
    }
//}
