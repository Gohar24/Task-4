function data(event) {
    event.preventDefault(); // Form submit hone se rokta hai aur page refresh nahi hota

    // Input fields se values le rahe hain
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    // Check karte hain agar name ya email khaali ho
    if (name === "" || email === "") {
        alert("All fields are mandatory"); // Alert deta hai agar koi field khaali ho
        return false; // Aage ka code run nahi hota
    }

    
   // Email format check kar rahe hain (valid format hona chahiye)
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    alert("Please enter a valid email address");
    return false;
    }


    // Agar sab sahi hai toh next page par redirect karega
    else {
        window.location.href = "abc.html"; // abc.html page par le jata hai
        true; // (Yeh line zaroori nahi hai, hata bhi sakte ho)
    }
}
