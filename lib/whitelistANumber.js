let axios   = require('axios');
let convert = require('xml-js');
const formUrlEncoded = x =>
   Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')

function whiteListANumber(urlOption,postData){
    let url             = '';
    let your_api_key    = urlOption.apiKey;
    let your_api_token  = urlOption.apiToken;
    let your_sid        = urlOption.sID;

    let postParam = {
        VirtualNumber   : postData.virtualNumber,
        Number          : postData.phoneNumber,
        Language        : 'en'    
    }

    url = `https://${your_api_key}:${your_api_token}@api.exotel.com/v1/Accounts/${your_sid}/CustomerWhitelist/`

    
    return new Promise(function(resolve, reject) {
            axios({
                method: 'post',
                url: url,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                data: formUrlEncoded(postParam)
            }).then(response => {
                    let jsonResponse = convert.xml2json(response.data, {compact: true, spaces: 4});
                    console.log(jsonResponse)
                    resolve(jsonResponse);
            }).catch(error => {
                    console.error('error',error);
                    reject(error);
            })
       })
}
module.exports = whiteListANumber;