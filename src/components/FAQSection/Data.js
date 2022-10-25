export const FAQ = {
    array: [
        {
            question: "Do I need to be a CS/CE student to join?",
            answer: "No. This organization is open to all undergraduate or graduate students, regardless of major.",
            id: 0            
        },
        {
            question: "Will events be held virtually or in-person?",
            answer: "All events will be held virtually for the remainder of 2021.",
            id: 1
        },
        {
            question: "Do I need to pay a membership fee to join?",
            answer: "No. All workshops, programs, meetups, talks, and any other events are free to attend for members.",
            id: 2

        },
        {
            question: "What if I'm unable to attend a live event?",
            // TODO: find a way to embed a link using JSON. I propose keeping an array for links and delimiting areas to place them using {{}}, or rendering this text as html
            answer: "All our events are recorded and posted to our YouTube channel. You can find sample code and any other assets on our GitHub profile.",
            id: 3
        },
        {
            question: "How do I join?",
            answer: "If you're interested in joining as a member, you can register through V-link and join our discord server for event announcements.",
            answer2: "If you'd like to join the organization's leadership team, you can apply at bit.ly/fd-apply.",
            id: 4
        },
        {
            question: "How do I learn about upcoming events?",
            // TODO: embed another link
            answer: "All of our upcoming events are available for registration here. You can also join our Discord to receive all our event and organization updates.",
            id: 5
        }
    ]
}

export const FAQObject = {
    id: 'signup',
    lightBg: false,
    lightText: true,
}