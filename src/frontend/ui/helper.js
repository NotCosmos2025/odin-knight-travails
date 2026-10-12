const makeElement = (el, className, id, textContent) => {
    const element = document.createElement(el);
    if (className) element.classList.add(className);
    if (id) element.id = id;
    if (textContent) element.textContent = textContent;
    return element;
}

export {makeElement}