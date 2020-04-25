import env from '../env.json'
import $ from 'jquery'

const ipdata = {

  getLocation(){
    return new Promise((resolve, reject) => {
      try {
        var geoApiCall = false;
        if (JSON.parse(localStorage.getItem('user_location_details_local')) == null) {
          geoApiCall = true;
        }
        else if ((JSON.parse(localStorage.getItem('user_location_details_local'))).timestamp == undefined) {
          geoApiCall = true;
        }
        else if ((Math.round((new Date).getTime() / 1000)) > (Math.round(((JSON.parse(localStorage.getItem('user_location_details_local'))).timestamp) / 1000) + (24 * 3600))) {
          geoApiCall = true;
        }
        if (geoApiCall) {
          try {
            $.get(`https://api.ipdata.co?api-key=${env.LOCATION_API_KEY}`, function (res) {
              localStorage.setItem('user_location_details_local', JSON.stringify({
                geoLocationDetails: res,
                timestamp: (new Date).getTime()
              }));
              resolve(true);
            });
          }
          catch (error) {
            reject(error.message);
          }
        }else{
          resolve(true);
        }
      }catch (e) {
        reject(e.message);
      }
    });
  }
};

export default ipdata;
