// Underline bars for nav styling 
let horizontalUnderLine = document.getElementById("horizontal-underline");
let navbarSiteLinks = document.querySelectorAll(".navbar-site-links:first-child a");

navbarSiteLinks.forEach(link => link.addEventListener("mouseover", (e) => horizontalIndicator(e)))

function horizontalIndicator(e) {
    horizontalUnderLine.style.left = e.currentTarget.offsetLeft + "px";
    horizontalUnderLine.style.width = e.currentTarget.offsetWidth + "px";
    horizontalUnderLine.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}

const confirmRedirect = () => {
    if (confirm('Are you sure you want to go back?')) {
        window.location.href = "owners";
    }
}

window.onload = function () {
    let tableHeadings = document.querySelectorAll("thead th");

    tableHeadings.forEach((head) => {
        head.onclick = () => {
            tableHeadings.forEach(head => head.classList.remove('active'));
            head.classList.add('active');
        }
    })
}

// Check for any null values under 'Prescriptions' page
document.addEventListener('DOMContentLoaded', () => {
    let addPrescription = document.getElementById('addPrescription');
    if (addPrescription) {
        addPrescription.addEventListener('submit', (e) => {
            let orderDateValue = document.getElementById('order_date');
            let wasPickedUp = document.getElementById('picked_up');
            if (orderDateValue.value === '') {
                e.preventDefault();
                alert('Please Enter a Correct Order Date');
            }
            else if (wasPickedUp.value != 1 || wasPickedUp.value != 2) {
                e.preventDefault();
                alert('Please Select "Yes" or "No" for Was Picked Up');
            }
        });
    }
});

// check for any null values under 'Medications' page
document.addEventListener('DOMContentLoaded', () => {
    let addMedication = document.getElementById('addMedication');
    if (addMedication) {
        addMedication.addEventListener('submit', (e) => {
            let medName = document.getElementById('name');
            let medCost = document.getElementById('cost');
            if (medName.value === '') {
                e.preventDefault();
                alert('Please Enter a Correct Medication Name');
            }
            else if (medCost.value === '') {
                e.preventDefault();
                alert('Please Enter a Correct Medication Cost');
            }
        })
    }
})

// check for any null values under 'Owners' page
document.addEventListener('DOMContentLoaded', () => {
    let addOwner = document.getElementById('addOwner');
    if (addOwner) {
        addOwner.addEventListener('submit', (e) => {
            let name = document.getElementById('name');
            let address = document.getElementById('address');
            let phoneNumber = document.getElementById('phone_number');
            if (name.value === '') {
                e.preventDefault();
                alert('Please Enter a Correct Owner Name');
            } else if (address.value === '') {
                e.preventDefault();
                alert('Please Enter a Correct Address');
            } else if (phoneNumber === '') {
                e.preventDefault();
                alert('Please Enter a Correct Phone Number');
            }
        });
    }
});