$(document).ready(function () {
  const addInventoryBtn = document.querySelector('.add-inventory-Btn');
  const showTable = document.querySelector('#showTable');
  var rowIndex = 0;
  addInventoryBtn.addEventListener('click', function () {
      const ItemType = document.querySelector('#ItemType').value;
      const location = document.querySelector('#location').value;
      const quantity = document.querySelector('#quantity').value;
      const uom = document.querySelector('#uom').value;
      const requisitionDate = document.querySelector('#requisitionDate').value;
      const purpose = document.querySelector('#purpose').value;
      const itemDescription = document.querySelector('#itemDescription').value;

      var tableRow =
              " <tr id='R" + ++rowIndex + "'>" +
              "<td class='row-index'><p>"+ rowIndex +"</p></td>" +
              "<td>" + ItemType + "</td>" +
              "<td>" + location + "</td>" +
              "<td> " + quantity + "</td>" +
              "<td> " + uom + "</td>" +
              "<td> " + requisitionDate + "</td>" +
              "<td> " + purpose + "</td>" +
              "<td> " + itemDescription + "</td>" +

              "<td><button type='button' class='btn btn-primary a-btn-slide-text custom-remove-btn remove-inventory-row'>" +
              "<span class='glyphicon glyphicon-trash' aria-hidden='true'></span></button></td>" +

              "</tr>";

      $(showTable).append(tableRow);

      document.querySelector('#ItemType').value='';
      document.querySelector('#location').value='';
      document.querySelector('#quantity').value='';
      document.querySelector('#uom').value='';
      document.querySelector('#requisitionDate').value='';
      document.querySelector('#purpose').value='';
      document.querySelector('#itemDescription').value='';
  });

  // jQuery button click event to remove a row.
  $('#showTable').on('click', '.remove-inventory-row', function () {
      var child = $(this).closest('tr').nextAll();
      child.each(function () {
          var id = $(this).attr('id');
          var idx = $(this).children('.row-index').children('p')
           //Gets the row number from <tr> id.
          var dig = parseInt(id.substring(1));
          // Modifying row index.
          idx.html(dig - 1);
          // Modifying row id.
          var RowUpdate = dig-1;
          $(this).attr('id','R'+RowUpdate)

      });
      $(this).closest('tr').remove();
      rowIndex--;
  });
});

    //open modal based on item type choose
    $(document).ready(function () {
      $('#ItemType').change(function () {
          var optionVal = $(this).val();
          if (optionVal == optionVal) {
              $('#PurposeModal').modal('show');
          }
      });
  });

  //get table data from modal
  $(document).ready(function () {
      var purpose = [];
      var desc = [];
      $('input[type="checkbox"]').change(function () {
          var checkbox = $(this);
          var state = checkbox.prop('checked');
          var tr = checkbox.parents('tr');
          var purposeRow = tr.children('.purpose-row').text();
          var descriptionRow = tr.children('.description-row').text();


          if (state) {
              purpose.push(purposeRow);
              desc.push(descriptionRow);
              //alert("all----"+ purpose+"----Desc"+desc)
          } else {
              var purposeRowIdx = purpose.indexOf(purposeRow);
              var descriptionRowIdx = desc.indexOf(descriptionRow);
              purposeRowIdx.splice(index, 1);
              descriptionRowIdx.splice(index, 1);
              //alert("else----"+ index1+"----Desc---"+index2)
          }
      });
      //store table data from modal
      $('#purposeAddBtn').click(function () {
          //alert("all----"+ purpose+"----Desc"+desc)
          var purposeField = document.querySelector('.purposeField');
          var descriptionField = document.querySelector('.descriptionField');
          purposeField.innerText = purpose;
          descriptionField.innerText = desc;
          $('#PurposeModal').modal('hide');
          $('#purposeTable input[type=checkbox]').prop("checked", false);
      });

  });