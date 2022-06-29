export function AltTextFromImage(imageText) {
    imageText = imageText.replace(".jpg" , "")
    return imageText.replace("_" , " ")
  }
 