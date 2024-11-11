export enum EFilter {
    All = 'All',
    Completed = 'Completed',
    Active = 'Active'
}
export interface IFilter {
    filter: EFilter
}

export interface ITask {
    task: string; 
    completed: boolean
}

export interface ITodos {
    todos: ITask[];
}
