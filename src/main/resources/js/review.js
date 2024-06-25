function onLoad() {
    document.getElementById("review-form").addEventListener("submit", (submitEvent) => {
        submitEvent.stopImmediatePropagation();
        submitEvent.preventDefault();
        const elements = Array.from(submitEvent.currentTarget);
        let reviewDetail = {};
        for (let element of elements) {
            if (element.name) {
                reviewDetail[element.name] = element.value;
            }
        }
        let username = reviewDetail["username"];
        let title = reviewDetail["title"];
        let rating = reviewDetail["rating"];
        let reviewText = reviewDetail["reviewText"];

        let reviewCard = $("#review-card").get(0);
        let newReviewCard = reviewCard.cloneNode(true);
        let tagElement = newReviewCard.getElementsByClassName("tag")[0];
        tagElement.textContent = rating;
        // Apply regular expression to replace the digit in css class name.
        tagElement.className = tagElement.className.replace(/\d/, rating + '')

        newReviewCard.getElementsByClassName("review-card-title")[0].textContent = title;
        newReviewCard.getElementsByClassName("review-card-attribute")[0].textContent = reviewText;
        newReviewCard.getElementsByClassName("review-card-username")[0].textContent = "- "+ username;

        $("#review-container").get(0).appendChild(newReviewCard);

    });
}

onLoad();

