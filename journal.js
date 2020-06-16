// Create an object array

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

const entryList = () => { // Function for showing all the list
    for (let i = 0; i < journalEntries.length; i++) {
        alert(`Title: ${journalEntries[i].title} \n Content: ${journalEntries[i].content}`);
    }
};

const addEntry = () => { // Function to ask the user their new entry
    let title = prompt('Enter your new journal entry title');
    let content = prompt('Enter your new chosen journal entry content: ');

    const newEntry = {
        title: title, 
        content: content
    };

    journalEntries.push(newEntry);
    for (let i = 0; i <journalEntries.length; i ++) {
        alert(`Title: ${journalEntries[i].title} \n Content: ${journalEntries[i].content}`);
    }
};

const deleteIndex = () => { // Function when delete a new specific entry
    let indexToDelete = Number(prompt(`Enter the entry's number that you want to delete (1 to ${journalEntries.length})`));
    let deleteEntry = journalEntries.splice(indexToDelete--, 1);
    alert(`You have deleted this: ${deleteEntry[0].title}`)

}

let journalRequirement = '';

while (journalRequirement === '') { // Ask user's choice
    let journalChoice = Number(prompt(`Welcome to my journal!
Choose (1) for listing all the entries.
Choose (2) for adding new entry.
Choose (3) to quit.
Choose (4) to delete the last entry.
Choose (5) to delete a specific entry. (with its index)`));
    while (journalChoice < 0 || journalChoice > 5) { // When enter a wrong choice
        journalChoice = Number(prompt(`Must be number between 1 and 5!
Choose (1) for listing all the entries.
Choose (2) for adding new entry.
Choose (3) to quit.
Choose (4) to delete the last entry.
Choose (5) to delete a specific entry. (with its index)
`));
    }

    if (journalChoice === 1) { // Checking all the entry list
        entryList();
    } else if (journalChoice === 2) { // Adding a new entry

        addEntry();

    } else if (journalChoice === 3) { // Quite the program
        alert("Thank you for taking parts in my journal entries");
        break;

    } else if (journalChoice === 4) { // Delete the last entry
        let entryDeleted = journalEntries.pop();
        alert(`You have deleted the last entry: ${entryDeleted.title}`);

    } else if (journalChoice === 5) { // Delete a specific entry

        deleteIndex();

    }
}

