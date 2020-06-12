let journalEntries = [
    {
        title: 'Description of the day', 
        content: "It's been raining for whole week in here, but today it's changed a bit because the sun raise."
    },

    {
        title: "Learning coding", 
        content:'Learning coding is hard but it can alse be fun if you understand the structure of the thing you do'
    },

    {
        title: "Go for a camping trip", 
        content: 'When people want to go fo a camping trip, the first thing you need is tent you should always bring a tent.'
    }
];


let journalChoice = Number(prompt("Welcome to my journal! \n Choose (1) for listing all the entries. \n Choose (2) for adding new entry. \n choose (3) to quit."));

if (journalChoice >= 1 && journalChoice <= 3) {

    if (journalChoice === 1) {
        for (let i = 0; i < JournalEntries.length; i++) {
            alert(journalEntries);
        }

    } else if (journalChoice === 2) {
        newJournalTitle = String(prompt("Enter journal title"))
        if (newJournalTitle) {
            newJournalContent = String(prompt("Enter you new chosen content relate to your title: "));
            alert(`Title: ${newJournalTitle} \n Content: ${newJournalContent}`)
        }
        journalChoice = Number(prompt("Welcome to my journal! \n Choose (1) for listing all the entries. \n Choose (2) for adding new entry. \n choose (3) to quit."));
    }

    journalChoice = Number(prompt("Welcome to my journal! \n Choose (1) for listing all the entries. \n Choose (2) for adding new entry. \n choose (3) to quit."));

}