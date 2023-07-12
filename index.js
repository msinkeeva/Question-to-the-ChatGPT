async function postData(){
    const root = document.querySelector("#root-container")
    root.innerHTML="Loading..."
    const question = document.querySelector("#input-field").value
    const url = "https://api.openai.com/v1/completions"
    const data = {
        model: "text-davinci-003",
        prompt: question,
        max_tokens: 512,
        temperature: 0.7,
        top_p: 1,
        frequency_penalty:0,
        presence_penalty:0
    }
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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"
        },
        body: JSON.stringify(data),
    })

    const responseData = await response.json()
    console.log(responseData)
    root.innerHTML = responseData.choices[0].text
    root.classList.remove("hidden")
}
