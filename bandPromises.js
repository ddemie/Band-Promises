//simulated backend
const drumsBass = () => {
    const iou = new Promise((resolve, reject) => {
        setTimeout (() => {
            console.log ('bass come in', 2);
            console.log ('Drum feel comes in', 3);
            console.log ('bass finds rhythm', 4);
            resolve();
        },4000);
    });
    return iou;
}
//simulated frontend
const rhythm = () => {
    setTimeout(() => {
        console.log ('rhythm solo', 1);
        drumsBass().then(() => {
            console.log ('guitar matches bass rhythm', 5);
            leadGuitar();
        },1000);
    })
}
//simulated users
const leadGuitar = () => {
    console.log ('guitar finds melody', 6);
    console.log ('guitar solo', 7);
}
rhythm();


