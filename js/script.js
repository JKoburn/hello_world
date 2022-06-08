const toggleThemeBtn = document.getElementById('toggle-theme-btn')
const toggleThemeImage = document.getElementById('toggle-theme-image')

function setDarkTheme() {
    document.body.classList.add('dark')
    toggleThemeImage.src = 'img/sun.png'
    localStorage.theme = 'dark'
}

function setLightTheme() {
    document.body.classList.remove('dark')
    toggleThemeImage.src = 'img/moon.png'
    localStorage.theme = 'light'
}

toggleThemeBtn.addEventListener('click', () => {
    if (document.body.classList.contains('dark')) {
        setLightTheme()
    } else {
        setDarkTheme()
    }
})

if (localStorage.theme === 'dark') {
    setDarkTheme()
} 

