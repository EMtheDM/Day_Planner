var currentDay = moment().format("dddd MMMM Do, YYYY");
$("#currentDay").text(currentDay);

var timeHour = document.getElementsByClassName(".timehour");
var eightAM = moment().hour(8).format("kk");
var nineAM = moment().hour(9).format("kk");
var tenAM = moment().hour(10).format("kk");
var elevenAM = moment().hour(11).format("kk");
var twelvePM = moment().hour(12).format("kk");
var onePM = moment().hour(13).format("kk");
var twoPM = moment().hour(14).format("kk");
var threePM = moment().hour(15).format("kk");
var fourPM = moment().hour(16).format("kk");
var fivePM = moment().hour(17).format("kk");

var currentHour = moment().hour("kk").format("kk");

var eight = moment().hour(8).format("hA");
$("#8am").text(eight);
var nine = moment().hour(9).format("hA");
$("#9am").text(nine);
var ten = moment().hour(10).format("hA");
$("#10am").text(ten);
var eleven = moment().hour(11).format("hA");
$("#11am").text(eleven);
var twelve = moment().hour(12).format("hA");
$("#12pm").text(twelve);
var thirteen = moment().hour(13).format("hA");
$("#1pm").text(thirteen);
var fourteen = moment().hour(14).format("hA");
$("#2pm").text(fourteen);
var fifteen = moment().hour(15).format("hA");
$("#3pm").text(fifteen);
var sixteen = moment().hour(16).format("hA");
$("#4pm").text(sixteen);
var seventeen = moment().hour(17).format("hA");
$("#5pm").text(seventeen);



function get8AMColor() {
    if (eightAM < currentHour) {
        $(".8am").addClass("past");
    } else if (eightAM == currentHour) {
        $(".8am").addClass("present");
    } else {
        $(".8am").addClass("future");
    }

}

get8AMColor();

function get9AMColor() {
    if (nineAM < currentHour) {
        $(".9am").addClass("past");
    } else if (nineAM === currentHour) {
        $(".9am").addClass("present");
    } else {
        $(".9am").addClass("future");
    }

}

get9AMColor();

function get10AMColor() {
    if (tenAM < currentHour) {
        $(".10am").addClass("past");
    } else if (tenAM === currentHour) {
        $(".10am").addClass("present");
    } else {
        $(".10am").addClass("future");
    }

}

get10AMColor();

function get11AMColor() {
    if (elevenAM < currentHour) {
        $(".11am").addClass("past");
    } else if (elevenAM === currentHour) {
        $(".11am").addClass("present");
    } else {
        $(".11am").addClass("future");
    }

}

get11AMColor();

function get12PMColor() {
    if (twelvePM < currentHour) {
        $(".12pm").addClass("past");
    } else if (twelvePM === currentHour) {
        $(".12pm").addClass("present");
    } else {
        $(".12pm").addClass("future");
    }

}

get12PMColor();

function get1PMColor() {
    if (onePM < currentHour) {
        $(".1pm").addClass("past");
    } else if (onePM === currentHour) {
        $(".1pm").addClass("present");
    } else {
        $(".1pm").addClass("future");
    }

}

get1PMColor();

function get2PMColor() {
    if (twoPM < currentHour) {
        $(".2pm").addClass("past");
    } else if (twoPM === currentHour) {
        $(".2pm").addClass("present");
    } else {
        $(".2pm").addClass("future");
    }

}

get2PMColor();

function get3PMColor() {
    if (threePM < currentHour) {
        $(".3pm").addClass("past");
    } else if (threePM === currentHour) {
        $(".3pm").addClass("present");
    } else {
        $(".3pm").addClass("future");
    }

}

get3PMColor();

function get4PMColor() {
    if (fourPM < currentHour) {
        $(".4pm").addClass("past");
    } else if (fourPM === currentHour) {
        $(".4pm").addClass("present");
    } else {
        $(".4pm").addClass("future");
    }

}

get4PMColor();

function get5PMColor() {
    if (fivePM < currentHour) {
        $(".5pm").addClass("past");
    } else if (fivePM === currentHour) {
        $(".5pm").addClass("present");
    } else {
        $(".5pm").addClass("future");
    }

}

get5PMColor();

var content8 = document.getElementById("8container");
var saveBtn8 = document.getElementById("8save");

var localStore8 = {
    saveLocalStorage: function() {
        localStorage.setItem("content8", content8.textContent);
    }
};

$(saveBtn8).click(function() {
    localStore8.saveLocalStorage();
});

var content9 = document.getElementById("9container");
var saveBtn9 = document.getElementById("9save");

var localStore9 = {
    saveLocalStorage: function() {
        localStorage.setItem("content9", content9.textContent);
    }
};

$(saveBtn9).click(function() {
    localStore9.saveLocalStorage();
});

var content10 = document.getElementById("10container");
var saveBtn10 = document.getElementById("10save");

var localStore10 = {
    saveLocalStorage: function() {
        localStorage.setItem("content10", content10.textContent);
    }
};

$(saveBtn10).click(function() {
    localStore10.saveLocalStorage();
});

var content11 = document.getElementById("11container");
var saveBtn11 = document.getElementById("11save");

var localStore11 = {
    saveLocalStorage: function() {
        localStorage.setItem("content11", content11.textContent);
    }
};

$(saveBtn11).click(function() {
    localStore11.saveLocalStorage();
});

var content12 = document.getElementById("12container");
var saveBtn12 = document.getElementById("12save");

var localStore12 = {
    saveLocalStorage: function() {
        localStorage.setItem("content12", content12.textContent);
    }
};

$(saveBtn12).click(function() {
    localStore12.saveLocalStorage();
});

var content1 = document.getElementById("1container");
var saveBtn1 = document.getElementById("1save");

var localStore1 = {
    saveLocalStorage: function() {
        localStorage.setItem("content1", content1.textContent);
    }
};

$(saveBtn1).click(function() {
    localStore1.saveLocalStorage();
});

var content2 = document.getElementById("2container");
var saveBtn2 = document.getElementById("2save");

var localStore2 = {
    saveLocalStorage: function() {
        localStorage.setItem("content2", content2.textContent);
    }
};

$(saveBtn2).click(function() {
    localStore2.saveLocalStorage();
});

var content3 = document.getElementById("3container");
var saveBtn3 = document.getElementById("3save");

var localStore3 = {
    saveLocalStorage: function() {
        localStorage.setItem("content3", content3.textContent);
    }
};

$(saveBtn3).click(function() {
    localStore3.saveLocalStorage();
});

var content4 = document.getElementById("4container");
var saveBtn4 = document.getElementById("4save");

var localStore4 = {
    saveLocalStorage: function() {
        localStorage.setItem("content4", content4.textContent);
    }
};

$(saveBtn4).click(function() {
    localStore4.saveLocalStorage();
});

var content5 = document.getElementById("5container");
var saveBtn5 = document.getElementById("5save");

var localStore5 = {
    saveLocalStorage: function() {
        localStorage.setItem("content5", content9.textContent);
    }
};

$(saveBtn5).click(function() {
    localStore5.saveLocalStorage();
});