function generateRandomBoxShadow(n) {
    let boxShadow = '';
    for (let i = 0; i < n; i++) {
      boxShadow += `${getRandomValue(2000)}px ${getRandomValue(2000)}px #FFFFFF`;
      if (i < n - 1) {
        boxShadow += ', ';
      }
    }
    return boxShadow;
  }
  
  /* Get a random value up to a maximum */
  function getRandomValue(max) {
    return Math.floor(Math.random() * max) + 1;
  }
  
  /* Assign generated box shadows to variables */
  var shadowsSmall = generateRandomBoxShadow(700);
  var shadowsMedium = generateRandomBoxShadow(200);
  var shadowsBig = generateRandomBoxShadow(100);

document.getElementById('stars').style.boxShadow = shadowsSmall;
document.getElementById('stars2').style.boxShadow = shadowsMedium;
document.getElementById('stars3').style.boxShadow = shadowsBig;

let flowerCount = 0;

document.addEventListener('click', function (event) {
  const maxFlowers = 20; // Set the maximum number of flowers allowed

  if (flowerCount < maxFlowers) {
    // Get the original flower
    const originalFlower = document.getElementById('originalFlower');

    // Clone the original flower
    const clone = originalFlower.cloneNode(true);

    // Remove the ID to avoid duplicate IDs in the document
    clone.removeAttribute('id');

    // Increment the flower count
    flowerCount++;

    // Set an offset for the clone
        // Set the position for the clone
        clone.style.left = `${event.clientX}px`; // Use clientX to get the X coordinate of the click event
        clone.style.top = `${event.clientY}px`; // Use clientY to get the Y coordinate of the click event

    // Append the clone after the original flower
    originalFlower.parentNode.insertBefore(clone, originalFlower.nextSibling);
  }
});
