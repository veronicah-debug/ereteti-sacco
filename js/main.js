const litres = document.querySelector('#litres');
const litresMessage =document.querySelector ('#litres-message');
console.log(litres);
console.log(litresMessage);
console.log(document);

function CheckLitres() {
    let amount = Number(litres.value);
    
    if (litres.value === "") {
        litresMessage.textContent = "";
    litres.classList.remove("error");
    }else if (amount < 1) {
        litresMessage.textContent = "Amount must be more than 0";
        litres.classList.add("error");
    }else 
        litresMessage.textContent = "";
        litres.classList.remove("error");
  } 
}   
litres.addEventListener('input', CheckLitres);

const member = document.querySelector('#member');
const memberMessage =document.querySelector ('#member-message');
let memberRegex = /^ER-[0-9]{4}$/;
function checkMember() {
    let typed = member.value.trim().toUpperCase();
    member.value = typed;
    if(member.value === "") {
        memberMessage.textContent = "";
        member.classList.remove("error");
    }else if (!memberRegex.test(member.value)) {
        memberMessage.textContent = "Member ID must be in the format ER-XXXX";
        member.classList.add("error");
    }else {
        memberMessage.textContent = "";
        member.classList.remove("error");
    }
}
member.addEventListener("blur", checkMember);