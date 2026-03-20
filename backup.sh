#!/bin/bash

# Configuration
REPO_DIR="/home/peter/TrinitasApi"
SOURCE_ASSETS="$REPO_DIR/src/assets"
BACKUP_TARGET="$REPO_DIR/src/assets/backups"
TIMESTAMP=$(date +"%Y-%m-%d %H:%M")

# 1. Navigate to Repo
cd "$REPO_DIR" || exit

# 2. Sync files to the backup folder
mkdir -p "$BACKUP_TARGET"
# Copy all .json files specifically
cp "$SOURCE_ASSETS"/*.json "$BACKUP_TARGET/"

# 3. Git Automation
# We use 'git add .' to catch the new files and any changes in src/assets
git add .

# Check if there are actually changes to commit
if git diff-index --quiet HEAD --; then
    echo "No changes to commit at $TIMESTAMP"
else
    git commit -m "Automated Backup: $TIMESTAMP"
    # Push to your main branch (adjust 'main' if your branch is named 'master')
    git push origin main
    echo "Backup pushed to Git at $TIMESTAMP"
fi