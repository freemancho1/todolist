export const resizeTextArea = (event) => {
    // const rows = event.target.value.split(/\r\n|\r|\n/);
    // let rowCount = rows.length;
    // for (let i=0; i<rows.length;i++) {
    //     let subCount = rows[i].length;
    //     if (subCount > 30) rowCount += 1;
    // }
    event.target.style.height = event.target.scrollHeight + "px";
}