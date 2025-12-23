---
title: "testing terminology"
description: "Testing terminology in general to understand the docs and help to write questions"
publishDate: "13 Aug 2024"
tags: ["blog"]
---

# Testing terminology

## Test Double

- A generic term for any kind of pretend object in place of real object.

## Dummy

- Are Object passed but never used. usually to fill parameter list.

## Fake

- Are Object actually working implementation but usually take some shortcut.

## Stubs

- Provide canned answer to calls made during the test. usually not responding at all to anything outside test

- Mostly used to check State verification.

## Spies

- Are _Stubs_ that record some information based on how they were called.
  eg: email services

## Mocks

- Are object; pre-programmed with expectations
- Mostly used to check behavior verification.
