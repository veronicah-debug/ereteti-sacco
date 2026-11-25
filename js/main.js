// ---- litres check
const litres = document.querySelector('#litres');
const litresMessage = document.querySelector('#litres-message');

function checkLitres() {
  let amount = Number(litres.value);

  if (litres.value === "") {
    litresMessage.textContent = "";
    litres.classList.remove("error");
  } else if (amount < 1) {
    litresMessage.textContent = "Amount must be more than 0";
    litres.classList.add("error");
  } else {
    litresMessage.textContent = "";
    litres.classList.remove("error");
  }
}

if (litres) {
  litres.addEventListener('input', checkLitres);
}

// ---- member number check
const member = document.querySelector('#member');
const memberMessage = document.querySelector('#member-message');
let memberRegex = /^ER-[0-9]{4}$/;

function checkMember() {
  let typed = member.value.trim().toUpperCase();
  member.value = typed;
  if (member.value === "") {
    memberMessage.textContent = "";
    member.classList.remove("error");
  } else if (!memberRegex.test(member.value)) {
    memberMessage.textContent = "Member ID must be in the format ER-XXXX";
    member.classList.add("error");
  } else {
    memberMessage.textContent = "";
    member.classList.remove("error");
  }
}

if (member) {
  member.addEventListener("blur", checkMember);
}

// ---- 3. deliveries page: the form, stopped only when something is wrong
const deliveryForm = document.querySelector('#delivery-form');
const formMessage = document.querySelector('#form-message');

function recordDelivery(event) {
  checkMember();
  checkLitres();
  if (member.classList.contains('error')) {
    event.preventDefault();          // stop: the member number is wrong
    member.focus();
  } else if (litres.classList.contains('error')) {
    event.preventDefault();          // stop: the litres are wrong
    litres.focus();
  }
  // nothing wrong: the form goes on to process-delivery.php
}

if (deliveryForm) {
  deliveryForm.addEventListener('submit', recordDelivery);
}

// ---- 4. routes page: the routes, filtered as you type
const search = document.querySelector('#route-search');
const routeCount = document.querySelector('#route-count');
const routeSections = document.querySelectorAll('main section');

function filterRoutes() {
  const wanted = search.value.trim().toLowerCase();
  let shown = 0;
  for (const section of routeSections) {
    const words = section.textContent.toLowerCase();
    if (words.includes(wanted)) {
      section.hidden = false;
      shown = shown + 1;
    } else {
      section.hidden = true;
    }
  }
  routeCount.textContent =
    shown + ' of ' + routeSections.length + ' routes';
}

if (search) {
  search.addEventListener('input', filterRoutes);
}

// ---- 5. deliveries page: the accepted total
const totalCell = document.querySelector('#accepted-total');

if (totalCell) {
  const rows = document.querySelectorAll('tbody tr');
  let total = 0;
  for (const row of rows) {
    const cells = row.querySelectorAll('td');
    if (cells.length > 4 && cells[4].textContent === 'Yes') {
      total = total + Number(cells[3].textContent);
    }
  }
  totalCell.textContent = total.toFixed(2);
}