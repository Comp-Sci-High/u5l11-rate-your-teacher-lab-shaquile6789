// Add an event listener to the form that upon submits creates a new rating
// When the rating is created redirect to the ratings page
const createForm = document.querySelector("form")
createForm.addEventListener("submit", async (e) =>{
    e.preventDefault()

    const ratingData = new FormData(createForm)
    const reqBody = Object.fromEntries(ratingData)

    await fetch("/",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(reqBody),
    })

    window.location.href = "/"
})