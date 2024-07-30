

import { Gantt, Task, EventOption, StylingOption, ViewMode, DisplayOption } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";

const GanttChart = () => {
    const tasks =
        [
            {
                start: new Date(2023, 0, 1),
                end: new Date(2023, 0, 7),
                name: 'Task-1',
                id: 'Task 0',
                type: 'task',
                styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
            },
            {
                start: new Date(2023, 0, 8),
                end: new Date(2023, 0, 10),
                name: 'Task-2',
                id: 'Task 0',
                type: 'task',
                styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
            },
            {
                start: new Date(2023, 0, 3),
                end: new Date(2023, 0, 8),
                name: 'Task-3',
                id: 'Task 0',
                type: 'task',
                styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
            },
            {
                start: new Date(2023, 0, 10),
                end: new Date(2023, 0, 15),
                name: 'Task-3',
                id: 'Task 0',
                type: 'task',
                styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
            },
            {
                start: new Date(2023, 0, 2),
                end: new Date(2023, 0, 5),
                name: 'Task-4',
                id: 'Task 0',
                type: 'task',
                styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
            },
            {
                start: new Date(2023, 0, 13),
                end: new Date(2023, 0, 15),
                name: 'Task-5',
                id: 'Task 0',
                type: 'task',
                styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
            }
        ]

    return (
        <>
            <Gantt tasks={tasks} />
        </>
    )
}
export default GanttChart


