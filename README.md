<h1> Difference Finder:</h1>

### Hexlet tests and linter status:

[![Actions Status](https://github.com/KhikmatullinB/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/KhikmatullinB/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/d103f2d120d5f04ae73c/maintainability)](https://codeclimate.com/github/KhikmatullinB/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/d103f2d120d5f04ae73c/test_coverage)](https://codeclimate.com/github/KhikmatullinB/frontend-project-46/test_coverage)

Description:

A difference generator is a program that determines the difference between two data structures. This is a popular task for which there are many online services. A similar mechanism is used in testing or tracking changes in configuration files.

Utility features:

Support for different input formats: yaml, json
Report generation in the form of plain text, stylish and json

Requirements: node.js

Setup:

1. git clone git@github.com:KhikmatullinB/frontend-project-46.git
2. cd frontend-project-46
3. make install
4. npm link

Run:
gendiff <file1> <file2> --format <format>

Asccinema:

1. diffrence "help":
   [![asciicast](https://asciinema.org/a/642816.svg)](https://asciinema.org/a/642816)
2. without nested structure:
   [![asciicast](https://asciinema.org/a/642829.svg)](https://asciinema.org/a/642829)
3. nested structure, format 'stylish':
   [![asciicast](https://asciinema.org/a/642830.svg)](https://asciinema.org/a/642830)
4. nested structure, format 'plain':
   [![asciicast](https://asciinema.org/a/642831.svg)](https://asciinema.org/a/642831)
5. nested structure, format 'json':
   [![asciicast](https://asciinema.org/a/642832.svg)](https://asciinema.org/a/642832)
