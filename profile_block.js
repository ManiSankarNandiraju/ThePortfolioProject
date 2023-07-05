// Set up the profile block
const profileBlock = {
  x: 400, // Adjust the position of the block as needed
  y: 300,
  width: 200,
  height: 100,
  isOpen: false
};

// Check if the character is halfway into the profile block
function checkProfileInteraction() {
  const characterCenterX = characterX + characterFramesImages[currentFrame].width / 2;
  const characterCenterY = characterY + characterFramesImages[currentFrame].height / 2;

  if (
    characterCenterX > profileBlock.x &&
    characterCenterX < profileBlock.x + profileBlock.width &&
    characterCenterY > profileBlock.y &&
    characterCenterY < profileBlock.y + profileBlock.height
  ) {
    profileBlock.isOpen = true;
  } else {
    profileBlock.isOpen = false;
  }
}

// Open the profile page if the block is open
function openProfile() {
  if (profileBlock.isOpen) {
    window.location.href = "profile.html"; // Replace "profile.html" with the actual URL of your profile page
  }
}

// Update the game loop to check profile interaction and open the profile
function gameLoop() {
  // ...

  checkProfileInteraction();

  // ...

  // Request the next animation frame
  requestAnimationFrame(gameLoop);
}
