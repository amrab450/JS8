// Arrays to store candidates and votes
let candidates = [];
let votes = [];

// Class to represent a candidate
class Candidate {
  constructor(name, party) {
    this.name = name;
    this.party = party;
  }
}

// Class to handle menu operations
class VotingMenu {
  constructor() {}

  // Create a new candidate
  createCandidate() {
    let name = prompt("ABDELKRIM:");
    let party = prompt("DEMOCRATE PARTY:");
    let candidate = new Candidate(name, party);
    candidates.push(candidate);
    votes.push(0); // Initialize votes to 0
    console.log("Candidate added successfully!");
  }

  // View all candidates
  viewCandidates() {
    if (candidates.length === 0) {
      console.log("No candidates available!");
    } else {
      candidates.forEach((candidate, index) => {
        console.log(`Candidate #${index + 1}: ${candidate.name} (${candidate.party}) - Votes: ${votes[index]}`);
      });
    }
  }

  // Delete a candidate
  deleteCandidate() {
    if (candidates.length === 0) {
      console.log("No candidates available!");
    } else {
      let index = prompt("Enter candidate number to delete:");
      if (index >= 1 && index <= candidates.length) {
        candidates.splice(index - 1, 1);
        votes.splice(index - 1, 1);
        console.log("Candidate deleted successfully!");
      } else {
        console.log("Invalid candidate number!");
      }
    }
  }

  // Cast a vote
  castVote() {
    if (candidates.length === 0) {
      console.log("No candidates available!");
    } else {
      let index = prompt("Enter candidate number to vote for:");
      if (index >= 1 && index <= candidates.length) {
        votes[index - 1]++;
        console.log("Vote cast successfully!");
      } else {
        console.log("Invalid candidate number!");
      }
    }
  }

  // Show main menu options
  showMainMenuOptions() {
    console.log("Voting Menu:");
    console.log("1. Create Candidate");
    console.log("2. View Candidates");
    console.log("3. Delete Candidate");
    console.log("4. Cast Vote");
    console.log("5. Exit");
  }
}

// Create an instance of VotingMenu
let menu = new VotingMenu();

// Menu loop
while (true) {
  menu.showMainMenuOptions();
  let choice = prompt("Enter your choice:");
  switch (choice) {
    case "1":
      menu.createCandidate();
      break;
    case "2":
      menu.viewCandidates();
      break;
    case "3":
      menu.deleteCandidate();
      break;
    case "4":
      menu.castVote();
      break;
    case "5":
      console.log("Exiting...");
     
    default:
      console.log("Invalid choice! Please try again.");
  }
}
