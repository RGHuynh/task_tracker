## Installion
Before running the cli, download and install Node.js. Node.js 20 is
required.

## Quick Start

To execute each of the cli commands, run the following command:

### Add
```bash
node index.js add "task name"
```

### Update
```bash
node index.js update 1 "Buy groceries and cook dinner"
```

### Delete
```bash
node index.js delete 1
```

### Marking a task as in progress or done

```bash
node index.js mark-in-progress 1
node index.js mark-done 1
```

### Listing all tasks

```bash
node index.js list
```

### Listing tasks by status
```bash
node index.js list done
node index.js list todo
node index.js list in-progress
```

## Project
https://roadmap.sh/projects/task-tracker
