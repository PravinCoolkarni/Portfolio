var apiUrl = 'https://script.google.com/macros/s/AKfycbynSorEHRkJtmfnGrRy1_xzDkn533Y59MmJ6w2a-EVoY3QZPartUFG0P-ndsoYYaZMv/exec';


document.body.setAttribute('data-bs-theme', 'dark');
document.body.setAttribute('class', 'container-xxl body-dark');
const themeColor = document.querySelectorAll('.theme-color');
const stylesheet = document.styleSheets[0];
const hoverRule = '.theme-color-hover:hover { color: #4ade80; }';
stylesheet.insertRule(hoverRule, stylesheet.cssRules.length);

themeColor.forEach((element) => {
    element.style.color = '#4ade80';
});

const navbar = document.getElementById("navbar");
navbar.style.backgroundColor = "#212529";
let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop > lastScrollTop) {
        // User is scrolling down, hide the navbar
        navbar.style.opacity = "0";
    } else {
        // User is scrolling up, show the navbar
        navbar.style.opacity = "1";
    }

    lastScrollTop = scrollTop;
});


function SwitchTheme() {
    let theme = document.body.getAttribute('data-bs-theme');
    if (theme === 'dark') {
        document.body.setAttribute('data-bs-theme', 'light');
        document.body.setAttribute('class', 'container-xxl body-light');

        const elements = document.querySelectorAll('.theme-color');
        const stylesheet = document.styleSheets[0];
        const hoverRule = '.theme-color-hover:hover { color: #6c757d; }';
        stylesheet.insertRule(hoverRule, stylesheet.cssRules.length);

        const navbar = document.getElementById("navbar");
        navbar.style.backgroundColor = "#e6e6e6";

        elements.forEach((element) => {
            element.style.color = 'inherit';
        });
    } else {
        document.body.setAttribute('data-bs-theme', 'dark');
        document.body.setAttribute('class', 'container-xxl body-dark');

        const elements = document.querySelectorAll('.theme-color');
        const stylesheet = document.styleSheets[0];
        const hoverRule = '.theme-color-hover:hover { color: #4ade80; }';
        stylesheet.insertRule(hoverRule, stylesheet.cssRules.length);

        const navbar = document.getElementById("navbar");
        navbar.style.backgroundColor = "#212529";

        elements.forEach((element) => {
            element.style.color = '#4ade80';
        });
    }
}


async function submitContactForm(event){

    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const data = { 
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };

    const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(data)
    };

    console.log('Form data:', data);
    try{
        const response = await fetch(apiUrl, requestOptions);

        if (!response.ok) {
            throw new Error(`Server error: ${response.statusText}`);
        }

        const result = await response.json();
        console.log('Success:', result);
        alert('Form submitted successfully!');
        form.reset();
    }
    catch(error){
        console.error('Error:', error);
        alert('There was an error submitting the form.');
        form.reset();
    }
}


