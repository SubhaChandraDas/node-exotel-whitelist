let axios   = require('axios');
let convert = require('xml-js');

function removeFromWhiteList(urlOption,numberArray){
    let url             = '';
    let your_api_key    = urlOption.apiKey;
    let your_api_token  = urlOption.apiToken;
    let your_sid        = urlOption.sID;
    let numberString    = '';

    numberArray.map((o,index) => {
        numberString = numberString+o;
        if(index+1 != numberArray.length){
            numberString = `${numberString},`;
        }
    })

    url = `https://${your_api_key}:${your_api_token}@api.exotel.com/v1/Accounts/${your_sid}/CustomerWhitelist?Number=${numberString}`;
    
    return new Promise(function(resolve, reject) {
            axios({
                method: 'delete',
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
// module.exports = removeFromWhiteList;