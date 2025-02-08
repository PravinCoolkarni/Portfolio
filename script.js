document.body.setAttribute('data-bs-theme', 'dark');
document.body.setAttribute('class', 'container-xxl body-dark');
const elements = document.querySelectorAll('.theme-color');
const stylesheet = document.styleSheets[0];
const hoverRule = '.theme-color-hover:hover { color: #4ade80; }';
stylesheet.insertRule(hoverRule, stylesheet.cssRules.length);

elements.forEach((element) => {
    element.style.color = '#4ade80';
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

        elements.forEach((element) => {
            element.style.color = '#4ade80';
        });
    }
}

