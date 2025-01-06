---
title: "Python profile setup in vscode"
description: "A vs code profile and workspace configuration for python project"
publishDate: "06 Jan 2025"
tags: ["vscode", "python", "project-setup", "profile", "workspace"]
draft: false
---

## Setting Up VS Code for Python Development: A Profile-Based Approach

## Why Separate Profiles Matter

When you're primarily a JavaScript developer working with Python, it's crucial to maintain clean development environments. Creating a dedicated Python profile in VS Code helps you:

- Keep JavaScript-related extensions isolated from Python tools
- Avoid performance impacts from running unnecessary extensions
- Switch quickly between different development contexts
- Maintain separate settings for each language ecosystem

## Creating a Python Development Profile

1. Open VS Code and create a new profile named "Python Dev":

```txt
Command Palette (Ctrl/Cmd + Shift + P) → Profiles: Create Profile → "Python Dev"
```

### Essential Extensions for Python Profile

```json
{
  "recommendations": [
    "ms-python.python",
    "ms-python.vscode-pylance",
    "charliermarsh.ruff",
    "njpwerner.autodocstring",
    "ms-python.isort",
    "ms-toolsai.jupyter"
  ]
}
```

### Recommended Workspace Settings

Create `.vscode/settings.json`:

```json
{
  "python.defaultInterpreterPath": "${workspaceFolder}/.venv/bin/python",
  "python.analysis.typeCheckingMode": "basic",
  "python.formatting.provider": "none",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.organizeImports": true,
    "source.fixAll": true
  },
  "ruff.lint.run": "onSave",
  "[python]": {
    "editor.defaultFormatter": "charliermarsh.ruff"
  },
  "files.exclude": {
    "**/__pycache__": true,
    "**/.pytest_cache": true,
    "**/*.pyc": true
  }
}
```

### Debug Configuration

Create `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Python: Current File",
      "type": "python",
      "request": "launch",
      "program": "${file}",
      "console": "integratedTerminal",
      "justMyCode": true
    },
    {
      "name": "Python: Streamlit",
      "type": "python",
      "request": "launch",
      "module": "streamlit",
      "args": ["run", "${workspaceFolder}/app.py"],
      "console": "integratedTerminal"
    }
  ]
}
```

## Profile Management Tips

- Export your Python profile to share with team members
- Use "Save Workspace As..." to maintain project-specific settings
- Switch to your JavaScript profile when working on front-end tasks
- Consider creating a hybrid profile if you work frequently with both Python and JavaScript in the same project (e.g., Flask/FastAPI with React)

## Workspace Organization

Maintain a clean workspace structure:

```
project/
├── .vscode/
│   ├── settings.json
│   └── launch.json
├── .venv/
├── src/
├── tests/
├── .gitignore
└── pyproject.toml/requirements.txt
```

This setup keeps your JavaScript development environment clean while providing all necessary tools for Python development. The profile-based approach ensures you can switch between different technology stacks without cognitive overhead or IDE performance impacts.
