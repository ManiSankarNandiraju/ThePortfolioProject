function gameLoop() {
  // Update character position based on input
  // ...

  // Check if character is halfway inside the profile block
  const characterCenterX = characterX + characterFramesImages[currentFrame].width / 2;
  const characterCenterY = characterY + characterFramesImages[currentFrame].height / 2;

  const isCharacterInsideProfileBlock =
    characterCenterX >= profileBlock.x &&
    characterCenterX <= profileBlock.x + profileBlock.width &&
    characterCenterY >= profileBlock.y &&
    characterCenterY <= profileBlock.y + profileBlock.height;

  if (isCharacterInsideProfileBlock) {
    // Open the profile page
    window.location.href = "profile.html";
  }

  // ...
}