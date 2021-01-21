document.querySelector(".smoothScroll").addEventListener('click',(e) => {
  e.preventDefault();  
  console.log('called');
  let one =  document.querySelector('.details-of-possessor-changed');
  let two  =  document.querySelector('.add-property-form');
  one.style.display = 'block';
  two.style.display = 'block';

  window.scrollBy({
    top:900,
    left:0,
    behavior: 'smooth' 
  });
   
});  
       
   function showThePriceAndTaxWrappers() {
     console.log('called'); 
      
   }    

////////////////////////////////////////////////
//Java Script part for the bootstarp alert boxes 
////////////////////////////////////////////////

function hideBootstrapAlert(className) {
  element = document.querySelector('.' + className);
  element.style.display = 'none';
}

////////////////////////////////////////////////////////
//The pup up box with the blue effect in the background
///////////////////////////////////////////////////////

function showCdPopUp(userid, serverText) {
  $('.cd-popup').addClass('is-visible');
  document.getElementById('form-id').action = userid;
  // document.getElementById('hiddenfield').value = hiddenfieldvalue;
  document.querySelector('#servertext').innerHTML = serverText;

  //close popup   
  $('.cd-popup').on('click', function (event) {
    if ($(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ||
      $(event.target).is('.no')) {
      event.preventDefault();
      // console.log('<nonono></nonono>');
      $('.cd-popup').removeClass('is-visible');
    }
  });
}


/////////////////////////////
//End of pup up
////////////////////////////



////////////////////////////////////////////////////////
//The user permission part in users management page
///////////////////////////////////////////////////////
$(function () {
  // add multiple select / deselect functionality
  $("#selectall").click(function () {
    var selectall = document.getElementById('selectall').checked;
    if (selectall) {
      $('.case').attr('disabled', false);
      $('.case').attr('checked', this.checked);
      // console.log(document.getElementById('selectall').checked);

    } else {
      $('.case').attr('disabled', true);
      $('.case').attr('checked', this.checked);
    }
  });


  $("#selectall2").click(function () {
    var selectall = document.getElementById('selectall2').checked;
    if (selectall) {
      $('.col2').attr('disabled', false);
      $('.col2').attr('checked', this.checked);
      // console.log(document.getElementById('selectall2').checked);


    } else {
      $('.col2').attr('disabled', true);
      $('.col2').attr('checked', this.checked);

      // console.log(this.checked);
    }
  });


  $("#selectall3").click(function () {
    var selectall = document.getElementById('selectall3').checked;
    if (selectall) {
      $('.col3').attr('disabled', false);
      $('.col3').attr('checked', this.checked);
      // console.log(document.getElementById('selectall3').checked);


    } else {
      $('.col3').attr('disabled', true);
      $('.col3').attr('checked', this.checked);

      // console.log(this.checked);
    }
  });

});
////////////////////////////////////////////////////////
//End of user permission management page
///////////////////////////////////////////////////////

function loadBakcupFile(event) {
  document.getElementById('output').src = URL.createObjectURL(event.target.files[0]);
  document.querySelector('.backuploadicon').remove();
};

  


function loadFile(event) {
  console.log('Loaded');
  event.preventDefault();
  document.getElementById('output').src = URL.createObjectURL(event.target.files[0]);
};

function deletefile(event, url) {
  event.preventDefault();
  document.getElementById('output').src = url;

};


function CloseMySelf(sender) {
  try {
    window.opener.HandlePopupResult(sender.getAttribute("value"),sender.getAttribute("result"));
  
  }
  catch (err) { }
  window.close(); 
  return false; 
}
       
function HandlePopupResult(value,result) {
  document.querySelector('#possessor').value = value;
  document.querySelector('#secret').value = result;
   
    
}
   
function openWindowPopup() {  
  let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=yes,menubar=no,
  width=900,height=500,left=230,top=100,right=100`;
  let newWindow = open('users_data.html', 'example', params)
  newWin.document.write("Hello, world!");
}
 
function showBox(event) {  
  event.preventDefault();
  $('.search_box_wrapper').addClass('is-visible'); 
}
    
function hideBox() {
  $('.search_box_wrapper').on('click', function (event) {
    if ($(event.target).is('.search_box_wrapper') || $(event.target).is('.alert__closebtn__posspage')) {
      event.preventDefault();
      $('.search_box_wrapper').removeClass('is-visible');
    }
  });
}


function showReport(event) {
  event.preventDefault();
  $('.report_box_wrapper').addClass('is-visible');
}

function hideReport() {
  $('.report_box_wrapper').on('click', function (event) {
    if ($(event.target).is('.report_box_wrapper') || $(event.target).is('.alert__closebtn__posspage')) {
      event.preventDefault();
      $('.report_box_wrapper').removeClass('is-visible');
    }
  });
}



function showpwboxsecond() {
  // .change_pass_box_wrapper_second.is-visible
  $('.change_pass_box_wrapper_second').addClass('is-visible');
  element = document.querySelector('.changepassboxsecond');
  element.style.visibility = 'visible';
}

function hidepwboxsecond() {
  $('.change_pass_box_wrapper_second').removeClass('is-visible');
  element = document.querySelector('.changepassboxsecond');
  element.style.visibility = 'hidden';
}


function showpwbox(event) {
  event.preventDefault();
  $('.change_pass_box_wrapper').addClass('is-visible');
}


function hidepwbox() {
  // if ($(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ||
  $('.change_pass_box_wrapper').on('click', function (event) {
    if ($(event.target).is('.alert__closebtn__backup') || $(event.target).is('.change_pass_box_wrapper')) {
      $('.change_pass_box_wrapper').removeClass('is-visible');
      // element = document.querySelector('.changepassbox');
      // element.style.visibility = 'hidden';
    }
  });
}

function alertbox() {
  element = document.querySelector('.alert');
  element.style.visibility = 'visible';
}

function hideAlertBox() {
  element = document.querySelector('.alert');
  element.style.visibility = 'hidden';
}


function showProgressBar(e) {
  e.preventDefault();
  element = document.querySelector('.progressbar');
  element.style.display = 'block';

}

function show_Profile_Page_Wrapper(e) {
  event.preventDefault();
  // event.preventDefault();
  $('.profile_page_wrapper').addClass('is-visible');
  console.log("shown");

}

function hide_Profile_Page_Wrapper() {
  // event.preventDefault();
  $('.profile_page_wrapper').on('click', function (event) {
    if ($(event.target).is('.profile_page_wrapper') ||
      $(event.target).is('.alert__closebtn__userprop')) {
      $('.profile_page_wrapper').removeClass('is-visible');
      // element = document.querySelector('.changepassbox');
      // element.style.visibility = 'hidden';
      console.log("hidden");
    }
  });
}




function InvalidMsg(textbox) {
  // textbox.event.preventDefault();
  if (textbox.value == '') {
    textbox.setCustomValidity('خانه خالی نماند ').css('font-size', '30px');
  }
  else if (textbox.validity.typeMismatch) {
    textbox.setCustomValidity('لطفا خانه را درست پر نمایید');
  }
  else {
    textbox.setCustomValidity('');
  }
  return true;

}



calcTax();
function calcTax() {
  document.querySelector('#calculateBuildingform').addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(event);

    var sizeofBuilding = document.querySelector("#sizeOfBuilding").value;
    var buildingPerMeter = document.querySelector('#buildingPerMeter').value;
    var totalOfBuilding = sizeofBuilding * buildingPerMeter;
    //  var sizeofBuilding =   document.querySelector("#sizeOfBuilding").value;
    document.querySelector('#totalOfBuilding').value = (totalOfBuilding.toLocaleString());
    console.log(totalOfBuilding);

    //Calculating the floor
    var sizeOfFloor = document.querySelector("#sizeOfFloor").value;
    var floorPerMeter = document.querySelector("#floorPerMeter").value;
    var totalOfFloor = sizeOfFloor * floorPerMeter;
    document.querySelector('#totalOfFloor').value = (totalOfFloor.toLocaleString());
    console.log(totalOfFloor);

    //Calculatin the seperated or isolated part of the land.
    var sizeOfIsolated = document.querySelector("#sizeOfIsolated").value;
    var IsolatedPerMeter = document.querySelector("#isolatedPerMeter").value;
    var totoalOfIsolated = sizeOfIsolated * IsolatedPerMeter;
    document.querySelector("#totalOfIsolated").value = (totoalOfIsolated.toLocaleString());
    console.log(totoalOfIsolated);

    //Calculating the wall 
    var sizeOfWall = document.querySelector("#sizeOfWall").value;
    var wallPerMeter = document.querySelector("#wallPerMeter").value;
    var totalOfWall = sizeOfWall * wallPerMeter;
    document.querySelector("#totalOfWall").value = (totalOfWall.toLocaleString());
    console.log(totalOfWall);

    //Calculating the land 
    var sizeOfLand = document.querySelector("#sizeOfLand").value;
    var landPerMeter = document.querySelector("#landPerMeter").value;
    var totalOfLand = sizeOfLand * landPerMeter;
    document.querySelector("#totalOfLand").value = (totalOfLand.toLocaleString());
    console.log(totalOfLand);

    var sumOfAll = totalOfBuilding + totalOfFloor + totoalOfIsolated + totalOfWall + totalOfLand;
    var calcTaxPerYear = ((2 * sumOfAll) / 100);
    document.querySelector("#sumOfAll").value = (sumOfAll.toLocaleString());
    document.querySelector('#percentageOfTax').value = '۲ فیصد مالیات';
    document.querySelector("#taxPerYear").value = (calcTaxPerYear.toLocaleString());

  });
}














