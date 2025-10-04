# Git Practice – Week 2 Internship Task

This folder contains my practice work for **Week 2: Version Control with Git**.  
I used the **command line** to demonstrate setting up files, committing changes, creating branches, merging, and pushing to GitHub.

---

## 🔹 Files Created

- `README.md` → This documentation file
- `app.js` → Simple JavaScript file for practice
- `feature.txt` → File created to test commits and pushes
- `branch.txt` → File created on a new branch to practice branching and merging

---

## 🔹 Git Commands Practiced

```bash
# Initialize Git in the repo (done at root level)
git init

# Stage and commit files
git add .
git commit -m "Initial commit with README and app.js"

# Create a new branch and switch to it
git checkout -b dev

# Add a file on dev branch
echo "Testing branch feature" > branch.txt
git add branch.txt
git commit -m "Added branch.txt on dev branch"

# Push branch to GitHub
git push origin dev

# Switch back to main and merge
git checkout main
git merge dev -m "Merged dev branch into main"
git push origin main
```
