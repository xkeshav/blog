---

title: "Fixing Git Access Issue having Multiple GitHub Accounts"
description: "How to resolve GitHub SSH permission errors when juggling multiple accounts and get access denied issue despite having valid github user config."
publishDate: "26 Sept 2025"
author: "Alpha Dev"
tags: ['git', 'ssh', 'github', 'devops','multiple-account','config']
---

Have you ever encountered the frustrating `"Permission denied"` error when trying to push to a Git repository? This happened to me recently, and it turned out to be a classic case of SSH key confusion with multiple GitHub accounts. Here's how I diagnosed and fixed it.

## 🧨 The Problem

I was trying to push changes to my repository and got this error:

```bash
$ git push
ERROR: {"auth_status":"access_denied_to_user","body":"Permission to alphabet/AI-Toolkit.git denied to alpha."}

fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

GitHub was denying access to user `alpha` for the `alphabet` repository. But why was Git trying to authenticate as `alpha` when I needed to access a `alphabet` repository?

## 🔍 Diagnosing the Issue

Let’s break it down:

### 1. Check Remote Configuration

```bash
$ git remote -v
origin  ssh://git@github.com/alphabet/AI-Toolkit.git (fetch)
origin  ssh://git@github.com/alphabet/AI-Toolkit.git (push)
```

### 2. Check Git User Configuration

```bash
$ git config --list | grep user
user.name=alphabet
user.email=dev@alphabet.com
```

### 3. Test SSH Authentication

```bash
$ ssh -T git@github.com
Hi alpha! You've successfully authenticated, but GitHub does not provide shell access.
```

**Aha!** SSH was using the wrong key and authenticating as `alpha`.

### 4. Examine SSH Configuration

```ssh-config
# Personal account: alpha
Host github-alpha
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_alpha

# Company account: alphabet
Host github-alphabet
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_alphabet
```

The Git remote was using `git@github.com`, which defaulted to the wrong key.

## 🛠️ The Solution

Update the Git remote URL to use the correct SSH host alias.

### Step 1: Update the Remote URL

```bash add=git@github-alphabet
git remote set-url origin git@github-alphabet:alphabet/AI-Toolkit.git
```

### Step 2: Verify the Change

```bash
$ git remote -v
origin  git@github-alphabet:alphabet/AI-Toolkit.git (fetch)
origin  git@github-alphabet:alphabet/AI-Toolkit.git (push)
```

### Step 3: Test SSH Authentication

```bash
$ ssh -T git@github-alphabet
Hi alphabet! You've successfully authenticated, but GitHub does not provide shell access.
```

### Step 4: Test Git Push

```bash
$ git status
On branch main
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)

$ git push
# Success! 🎉
```

## 🧠 Key Takeaways

### 1. SSH Host Aliases Are Your Friend

```ssh-config
Host github-work
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_work

Host github-personal
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_personal
```

### 2. Match Repository URLs to Correct Accounts

```bash add=/git@github-work/ add="git@github-personal"
# For work repositories
git remote add origin git@github-work:alphabet/repo.git

# For personal repositories  
git remote add origin git@github-personal:alpha/repo.git
```

### 3. Verify SSH Authentication

```bash
ssh -T git@github-work
ssh -T git@github-personal
```

### 4. Keep Git Configuration Consistent

```bash
# For work repositories
git config user.name "Alphabet Dev"
git config user.email "dev@alphabet.com"

# For personal repositories
git config user.name "Alpha Dev"
git config user.email "alpha@personal.dev"
```

## ✅ Conclusion

Managing multiple GitHub accounts doesn't have to be painful. With proper SSH configuration and consistent remote URL patterns, you can seamlessly switch between accounts. SSH authentication happens before Git even knows which repository you're trying to access—so always check which key is being used.
