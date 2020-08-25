export class ServersService{
    servers: {id: number, name: string, status:string}[] = [];
    getService(){
        return this.servers;
    }
    
}