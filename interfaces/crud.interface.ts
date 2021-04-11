export interface CRUD {
    readAll: () => Promise<any>;
    create: (resource: any) => Promise<any>;
    readById: (id: string) => Promise<any>;
    deleteById: (id: string) => Promise<any>;
}