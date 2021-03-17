// JSON array with all properties
var myCitiObj = {
  "selected_id" : "0",
  "total_count": "5",
  "cities": [{
      "name": "CHENNAI",
      "image_path": "img/chennai.png",
      "thumbnail_path": "img/chennai_thumb@2x.png",
      "content": "Chennai, on the Bay of Bengal in eastern India, is the capital of the state of Tamil Nadu. The city is home to Fort St. George, built in 1644 and now a museum showcasing the city’s roots as a British military garrison and East India Company trading outpost, when it was called Madras. Religious sites include Kapaleeshwarar Temple, adorned with carved and painted gods, and St. Mary’s, a 17th-century Anglican church."
    },
    {
      "name": "AGRA",
      "image_path": "img/aagra.png",
      "thumbnail_path": "img/aagra_thumb@2x.png",
      "content": "Agra is a city in northern India’s Uttar Pradesh state. It's home to the iconic Taj Mahal, a mausoleum built for the Mughal ruler Shah Jahan’s wife, Mumtaz Mahal (who died in childbirth in 1631). The imposing main building features a massive dome and intricately carved white marble inlaid with precious stones. This is set behind a reflecting pool inside a courtyard defined by 4 minarets."
    },
    {
      "name": "MUMBAI",
      "image_path": "img/mumbai.png",
      "thumbnail_path": "img/mumbai_thumb@2x.png",
      "content": "Mumbai (formerly called Bombay) is a densely populated city on India’s west coast. A financial center, it's India's largest city. On the Mumbai Harbour waterfront stands the iconic Gateway of India stone arch, built by the British Raj in 1924. Offshore, nearby Elephanta Island holds ancient cave temples dedicated to the Hindu god Shiva. The city's also famous as the heart of the Bollywood film industry."
    },
    {
      "name": "DELHI",
      "image_path": "img/delhi.png",
      "thumbnail_path": "img/delhi_thumb@2x.png",
      "content": "Delhi, India’s capital territory, is a massive metropolitan area in the country’s north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people. Nearby is Chandni Chowk, a vibrant bazaar filled with food carts, sweets shops and spice stalls."
    },
    {
      "name": "PUNE",
      "image_path": "img/pune.png",
      "thumbnail_path": "img/pune_thumb@2x.png",
      "content": "Pune was once the base of the Peshwas (prime ministers) of the Maratha Empire, which lasted from 1674 to 1818. It's known for the grand Aga Khan Palace, built in 1892 and now a memorial to Mahatma Gandhi, whose ashes are preserved in the garden. The 8th-century Pataleshwar Cave Temple is dedicated to the Hindu god Shiva."
    }
  ]
};

window.onload = function() {
  what();

  function what() {
    //defalut setting
    myCitiObj.selected_id = 0;
    document.querySelector("#selected-city-name").innerHTML = myCitiObj.cities[0].name;
    document.querySelector("#selected-city-info").innerHTML = myCitiObj.cities[0].content;
    document.querySelector("#selected-city-image").src = myCitiObj.cities[0].image_path;

    for (var i = 0; i < myCitiObj.total_count; i++) {
      document.querySelector("#thumbnail-title-" + (i + 1)).innerHTML = myCitiObj.cities[i].name;
      document.querySelector("#thumbnail-city-image-" + (i + 1)).src = myCitiObj.cities[i].thumbnail_path;
    }

    //navigation bar setup
    if(myCitiObj.selected_id == 0){
      document.querySelector("#nav-button-prev").src = "img/x_path_prev_disabled.svg";
    }else{
      document.querySelector("#nav-button-prev").src = "img/x_path_prev.svg";
    }
    if(myCitiObj.selected_id == 4){
      document.querySelector("#nav-button-next").src = "img/x_path_next_disabled.svg";
    }else{
      document.querySelector("#nav-button-next").src = "img/x_path_next.svg";
    }
    // console.log();
  };
}

$(document).ready(function() {

  $("img").click(function(){
    // console.log(myCitiObj.selected_id);
  });

  $("#thumbnail-city-image-1").click(function() {
    myCitiObj.selected_id = 0;
    setProperties(0);
    handleSelectionChange()
  });

  $("#thumbnail-city-image-2").click(function() {
    myCitiObj.selected_id = 1;
    setProperties(1);
    handleSelectionChange();
  });

  $("#thumbnail-city-image-3").click(function() {
    myCitiObj.selected_id = 2;
    setProperties(2);
    handleSelectionChange();
  });

  $("#thumbnail-city-image-4").click(function() {
    myCitiObj.selected_id = 3;
    setProperties(3);
    handleSelectionChange();
  });

  $("#thumbnail-city-image-5").click(function() {
    myCitiObj.selected_id = 4;
    setProperties(4);
    handleSelectionChange();
  });

  $("#nav-button-next").click(function() {
    var i = myCitiObj.selected_id + 1;
    if(i >= 0 && i<myCitiObj.total_count &&  myCitiObj.cities[i] != null){
      setProperties(i);
      myCitiObj.selected_id = i;
      handleSelectionChange();
    }
  });

  $("#nav-button-prev").click(function() {
    var i = myCitiObj.selected_id - 1;
    if(i >= 0 && i<myCitiObj.total_count){
      setProperties(i);
      myCitiObj.selected_id = i;
      handleSelectionChange();
    }
  });

});

function setProperties(selection){
  document.querySelector("#selected-city-name").innerHTML = myCitiObj.cities[selection].name;
  document.querySelector("#selected-city-info").innerHTML = myCitiObj.cities[selection].content;
  document.querySelector("#selected-city-image").src = myCitiObj.cities[selection].image_path;
}

function handleSelectionChange(){
  //thumbnail highlight
  for (var i = 0; i < myCitiObj.total_count; i++) {
    $("#thumbnail-city-image-" + (i + 1)).css("background","#FFFFFF");
    $("#thumbnail-city-image-" + (i + 1)).css("padding","0px");
    $("#thumbnail-title-" + (i + 1)).css("font-weight","500");
  }
  // thumbnail highlight for selected city
  $("#thumbnail-city-image-" + (myCitiObj.selected_id + 1)).css("background","#983EAE 0% 0% no-repeat padding-box");
  $("#thumbnail-city-image-" + (myCitiObj.selected_id + 1)).css("padding","5px");
  $("#thumbnail-title-" + (myCitiObj.selected_id + 1)).css("font-weight","700");

  //navigation bar correction
  if(myCitiObj.selected_id == 0){
    document.querySelector("#nav-button-prev").src = "img/x_path_prev_disabled.svg";
  }else{
    document.querySelector("#nav-button-prev").src = "img/x_path_prev.svg";
  }
  if(myCitiObj.selected_id == 4){
    document.querySelector("#nav-button-next").src = "img/x_path_next_disabled.svg";
  }else{
    document.querySelector("#nav-button-next").src = "img/x_path_next.svg";
  }
}
