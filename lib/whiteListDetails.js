let axios   = require('axios');
let convert = require('xml-js');

function whiteListDetails(urlOption,number){
    let url             = '';
    let your_api_key    = urlOption.apiKey;
    let your_api_token  = urlOption.apiToken;
    let your_sid        = urlOption.sID;
    let phoneNumber     = number;

    url = `https://${your_api_key}:${your_api_token}@api.exotel.com/v1/Accounts/${your_sid}/CustomerWhitelist/${phoneNumber}`;
    return new Promise(function(resolve, reject) {
            axios({
                method: 'get',
                url: url,
            }).then(response => {
                    let jsonResponse = convert.xml2json(response.data, {compact: true, spaces: 4});
                    resolve(jsonResponse);
            }).catch(error => {
                    reject(error);
            })
       })
}
module.exports = whiteListDetails;