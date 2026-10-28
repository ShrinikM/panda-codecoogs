# PANDA for CodeCoogs

## 1. Fork

On GitHub: Fork → Create fork.

## 2. Clone your fork

```bash
git clone https://github.com/YOUR-USERNAME/panda.git
cd panda
```

## 3. Create a virtual environment

```bash
python -m venv .venv
```

### Windows PowerShell

```powershell
.\.venv\Scripts\Activate.ps1
```

### macOS / Linux

```bash
source .venv/bin/activate
```

Use `python3` instead of `python` if needed.

## 4. Install requirements

```bash
python -m pip install -r requirements.txt
```

(Ignore steps 5 and 6 for now)
## 5. Start a task

Replace `PC-XX-task-name` with your Jira key and task name.

```bash
git switch main
git fetch upstream
git merge --ff-only upstream/main
git push origin main
git switch -c PC-XX-task-name
```

## 6. Submit your work

```bash
git status
git add path/to/changed-file
git diff --cached
git commit -m "PC-XX: Describe your change"
git push -u origin PC-XX-task-name
```

On GitHub:

1. Open your fork.
2. Select Compare & pull request.
3. Set the destination to the original PANDA repository’s `main`.
4. Create the pull request.
5. Request review.

## Rules

- Work on a task branch.
- Keep pull requests small.
- Merge after review.
- Never commit secrets or `.venv`.