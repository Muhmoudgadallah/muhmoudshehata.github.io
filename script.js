// Array to store your skills
const skills = [
    "Python", "SQL", "R (Basic)", "C (Basic)",
    "Power BI", "Tableau", "Excel",
    "Data Cleaning", "Exploratory Data Analysis",
    "Machine Learning"
];

// Dynamically add skills to the Skills Summary section
function loadSkills() {
    const skillsList = document.getElementById("skills-list");
    let ul = document.createElement('ul');

    skills.forEach(skill => {
        let li = document.createElement('li');
        li.textContent = skill;
        ul.appendChild(li);
    });

    skillsList.appendChild(ul);
}

// Event listener to load skills after DOM is loaded
window.addEventListener('load', loadSkills);
