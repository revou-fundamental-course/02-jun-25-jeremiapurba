console.log("JavaScript is going");

function validateForm() {
    // Ambil DOM dari id "name-input" di HTML
    const nameInput = document.getElementById("name-input");

    console.log(nameInput.value);
    if (nameInput.value == '') {
        // Action ketika value kosong
        alert('Please enter your name before submitting.');
    }   else {
        // Action ketika value tidak kosong
        alert(`Hai ${nameInput.value}, Terima kasih telah mengisi form nama anda.`);
    }
}

let indexBanner = 0;

showBanner();

/// Increment Index
function nextBanner() {
    indexBanner += 1;
    showBanner();
}

function showBanner () {
    // DOM Banner
    const listImage = document.getElementsByClassName("banner-img");
    
    //Reset index
    if (indexBanner > listImage.length - 1) { 
        indexBanner = 0;
    }

    /// Looping to hide all banner
    for (let i = 0; i < listImage.length; i++) {
        listImage[i].style.display = "none";
    }

    listImage[indexBanner].style.display = "block";

    console.log(listImage);
}

setInterval(nextBanner, 3000);