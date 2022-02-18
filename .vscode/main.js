const fillTank = (gallons) => {
    if (gallons > 15) {
        console.log(`You cannot add this much gas to the tank`)
    }
    else {
        console.log(`I filled the tank with ${gallons} of gas`)
    }
}
fillTank(15)
fillTank(22)