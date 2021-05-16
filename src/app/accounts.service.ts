import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

//injectable gets added to the service you want the injection to go
@Injectable()
export class AccountsService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      //inject service into service - will req adding metadata (@Injectable)
      constructor(private loggingService: LoggingService){}

      addAccount(name: string, status: string) {
        this.accounts.push({name: name, status: status});
        this.loggingService.logStatusChange(status);
      }
    
      updateStatus(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
        this.loggingService.logStatusChange(status);
      }
}