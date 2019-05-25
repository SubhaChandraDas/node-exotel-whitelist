let axios   = require('axios');
let convert = require('xml-js');

function numberMetaData(urlOption,number){
    let url             = '';
    let your_api_key    = urlOption.apiKey;
    let your_api_token  = urlOption.apiToken;
    let your_sid        = urlOption.sID;
    let phoneNumber     = number;

    url = `https://${your_api_key}:${your_api_token}@api.exotel.com/v1/Accounts/${your_sid}/Numbers/${phoneNumber}`
    return new Promise(function(resolve, reject) {
            axios({
                method: 'get',
                url: url,
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
module.exports = numberMetaData;