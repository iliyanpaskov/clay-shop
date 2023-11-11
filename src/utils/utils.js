export const starsCount = (arr) => {
    let allReviewStars = [];
    let length = arr.length;
    arr.forEach(x => {
        allReviewStars.push(x.stars)
    });
    let count = (allReviewStars.reduce((acc, num) => acc + num, 0,)) / length;
   
    let stars = [];
    let fullStarsCount = count;

    for (let i = fullStarsCount; i > 0; i--) {
        if (i >= 1) {
            stars.push(1);
        }
        else {
            stars.push(0.5);
        }
    };

    for (let i = stars.length; i < 5; i++) {
        stars.push(0);
    }

    return stars;
}

export const starsCountToArray = (count) => {;
   
    let stars = [];
    let fullStarsCount = count;

    for (let i = fullStarsCount; i > 0; i--) {
        if (i >= 1) {
            stars.push(1);
        }
        else {
            stars.push(0.5);
        }
    };

    for (let i = stars.length; i < 5; i++) {
        stars.push(0);
    }

    return stars;
}