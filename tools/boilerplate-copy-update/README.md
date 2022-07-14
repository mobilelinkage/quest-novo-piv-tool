# Boilerplate Copy Update

## Overview

This is a shell script for copying common IVA boilerplate files to other IVA boilerplate repos.

It is intended only as an internal utility script.


## Installation

```bash
npm install
```

## Execution

Edit the `project_folders.txt` file with the folder name of IVA projects that should be updated.


### Assumptions

Each folder listed in the file is assumed to have the same general folder structure as IVA boilerplate repo.

All folders listed in the `project_folders.txt` file are assumed to be siblings of the main IVA boilerplate repo folder.

e.g.:

- `/wwwpath/iva-boilerplate/`
- `/wwwpath/folder-to-update1/`
- `/wwwpath/folder-to-update2/`


### Running the script

```bash
node build
```

This will then copy the relevant boilerplate files into each folder defined in `project_folders.txt`.


