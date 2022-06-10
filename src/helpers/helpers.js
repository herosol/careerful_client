import parse from "html-react-parser";
import moment from "moment";
import * as paths from "../constants/paths";

export function doObjToFormData(obj) {
  var formData = new FormData();
  for (var key in obj) {
    if (Array.isArray(obj[key])) {
      for (let [keyv, value] of Object.entries(obj[key])) {
        formData.append(key + "[]", JSON.stringify(value));
      }
    } else {
      if (typeof obj[key] == "object") {
        formData.append(key, JSON.stringify(obj[key]));
      } else {
        formData.append(key, obj[key]);
      }
    }
  }
  return formData;
}

export function doFirstUpperRestLower(word) {
  const lower = word.toLowerCase();
  return word.charAt(0).toUpperCase() + lower.slice(1);
}

export function doParseHTML(string) {
  return parse(string);
}

export function getBackgroundImageUrl(src) {
  const base_api_url = paths.API_CMS_BG_IMAGES_URL;
  return base_api_url + src;
}

export function getBackgroundImageUrlThumb(src, thumb = 1) {
  const base_api_url = paths.API_CMS_BG_IMAGES_URL;
  if (thumb > 1) return base_api_url + thumb + "p_" + src;
  else return base_api_url + "thumb_" + src;
}

export function getUploadsUrl(folder, src) {
  const base_api_url = paths.API_UPLOADS_URL;
  return base_api_url + folder + "/" + src;
}

export function newsDateFormat(date) {
  // alert(date);
  return moment(date).format("DD MMMM YYYY");
}

export function blogsDateFormat(date) {
  // alert(date);
  return moment(date).format("DD MMMM YYYY");
}

export function eventTimeFormat(time) {
  return moment(time, "HHmmss").format("hh:mm A");
}
