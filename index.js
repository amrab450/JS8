// Array to store candidates
let candidates = [];

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
    let name = prompt("Abdelkrim:");
    let party = prompt("green party:");
    let candidate = new Candidate(name, party);
    candidates.push(candidate);
    console.log("Candidate added successfully!");
  }

  // View all candidates
  viewCandidates() {
    if (candidates.length === 0) {
      console.log("No candidates available!");
    } else {
      candidates.forEach((candidate, index) => {
        console.log(`Candidate #${index + 1}: ${candidate.name} (${candidate.party})`);
      });
    }
  }

  // Delete a candidate
  deleteCandidate() {
    if (candidates.length === 0) {
      console.log("No candidates available!");
    } else {
      let index = prompt("1:");
      if (index >= 1 && index <= candidates.length) {
        candidates.splice(index - 1, 1);
        console.log("Candidate deleted successfully!");
      } else {
        console.log("Invalid candidate number!");
      }
    }
  }

  // Display a candidate
  displayCandidate() {
    if (candidates.length === 0) {
      console.log("No candidates available!");
    } else {
      let index = prompt("1:");
      if (index >= 1 && index <= candidates.length) {
        console.log(`Candidate #${index}: ${candidates[index - 1].name} (${candidates[index - 1].party})`);
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
    console.log("4. Display Candidate");
    console.log("0. Exit");
    return prompt("Voting Menu:");
  }

  // Menu loop
  start() {
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
      switch (selection) {
        case "1":
          this.createCandidate();
          break;
        case "2":
          this.viewCandidates();
          break;
        case "3":
          this.deleteCandidate();
          break;
        case "4":
          this.displayCandidate();
          break;
        default:
          console.log("Invalid selection! Please try again.");
      }
      selection = this.showMainMenuOptions();
    }
  }
}

// Create an instance of VotingMenu
let menu = new VotingMenu();

// Start the menu loop
menu.start();

