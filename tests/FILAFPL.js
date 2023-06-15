
var request = require('request');

var url = "###https://api.faceit.com/queue/v2/player###";
var headers = {
"Content-Type": "application/json",
"Authorization": "Bearer #"
};

var data = {
"entityId": "#c1686bfd-3737-4e61-93b8-474b4e48d059#",
"entityType": "hub",
"leaderId": "f4f8db79-0e8a-4a12-a2f0-fee9537219e7",
"playerId": "f4f8db79-0e8a-4a12-a2f0-fee9537219e7",
"playerType": "solo",
"userIds": ["f4f8db79-0e8a-4a12-a2f0-fee9537219e7"],
"0": "f4f8db79-0e8a-4a12-a2f0-fee9537219e7"
};

var options = {
url: url,
headers: headers,
body: JSON.stringify(data)
};

request.post(options, function(error, response, body) {
if (!error && response.statusCode == 200) {
    console.log(response.statusCode);
    console.log(JSON.parse(body));
} else {
    console.log(response.statusCode);
    console.log(body);
}
});
