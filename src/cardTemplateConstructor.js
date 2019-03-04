export default function cardTemplateConstructor(cardfields) {
    const template = document.createElement('template');
    const html = `<li id = "photocard">
    <p>
        ${cardfields.title}
    </p>
    <img src= ${cardfields.url} >
    </li>`;
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}