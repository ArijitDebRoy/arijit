import moment from 'moment';

// All kind of validations

const Validator = {

    /**
     * @purpose: email validation
     * @author: Arijit Deb Roy
     * @params: data: <string>
     * @return: <boolean>
     */
    email(data) {
        var flag = false;
        if(data.length > 0){
            if (data.match(/^[a-z0-9._%+-]{1,64}@(?:[a-z0-9-]{1,63}\.){1,4}[a-z]{2,5}$/)) {
                flag = true;
            }
        }
        return flag;
    },

    /**
     * @purpose: mobile Number Validation with minimum 6 digit and less than 17 digit
     * @author: Arijit Deb Roy
     * @params: data: <integer>
     * @return: <boolean>
     */
    mobile(data) {
        var flag = false;
        if(data.length > 0){
            if (data.match(/^[0-9]+$/) && data.length >= 6 && data.length <= 17) {
                flag = true;
            }
        }
        return flag
    },

    /**
     * @purpose: plain string validation
     * @author: Arijit Deb Roy
     * @params: s: <string>, l?: <integer>
     * @return: <boolean>
     */
    text(s, l=0) {
        if(s !== null && s !== '' && s !== undefined  && s.trim()!== '' && s.length > l){
            return true;
        }
        else{
            return false;
        }
    },

    spaceCheck(s, l=0) {
        if(s !== null && s !== '' && s !== undefined && s.length > l && s.trim().match(/^[a-zA-Z]*$/)){
            return true;
        }
        else{
            return false;
        }
    },

    /**
     * @purpose: number is whole number or not (does not contain fractional part)
     * @author: Debajit Basu
     * @params: n: <integer>, lowerLimit?: <integer>, uperLimit?: <integer>
     * @return: <boolean>
     */
    positiveNumber(n, lowerLimit = 0, uperLimit = 1000000000) {
        if(n !== '' && n !== null && parseInt(n) > lowerLimit && parseInt(n) < uperLimit){
            return true;
        }
        else{
            return false;
        }
    },

    /**
     * @purpose: number is whole number or not (does not contain fractional part)
     * @author: Debajit Basu
     * @params: n: <integer>
     * @return: <boolean>
     */
    wholeNumber(n){
        let number = n - (Math.floor(n))
        if(number === 0){
            return true
        }else{
            return false
        }
    },

    /**
     * @purpose: check negetive number
     * @author: Debajit Basu
     * @params: n: <integer>
     * @return: <boolean>
     */
    negetiveNumber(n){
        if(n < 0){
            return false
        }else{
            return true
        }
    },

    /**
     * @purpose: number contains fraction or not
     * @author: Debajit Basu
     * @params: n: <integer>
     * @return: <boolean>
     */
    fractionNumber(n){
        let number = n - (Math.floor(n))
        if(number !== 0){
            return true
        }else{
            return false
        }
    },

    /**
     * @purpose: check whether a string contains space or not
     * @author: Debajit Basu
     * @params: value: <string>
     * @return: <boolean>
     */
    strWithSpace(value){
        let val = value.indexOf(' ');
        if(val > -1){
            return true;
        }else{
            return false;
        }
    },

    /**
     * @purpose: check whether a string contains space (with number of spaces)
     * @author: Debajit Basu
     * @params: value: <string>, spaceCount: <integer>
     * @return: <boolean>
     */
    strWithSpaceCount(value, spaceCount){
        let arr = value.split(" ");
        console.log(arr.length -1);
        if(arr.length-1 === spaceCount){
            return true;
        }else{
            return false
        }
    },

    /**
     * @purpose: string without any special charecter
     * @author: Debajit Basu
     * @params: value: <string>
     * @return: <boolean>
     */
    strWithoutSpecialChar(value){
        let char = value.match(/[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/);
        if(char === null){
            return true;
        }else{
            return false;
        }
    },

    /**
     * @purpose: check input is array or not
     * @author: Debajit Basu
     * @params: value: <string>
     * @return: <boolean>
     */
    isArray(value){
        if(Array.isArray(value)){
            return true;
        }else{
            return false;
        }
    },

    /**
     * @purpose: check input is object or not
     * @author: Debajit Basu
     * @params: value: <string>
     * @return: <boolean>
     */
    isObject(value){
        const obj = typeof(value);
        if(obj === "object"){

            if(Array.isArray(value)){
                return false;
            }else{
                return true;
            }

        }else{
            return false;
        }
    },

    /**
     * @purpose: string with any special charecter
     * @author: Debajit Basu
     * @params: value: <string>
     * @return: <boolean>
     */
    strWithSpecialChar(value){
        let char = value.match(/[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/);
        if(char === null){
            return false;
        }else{
            return true;
        }
    },

    /**
     * @purpose: subscription days to string
     * @author: Arijit Deb Roy
     * @params: days: <string>
     * @return: String equivalent
     */
    dayToString(days, daysString = '') {
        try {
            if (days === 0) {
                if (daysString === '') {
                    daysString = "0 day";
                }
                return daysString.trim();
            } else if (days === 36500) {
                return "Lifetime";
            } else if (days >= 1 && days <= 29) {
                if (days === 1) {
                    daysString += " 1 day";
                } else {
                    daysString += ` ${days} days`;
                }
                return this.dayToString(0, daysString);
            } else if (days >= 30 && days <= 364) {
                let month = days / 30;
                let day = days % 30;
                if (parseInt(month) === 1) {
                    daysString += " 1 month";
                } else {
                    daysString += ` ${parseInt(month)} months`;
                }
                return this.dayToString(day, daysString);
            } else if (days >= 365) {
                let year = days / 365;
                let month = days % 365;
                if (parseInt(year) === 1) {
                    daysString += " 1 year";
                } else {
                    daysString += ` ${parseInt(year)} years`;
                }
                return this.dayToString(month, daysString);
            }
        }catch (e) {
            return e.message;
        }
    },

    /**
     * @purpose: nearest whole number
     * @author: Debajit Basu
     * @params: value: <int>
     * @return: <boolean>
     */
    nearestWholeNumber(value){
        let numb = (value + (10 - (value % 10)));
        return parseInt(numb);
    },


    /**
     * @purpose: check strength of a given password
     * @author: Debajit Basu
     * @params: value: <String> , strengthLevel: <String> (week , medium , strong)
     * @return: <boolean>
     */
    passwordStrength(value , strengthLevel){
        //REGEX DESCRIPTION
        //^	The password string will start this way
        // (?=.*[a-z])	The string must contain at least 1 lowercase alphabetical character
        // (?=.*[A-Z])	The string must contain at least 1 uppercase alphabetical character
        // (?=.*[0-9])	The string must contain at least 1 numeric character
        // (?=.[!@#\$%\^&])	The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
        // (?=.{8,})	The string must be eight characters or longer
        var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])))(?=.{6,})").test(value);
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})").test(value);
        var weekRegex = new RegExp("^(?=.{6,})").test(value);

        switch(strengthLevel){
        case 'week':
            return weekRegex;
        case 'medium':
            return mediumRegex;
        case 'strong':
            return strongRegex;
        default:
            return false;
        }
    },

    /**
     * @purpose: convert digit to hour and minutes
     * @author: Debajit Basu
     * @params: value: <String/Integer>
     * @return: <String>
     */

    timeConvert(value){
        if(value === null || value === undefined || value === ''){
            return "No Time";
        }
        let num = parseInt(value);
        if(Math.floor(num) < 60){
            return num + ' MINUTES'
        }else{
            if((Math.floor(num) % 60) === 0){
                return Math.floor(num / 60) + " HOUR"
            }
            let hours = Math.floor(num / 60);
            let minutes = num % 60;
            return hours + " HOUR " + minutes + " MINUTES"
        }
    },

    /**
     * @purpose: convert digit to hour and minutes
     * @author: Debajit Basu
     * @params: value: <String/Integer>
     * @return: <String>
     */

    secondsToHms(seconds, colon=''){
        seconds = Number(seconds);
        var h = Math.floor(seconds / 3600);
        var m = Math.floor(seconds % 3600 / 60);
        var s = Math.floor(seconds % 3600 % 60);

        if(colon !== '' && colon == ':'){
            var hr = h >= 0 && h <= 9 ? '0'+h : h;
            var mn = m >= 0 && m <= 9 ? '0'+m : m;
            var sec = s >= 0 && s <= 9 ? '0'+s : s;
            return (hr + ':' + mn + ':' + sec);
        }else if(colon !== '' && colon == 'hms'){
            let hourDisplay = h > 0 ? (h > 0 && h < 2 ? h + "hr " : h + "hr ") : "";
            let minuteDisplay = m > 0 ? (m > 0 && m < 2 ? m + "m " : m + "m ") : "";
            let secondDisplay = s > 0 ? (s > 0 && s < 2 ? s + "s " : s + "s ") : "";
            return hourDisplay + minuteDisplay + secondDisplay;
        }else{
            let hourDisplay = h > 0 ? (h > 0 && h < 2 ? h + " hour " : h + " hours ") : "";
            let minuteDisplay = m > 0 ? (m > 0 && m < 2 ? m + " minute " : m + " minutes ") : "";
            let secondDisplay = s > 0 ? (s > 0 && s < 2 ? s + " second " : s + " seconds ") : "";
            return hourDisplay + minuteDisplay + secondDisplay;
        }
    },

    /**
     * @purpose: JSON to URL string with key: val encrypted
     * @author: Arijit Deb Roy
     * @params: obj: <JSON>
     * @return: <String>
     */
    urlQueryEnc(obj) {
        var qArr = [];

        Object.entries(obj).forEach((value) => {
            if(value[1] !== "" && value[1] !== undefined && value[1] !== null){
                if(Array.isArray(value[1])){
                    qArr.push(value[0] + '_=' + btoa(value[1].join(",")));
                }else{
                    qArr.push(value[0] + '_=' + btoa(value[1]));
                }
            }
        })

        return qArr.join('$');
    },

    /**
     * @purpose: URL to JSON string with key: val decrypted
     * @author: Arijit Deb Roy
     * @params: value: <String/Integer>
     * @return: <String>
     */
    urlQueryDec(cql) {
        var qArr = {};

        cql.split('$').forEach((pair, index) => {
            let keyVal = pair.split('_=');
            qArr[keyVal[0]] = atob(keyVal[1]);
        })

        return qArr;
    },

    /**
     * @purpose: to capitalize an entire string
     * @author: Susanta Chankraborty
     * @params: string: <String>
     * @return: <String>
     */
    toCapitalize(string) {
        return string.split(" ").reduce((init, current) => init + " " + current.charAt(0).toUpperCase() + current.slice(1), "");
    },

    /**
     * @purpose: format date in mm-dd-yyyy.
     * @author: Arijit Deb Roy
     * @params: date: <String>
     * @return: String
     */

    dateFormat(date){
        return (`${moment(date).format('MMM')} ${moment(date).format('DD')}, ${moment(date).format('YYYY')}`);
    },

    /**
     * @purpose: add a zero Infront of a string.
     * @author: Arijit Deb Roy
     * @params: X: <Integer>
     * @return: String
     */

    leadingZero(x){
        return x < 10 ? '0' + x : x
    },

    /**
     * @purpose:query param bind as a string.
     * @author: Debajit Basu
     * @params: obj: {} , pageValue: <Integer>
     * @return: String
     */

    queryParamBind(obj, pageValue = 0){
        let qArr = [] , url = "";
        Object.entries(obj).forEach((value) => {
            if(value[1] !== "" && value[1] !== undefined && value[1] !== null){
                if(Array.isArray(value[1])){
                    qArr.push(value[0] + '=' + value[1].join(","));
                }else{
                    qArr.push(value[0] + '=' + value[1]);
                }
            }
        })
        if(qArr.length > 0 && pageValue != 0){
            url = "?"+qArr.join('&').concat("&page="+(pageValue));
        }else if(qArr.length == 0 && pageValue != 0){
            url = "?page="+(pageValue)
        }else if(qArr.length > 0){
            url = "?"+qArr.join('&')
        }
        return url;
    },

    /**
     * @purpose: get object from query param
     * @author: Debajit Basu
     * @params: param: {} , filter: {} , page: <Integer>
     * @return: object {filter, page}
     */

    getFromQueryParam(param,filter,page){
        let keys = Object.keys(filter);
        Object.entries(param).forEach((value,i) => {
            if(keys.indexOf(value[0]) >= 0 || value[0] === "page") {
                if(value[1].indexOf(",") > -1){
                    filter[value[0]] = value[1].split(',');
                }else{
                    if(value[0] === "page"){
                        page = value[1];
                    }else{
                        filter[value[0]] = value[1];
                    }
                }
            }
        })
        return {filter , page};
    },

    /**
     * @purpose: remove specific charecter from a string at end position
     * @author: Debajit Basu
     * @params: str: <String> , charecter: <String>
     * @return: String
     */

    removeCharFromEndInString(str, charecter) {
        if(str.length > 0){
            return str.slice(charecter, -1);
        }else{
            return str
        }

    }




};

export default Validator;
