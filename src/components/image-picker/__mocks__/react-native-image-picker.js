export default class ImagePicker {

  /**
   * A little workaround to execute some things once showImagePicker
   * is called.
   */
  static callback = () => {}
  static setCallback = (newCallback) => {
    ImagePicker.callback = newCallback;
  }

  static showImagePicker = (options, callback) => {
    ImagePicker.callback();
  }
}