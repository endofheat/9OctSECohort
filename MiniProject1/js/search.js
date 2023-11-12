function searchFunc() {
    var title;
    title = document.getElementById(".card-title");
    filter = input.value.toUpperCase();
    //table = document.getElementById("myTable");
    //tr = table.getElementsByTagName("tr");
   
    for (i = 0; i < title.length; i++) {
      result = title[i].getElementsByTagName("result")[0];
      if (result) {
        txtValue = result.textContent || result.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          title[i].style.display = "";
        } else {
          title[i].style.display = "none";
        }
      }
    }
  }