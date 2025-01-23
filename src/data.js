export let API_Key = "AIzaSyDoV3knvtd46x52OfZ8fG1lwydYAAF4YCE";

export let value_Convertor = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
