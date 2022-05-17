function Cancel(completed,incomplete, footer,newtaskContent,contentIncomplete,forms,forms2,edittaskContent) {
    completed.style.pointerEvents ="auto";
    incomplete.style.pointerEvents ="auto";
    incomplete.classList.remove("fw-lighter")
    completed.classList.add("fw-lighter")
    footer.classList.remove("d-none")

    newtaskContent.classList.add("d-none")
    contentIncomplete.classList.remove("d-none")
    forms.reset()
    forms2.reset()
    edittaskContent.classList.add("d-none")
}

module.exports = Cancel