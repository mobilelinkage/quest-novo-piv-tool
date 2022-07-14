
function buildCustomSelect() {
  var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 0; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
        // Fire function attached to <select> onchange attribute
        s.onchange();
      });
      // Highlight default option on page load
      if (j === selElmnt.selectedIndex) {
        c.classList.add("same-as-selected");
      }
      b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
	  let box = this.parentNode; //corsair
	  let width = box.offsetWidth; //corsair
    // Before dropdown opens, resize buffer to be the same width as the current selection
    // This will stop neighbouring elements from flowing underneath the open dropdown
    const buffer = box.nextSibling;
    if (buffer.classList && buffer.classList.contains('custom-select__buffer')) {
      buffer.style.width = width + 'px';
    }
	  //alert(width); //corsair
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
	  this.parentNode.classList.toggle("select-arrow-active"); // corsair also influencing the parent element
    
    const n = document.getElementById('number-input') //Geoff adds
    if (n) {
      n.classList.add('input-hide'); //Geoff adds to close numberpad
    }
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, c, i, xl, yl, c1, arrNo = []; //corsair adds c and c1 variables  
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  c = document.getElementsByClassName("custom-select"); //corsair adds
  xl = x.length;
  yl = y.length;
  cl = y.length; //corsair adds
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
	  c[i].classList.remove("select-arrow-active"); //corsair adds this for the main select
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

}




$(document).ready(function() {
  // for inside the iva instead (function($) {

  buildCustomSelect();

// for inside the iva instead })(jQuery);
});