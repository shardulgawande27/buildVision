import {
    FETCH_USER
} from './userTypes';


var opts = {
  errorCorrectionLevel: 'H',
  type: 'image/jpeg',
  quality: 0.3,
  margin: 1,
  width: '150',
  color: {
    dark:"#000000",
    light:"#FFFFFF"
  }
}

//Loading action to set flag true/false
export const fetchUser = () => {
    return {
        type: FETCH_USER,
    };
};

