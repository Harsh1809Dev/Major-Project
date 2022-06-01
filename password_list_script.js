let credentials = localStorage.getItem("credentials");
credentials = JSON.parse(credentials);
let trI = 0;
if(credentials != null){
    for(var i = 0; i < credentials.length; i++){
        console.log(credentials[i][2]);
        let data_html = `<div class="tr ${credentials[i][3]}">
        <div class="th">${credentials[i][0]}</div>
        <div class="th" style="border-left: 1px white solid;">${credentials[i][1]}</div>
        <div class="th" style="border-left: 1px white solid;">${credentials[i][2]}</div>
        </div>`
        $(".table-body").append(data_html);
        trI++;
    }
}
console.log(trI);

$(".new-add").dblclick(function(e){
    e.currentTarget.innerText = "";
})

$(".add-btn").click(function(e){
    let data = $(".new-add");
    let dummy_data = [];
    dummy_data.push(data[0].innerText);
    dummy_data.push(data[1].innerText);
    dummy_data.push(data[2].innerText);
    // 
    let uId = Date.now();
    dummy_data.push(uId);
    if(credentials == null){
        let temp_data = [];
        temp_data.push(dummy_data);
        localStorage.setItem("credentials",JSON.stringify(temp_data));
    }else{
        let data_ = localStorage.getItem("credentials");
        data_ = JSON.parse(data_);
        data_.push(dummy_data);
        localStorage.setItem("credentials",JSON.stringify(data_));
    }
    let data_html = `<div class="tr ${uId}">
    <div class="th ${i+10}">${data[0].innerText}</div>
    <div class="th" style="border-left: 1px white solid;">${data[1].innerText}</div>
    <div class="th" style="border-left: 1px white solid;">${data[2].innerText}</div>
    </div>`
    $(".table-body").append(data_html);
    trI++;
})

$(".tr").dblclick(function(e){
    let data_ = localStorage.getItem("credentials");
        data_ = JSON.parse(data_);
        let dUId = $(e.currentTarget).attr('class').split(' ')[1];
        let dIndex = 0;
        while (!isItemInArray(data_[dIndex],dUId)){
            dIndex++;
        }
        data_.splice(dIndex,1);
        localStorage.setItem("credentials",JSON.stringify(data_));
        $(e.currentTarget).remove();
    

    console.log(e.currentTarget.innerText);
})

function isItemInArray(array, item) {

    for (var i = 0; i < array.length; i++) {
        if (array[i] == item) {
            return true;  
        }
    }
    return false;
}





















// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// let credentials = localStorage.getItem("credentials");
// credentials = JSON.parse(credentials);
// if(credentials != null){
//     for(var i = 0; i < credentials.length; i++){
//         console.log(credentials[i][2]);
//         let data_html = `<div class="tr">
//         <div class="th">${credentials[i][0]}</div>
//         <div class="th" style="border-left: 1px white solid;">${credentials[i][1]}</div>
//         <div class="th" style="border-left: 1px white solid;">${credentials[i][2]}</div>
//         </div>`
//         $(".table-body").append(data_html);
//     }
// }

// $(".new-add").dblclick(function(e){
//     e.currentTarget.innerText = "";
// })

// $(".add-btn").click(function(e){
//     let data = $(".new-add");
//     let dummy_data = [];
//     dummy_data.push(data[0].innerText);
//     dummy_data.push(data[1].innerText);
//     dummy_data.push(data[2].innerText);
//     if(credentials == null){
//         let temp_data = [];
//         temp_data.push(dummy_data);
//         localStorage.setItem("credentials",JSON.stringify(temp_data));
//     }else{
//         let data_ = localStorage.getItem("credentials");
//         data_ = JSON.parse(data_);
//         data_.push(dummy_data);
//         localStorage.setItem("credentials",JSON.stringify(data_));
//     }
//     let data_html = `<div class="tr">
//     <div class="th">${data[0].innerText}</div>
//     <div class="th" style="border-left: 1px white solid;">${data[1].innerText}</div>
//     <div class="th" style="border-left: 1px white solid;">${data[2].innerText}</div>
//     </div>`
//     $(".table-body").append(data_html);
// })

// $(".tr").dblclick(function(e){
//     $(e.currentTarget).remove();
// })