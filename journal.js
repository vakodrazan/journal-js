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

let journalRequirement = '';

while (journalRequirement === '') {
    let journalChoice = Number(prompt(`Welcome to my journal!
Choose (1) for listing all the entries.
Choose (2) for adding new entry.
Choose (3) to quit.
Choose (4) to delete the last entry.`));
    while (journalChoice < 0 || journalChoice > 4) {
        journalChoice = Number(prompt("Must be number between 1 and 3! \n Choose (1) for listing all the entries. \n Choose (2) for adding new entry. \n choose (3) to quit.")); 
    }

    if (journalChoice === 1) {
        for (let i = 0; i < journalEntries.length; i++) {
            alert(`Title: ${journalEntries[i].title} \n Content: ${journalEntries[i].content}`);
        }
    } else if (journalChoice === 2) {
        let title = prompt('Enter journal title');
        let content = prompt('Enter you new chosen content relate to your title: ');

        const newEntry = {
            title: title, 
            content: content
        };
        journalEntries.push(newEntry);
        for (let i = 0; i <journalEntries.length; i ++) {
            alert(`Title: ${journalEntries[i].title} \n Content: ${journalEntries[i].content}`);
        }

    } else if (journalChoice === 3) {
        alert("Thank you for taking parts in my journal entries");
        break;
    } else if (journalChoice === 4) {
        let entryDeleted = journalEntries.pop();
        alert(`We have deleted the last entry: ${entryDeleted.title}`);
    }
}

