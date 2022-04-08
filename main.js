let circle = document.querySelector("#circle");
let pts = document.querySelector("#score");
let gun = document.querySelector('#gun');
let overCircle = false;
let position = {};
let point = 0;
let timer = 1000;
let timer2 = 1010;
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
        position.y = event.pageY;
        position.x = event.pageX;
        console.log(position);
        img.style.top = (position.y - 40).toString() + "px";
        img.style.left = (position.x - 40).toString() + "px";
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
    timer2 = 1010;
}

function timeUp() {
    timeout = setTimeout(miss, timer);
}

function hit() {
    
    // timer = 100;
    // timer2 = 900;
    if (isMobile.any()) {
        circle.style.top = Math.random() * 70+ "vh";
        circle.style.left = Math.random() * 70+ "vw";
    } 
    else {
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
    gun.play();
    overCircle = false;
})


