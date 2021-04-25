function crusoe(n, d, ang, distmult, angmult) {
    let x = 0;
    let y = 0;
    for (let i = 0; i < n; i++){
        let newAngle = (Math.PI/100) * ang;
        let valueX = d * Math.cos(newAngle);
        x += valueX
        let valueY = d * Math.sin(newAngle);
        y += valueY;
        d = d * distmult;
        ang = ang * angmult;
    }

    return [x,y];
}