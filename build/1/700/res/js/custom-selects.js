// Smartrep TODO: delete the custom-select logic in custom.700.js
function buildCustomSelect() {
    /*look for any elements with the class "custom-select":*/
    const customSelects = document.getElementsByClassName("custom-select");
  
    for (let i = 0; i < customSelects.length; i++) {
      const selectElement = customSelects[i].getElementsByTagName("select")[0];
      /*for each element, create a new DIV that will act as the selected item:*/
      const selectedExist = customSelects[i].getElementsByClassName("select-selected").length > 0 //check if the elements created already
      if (!selectedExist){
        const selectDiv = document.createElement("DIV");
        selectDiv.setAttribute("class", "select-selected");
        selectDiv.innerHTML = selectElement.options[selectElement.selectedIndex].innerHTML.replace('overweight/ obesity', 'overweight and obesity');
        customSelects[i].appendChild(selectDiv);
        /*for each element, create a new DIV that will contain the option list:*/
        const selectItems = document.createElement("DIV");
        selectItems.setAttribute("class", "select-items select-hide");

        for (let j = 0; j < selectElement.length; j++) {
          /*for each option in the original select element,
          create a new DIV that will act as an option item:*/
          const optionDiv = document.createElement("DIV");

          // Adjusting copy according to PHQ changes, temporary solution
          if (selectElement.options[j].innerHTML === 'Obesity classes I, II and III') {
            selectElement.options[j].innerHTML = 'Obesity classes I, II, and III';
          }
          if (selectElement.options[j].innerHTML === 'People with overweight/ obesity') {
            selectElement.options[j].innerHTML = 'People with overweight and obesity';
          }
          if (selectElement.options[j].innerHTML === 'Cost offset per treated patient per month (AOM (inc. Wegovy) vs. no intervention)') {
            selectElement.options[j].innerHTML = 'Cost offset (per treated patient) per month (AOM (inc. Wegovy) vs. no intervention)';
          }

          optionDiv.innerHTML = selectElement.options[j].innerHTML;
          optionDiv.addEventListener("click", function (e) {
            /*when an item is clicked, update the original select box,
            and the selected item:*/
            const selectElement = this.parentNode.parentNode.getElementsByTagName("select")[0];
            const selectDiv = this.parentNode.previousSibling;

            for (let i = 0; i < selectElement.length; i++) {
              if (selectElement.options[i].innerHTML == this.innerHTML) {
                selectElement.selectedIndex = i;
                selectDiv.innerHTML = this.innerHTML;
                const prevSelection = this.parentNode.getElementsByClassName("same-as-selected");

                for (let k = 0; k < prevSelection.length; k++) {
                  prevSelection[k].removeAttribute("class");
                }
                this.setAttribute("class", "same-as-selected");
                break;
              }
            }

            selectDiv.click();
            // Fire function attached to <select> onchange attribute
            selectElement.onchange();
          });
          // Highlight default option on page load
          if (j === selectElement.selectedIndex) {
            optionDiv.classList.add("same-as-selected");
          }
          selectItems.appendChild(optionDiv);
        }

        customSelects[i].appendChild(selectItems);

        selectDiv.addEventListener("click", function (e) {
          /*when the select box is clicked, close any other select boxes,
          and open/close the current select box:*/
          e.stopPropagation();
          closeAllSelect(this);

          let box = this.parentNode; //corsair
          let width = box.offsetWidth; //corsair
          // Before dropdown opens, resize buffer to be the same width as the current selection
          // This will stop neighbouring elements from flowing underneath the open dropdown
          const buffer = box.nextSibling;
          
          if (buffer) {
            if (buffer.classList && buffer.classList.contains('custom-select__buffer')) {
              buffer.style.width = width + 'px';
            }

          }
          // If select box is allowed to resize instead of hide tex overflow
          // Move select options div down to accomodate change in height
          if (this.parentNode.classList.contains('resizable')) {
            const height = box.offsetHeight;
            const offset = (height - 33) + 13 + 'px';
            this.nextSibling.style.top = offset;
          }

          this.nextSibling.classList.toggle("select-hide");
          this.classList.toggle("select-arrow-active");
          this.parentNode.classList.toggle("select-arrow-active"); // corsair also influencing the parent element

          const numberPad = document.getElementById('number-input') //Geoff adds to close numberpad
          if (numberPad) {
            numberPad.classList.add('input-hide');
          }

        });
      }
    }
  }
  
  function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    const arrNo = [];
    const selectItems = document.getElementsByClassName("select-items");
    const selectDivs = document.getElementsByClassName("select-selected");
    const customSelects = document.getElementsByClassName("custom-select"); //corsair adds
  
    for (let i = 0; i < selectDivs.length; i++) {
      if (elmnt == selectDivs[i]) {
        arrNo.push(i)
      } else {
        selectDivs[i].classList.remove("select-arrow-active");
        customSelects[i].classList.remove("select-arrow-active"); //corsair adds this for the main select
      }
    }
  
    for (let i = 0; i < selectItems.length; i++) {
      if (arrNo.indexOf(i)) {
        selectItems[i].classList.add("select-hide");
      }
    }
  
  }
  
  
  $(document).ready(function () {
    // for inside the iva instead (function($) {
    
    buildCustomSelect();
    /*if the user clicks anywhere outside the select box,
    then close all select boxes:*/
    document.addEventListener("click", closeAllSelect);
  
    // for inside the iva instead })(jQuery);
  });
  