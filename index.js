function distanceFromHqInBlocks(block) {
    // This calculates how far a block is from HQ (which is assumed to be at block 42)
    return Math.abs(block - 42);
  }
  
  function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264;
  }
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
  }
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    // If distance is less than or equal to 400 feet, it's free
    if (distance <= 400) {
      return 0;
    }
  
    // If the distance is between 400 and 2000 feet, charge 2 cents per foot
    if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot
    }
  
    // If the distance is over 2000 feet, charge a flat 25 dollars
    if (distance > 2000 && distance <= 2500) {
      return 25;
    }
  
    // If the distance is over 2500 feet, don't allow the ride
    return 'cannot travel that far';
  }