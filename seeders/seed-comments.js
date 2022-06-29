/* eslint-disable indent */
const db = require('../models');

// To use await, we need an async function... an arrow async function
const seed = async () => {
    // Get the place, H-Thai-ML
    const place = await db.Place.findOne({ name: 'H-Thai-ML' });

    // Create a fake sample comment.
    const comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended!',
    });

    // Add that comment to the place's comment array.
    place.comments.push(comment.id);

    // save the place now that it has comment
    await place.save();

    // Exit the program
    process.exit();
};

seed();
