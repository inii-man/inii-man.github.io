let circle = document.querySelector("#circle");
let overCircle = false;
let pos = {};
let pts = document.querySelector("#score");
let point = 0;
let timer = 1000;
let timer2 = 2000;
let x = 0;

let isMobile = {
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Windows());
    }
};

if (isMobile.any()) {
    let img = document.querySelector("#image");
    img.style.display = "none";
} else {
    document.body.addEventListener("mousemove", function(event) {
        let img = document.querySelector("#image");
        pos.y = event.pageY;
        pos.x = event.pageX;
        console.log(pos);
        img.style.top = (pos.y - 40).toString() + "px";
        img.style.left = (pos.x - 40).toString() + "px";
    });
}

function miss() {
    circle.style.borderColor = "white";
    circle.style.textShadow = "none";
    if (isMobile.any()) {
        circle.style.top = Math.random() * 70 + "vh";
        circle.style.left = Math.random() * 70 + "vw";
    } else {
        circle.style.top = Math.random() * 82 + "vh";
        circle.style.left = Math.random() * 82 + "vw";
    }
    timer = 1000;
    timer2 = 2000;
}

function timeUp() {
    timeout = setTimeout(miss, timer);
}

function hit() {
    timer = 700;
    timer2 = 1000;
    if (isMobile.any()) {
        circle.style.top = Math.random() * 70 + "vh";
        circle.style.left = Math.random() * 70 + "vw";
    } else {
        circle.style.top = Math.random() * 82 + "vh";
        circle.style.left = Math.random() * 82 + "vw";
    }
    point += Math.round(1);
    pts.textContent = point.toString();
    x++;
  clearTimeout(timeout);
}

setInterval(timeUp, timer2);

circle.addEventListener("mouseover", function() {
    overCircle = true;
});

circle.addEventListener("mousemove", function() {
    overCircle = true;
});

circle.addEventListener("mouseout", function() {
    overCircle = false;
});


// input
document.addEventListener("keypress", function(event) {
    if (event.key === 'z' && overCircle == true) {
        hit();
    }
    if (event.key === 'e' && overCircle == true) {
        hit();
    }
    overCircle = false;
});
circle.addEventListener("click", function() {
    hit();
    overCircle = false;
})

