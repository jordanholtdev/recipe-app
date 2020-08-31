const categorySpan = document.querySelectorAll('.card-header>span')

categorySpan.forEach(span => {
    const category = span.innerText
    
    switch (category) {
        case 'beverage':
            span.className += ' beverage'
            break;
        case 'main':
            span.className += ' mainCourse'
            break;
        case 'baking':
            span.className += ' baking'
            break;
        case 'sea food':
            span.className += ' seafood'
            break;
        case 'snack':
            span.className += ' snack' 
            break;
        case 'other':
            span.className += ' badge-dark'
            break;
        default:
            span.className += ' badge-info'
    }
})

