function newItem() {
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  li.append(inputValue);
  let list = $("#list");

  if (inputValue === "") {
    alert("Please add an item to the list.");
  } else {
    list.append(li);
  }

  //cross out items when done by double clicking
  function crossOut() {
    li.toggleClass("strike");
  }
  li.on("dblclick", function crossOut() {
    li.toggleClass("strike");
  });

  //to remove text from input area after it's been added to the list
  function emptyInput() {
    $("input").val("");
  }
  $("input").on("click", emptyInput);

  //adding functionality to delete items from list
  let crossOutButton = $("<crossOutButton></crossOutButton>");
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

  function deleteListItem() {
    li.addClass("delete");
  }

  crossOutButton.on("click", deleteListItem);

  //making the list sortable with built in function
  list.sortable();
}
