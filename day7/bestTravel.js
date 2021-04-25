function bestTravel (maxSumD, towns, dList){
    let listOfDistances = dList;
    let biggestCount = 0;

    let recurseTowns = function(townsSoFar, lastIndex) {
        townsSoFar = townsSoFar || [];
        console.log(townsSoFar);
   //base case
        if (townsSoFar.length === towns) {
            let sumDistance = townsSoFar.reduce((a,b) =>a+b );
            console.log(sumDistance);
                if (sumDistance <= maxSumD && sumDistance > biggestCount) {
                    biggestCount = sumDistance;
                }
            return; //EJECT
        }
    //recursive case
        for (let i = lastIndex + 1 || 0; i < listOfDistances.length; i++) {
            (recurseTowns(townsSoFar.concat(listOfDistances[i]), i));
        }
    }

    recurseTowns();
    return biggestCount || null;
}
