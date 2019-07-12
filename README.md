# node-exotel-whitelist

In Exotel's system, you need to add your DND client's phone number, this process is called whitelisting. This package will be a great aid in the node environment to whitelist DND numbers. You can check whether a number has been whitelisted or not and also get metadata of a number.

## Getting Started

First you have to create an account in https://my.exotel.com/auth/register, then you will get 'api_key','api_token' and 'sid'.
These informations are most important to call all methods of this package.

### Prerequisites

To install node-exotel-whitelist , you need node.js and npm.

### Installing

Once you have that set-up, just run

```
npm install --save node-exotel-whitelist
```
 in your project directory.


## Usage

node-exotel-whitelist have four methods, and four of them return promise 
and needs a common set of parameters. That is,

```javascript
urlOption = {
    apiKey          : // your exotel api key.
    apiToken        : // your exotel secret api Token.
    sId             : // your sid.
}

//require this package:
var exotel  = require('node-exotel-whitelist');

```
**actual responses from exotel are in XML, but in this package [xml-js](https://www.npmjs.com/package/xml-js)
    have been used to convert those XML response in JSON.

1. whiteListDetails : using it, one can check whether a number is whitelisted or not.
                      it needs two parameters, 'urlOption','phoneNumber'.  

```javascript
    var details = exotel.whiteListDetails(urlOption, phoneNumber)
    details.then((response) => { // since it's return promise
        console.log(response)
    }).catch((err) => {
        console.error(err)
    }) 
```

2. whiteListANumber : this one is for whitelist a number.
                      it recieves two parameters, 'urlOption' and 'numberInfo'

```javascript
    let numberInfo = {
        VirtualNumber   : // after registration in exotel, you get a virutal number;
        Number          : // that number you want to whitelist;
    }
    var whitelisted     = exotel.whiteListANumber(urlOption, numberInfo);
    
```       

3. removeFromNumber : this one delete a list of whitelisted number, 
                      recieves two parameters, 'urlOption' and 'arrayOfPhone'.
  
```javascript
    let arrayOfPhone = ['898XXXXXX2','7686XXXX21'];
    let removed      = exotel.removeFromWhiteList(urlOption,arrayOfPhone);

```
4. numberMetaData  : this one provides meta data about a phone number
                    ( Telecom Circle, Telecom Circle Name, Number Type
                     Whether the number belongs to DND or not)
                    recieves two parameters, 'urlOption' and 'phoneNumber'. 
```javascript
    let phoneNumber = '898XXXXX20';
    let metaData = exotel.numberMetaData(urlOption, phoneNumber)

```
*** All methods of this package returns Promise.

## Authors

* **Subha Chandra Das** - [SubhaChandraDas](https://github.com/SubhaChandraDas)

## License

This project is licensed under the MIT License.

