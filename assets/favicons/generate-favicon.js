// Round Favicon Generator
const canvas = document.createElement('canvas');
canvas.width = 64;
canvas.height = 64;
const ctx = canvas.getContext('2d');

// Load the profile image
const img = new Image();
img.crossOrigin = 'Anonymous';
img.src = '../images/profile.jpg';

img.onload = function() {
  // Create circular clipping path
  ctx.beginPath();
  ctx.arc(32, 32, 32, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.clip();
  
  // Draw the image
  ctx.drawImage(img, 0, 0, 64, 64);
  
  // Create link and download
  const link = document.createElement('a');
  link.download = 'round-favicon.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
};

// Note: This script needs to be run in a browser environment
// For automatic execution, you'd typically use a build tool or server-side script 