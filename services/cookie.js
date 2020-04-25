
/***
 *
 * Set cookie, get cookie and delete cookie
 *
 * According to HTTP Cookie specs, semi-colons, commas, equals signs, and white spaces are not allowed characters.
 * But using these functions you can use all special chars.
 * Function names are self explanatory.
 *
 * Author; Chandan Kumar Gupta
 *
 * @param: name, value, days
 * @return: cookie value | null | undefined
 *
 */

const Cookie = {

  getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? decodeURIComponent(v[2]) : null;
  },

  /*getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  },

  setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  },*/

  setCookie(name, value, days) {
    var d = new Date;
    d.setTime(d.getTime() + 24*60*60*1000*parseInt(days));
    document.cookie = name + "=" + encodeURIComponent(value) + ";path=/;expires=" + d.toGMTString();
  },

  deleteCookie(name) {
    this.setCookie(name, '', -1);
  }

};

export default Cookie;

