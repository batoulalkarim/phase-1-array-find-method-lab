function superbowlWin(record) {
    let win = record.find(element => element.result === "W")
    console.log(win)
    if(win){
        return win.year
    } else {
        return undefined
    }
}