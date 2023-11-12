const pages = [
    {
        name: 'Home',
        link: 'index.html'
    },
    {
        name: 'Ranking',
        link: 'ranking.html'
    },     
    {
        name: 'Anime',
        link: 'anime.html'
    },
    {
        name: 'Manga',
        link: 'manga.html'
    },
    {
        name: 'My Profile', 
        link: 'profile.html'
    }     
]

function createMenu() {

    let navUL = document.createElement('ul')
    navUL.className = 'navbar-nav';

    pages.forEach(page => {
        let navLI = document.createElement('li')
        navLI.className = 'nav-item';

        let navLink = document.createElement('a')
        navLink.className = 'nav-link';
        navLink.innerText = page.name;
        navLink.href= page.link;
        navLI.appendChild(navLink)

        if (page.children) {
            navLI.className += ' dropdown'
            navLink.className += ' dropdown-toggle';
            navLink.href = '#';
            navLink.role='button';
            navLink.setAttribute('data-bs-toggle', 'dropdown');
            navLink.setAttribute('aria-expanded', 'false');

            let dropdownUL = document.createElement('ul')
            dropdownUL.className = 'dropdown-menu'
            let dropdownItems = '';

            page.children.forEach(child => {
                dropdownItems += `<li><a class="dropdown-item" href="${child.link}">${child.name}</a></li>`
            })
            dropdownUL.innerHTML = dropdownItems
            navLI.appendChild(dropdownUL)
        }
        navUL.appendChild(navLI)
    })
    document.getElementById('navbarNav').appendChild(navUL)
}

createMenu(); 