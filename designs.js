// Select color input
let color=$("#colorPicker");
// Select size input
let height=$("#inputHeight");
let width=$("#inputWidth");
let table=$("#pixelCanvas");

// When size is submitted by the user, call makeGrid()
//Might need to change the format of the commend below to
$("#sizePicker").submit(function(event){
event.preventDefault();
makeGrid();
})
//$("#sizePicker").submit(makeGrid())
// the code above did not work because the defaule input values kept being restored for hieght and width
function makeGrid() {
  //need to append child table,tr and td elements using document .createElement
  $("table").empty();
  for (var row=0;row<height.val();row++){
    table.append("<tr></tr>")
    //var row=document.createElement("tr");
    //var newRow=document.getElementById("pixelCanvas");
    //document.getElementById("#pixelCanvas").appendChild(row);
    //newRow.insertBefore(row);
  }
    for(var column=0;column<width.val();column++){
      $("tr").append("<td></td>")
    }
     //var cell=document.createElement("td");
      //document.tr.appendChild(cell);
      //var newCell=document.getElementsByTagName("tr");
      //newRow.insertBefore(row);

}
table.on("click","td",function(){
  $(this).css("backgroundColor",color.val())
})

// Your code goes here!
