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




function submitContactForm(event){

    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const data = { 
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };

    const submitButton = form.querySelector('.submit-btn');
    const buttonText = submitButton.querySelector('.button-text');
    const spinner = submitButton.querySelector('.spinner');
    const spinnerText = submitButton.querySelector('.spinner-text');

    // Show the spinner and disable the button
    buttonText.style.display = 'none';
    spinner.style.display = 'inline-block';
    spinnerText.style.display = 'inline-block'; 
    submitButton.disabled = true;

    emailjs.send('service_4m507lx', 'template_kl4xj77', data).then(
        (response) => {
          response.status === 200 && response.text === 'OK' ? alert('Message sent successfully!') : alert('Failed to send message. Please try again later.');
          form.reset();
        },
        (error) => {
          alert('Failed to send message. Please try again later.');
          form.reset();
          console.log('FAILED...', error);
        },
    ).finally(() => {
        // Hide the spinner, enable the button, and restore the text
        buttonText.style.display = 'inline';
        spinner.style.display = 'none';
        spinnerText.style.display = 'none';
        submitButton.disabled = false;
    });

}


