/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
/*
Add a link that exports board in JSON
*/
//{
    var previous_node = document.getElementById("permission-level");
    if( previous_node ) {
        var re = /(.*\/trello.com\/b\/[^\/]+)\/(.*)$/;
        var url = document.URL;
        var board_url = url.match(re)[1];
        var now = new Date;
        var file_name = now.toISOString() + "-" + url.match(re)[2] + ".json";
        var link = document.createElement("a");
        link.id="json_save";
        link.title = "Save backup for reference";
        link.download = file_name;
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
