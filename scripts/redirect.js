function redirect(url) {
    window.location.href = url;
    document.currentScript.outerHTML = `<a href="${url}"/>${url}</a>`
}