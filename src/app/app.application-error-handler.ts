import { ErrorHandler, Injectable, NgZone } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { MessageService } from 'primeng/components/common/messageservice';

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {

    constructor(
        private messageService: MessageService,
        private zone: NgZone
    ) {
        super();
        debugger
    }

    handleError(errorResponse: HttpErrorResponse | any) {
        debugger
        if (errorResponse instanceof HttpErrorResponse) {
            let mensagem = errorResponse.message;
            this.zone.run(() => {
                switch (errorResponse.status) {
                    case 401:
                        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: mensagem });
                        console.log(mensagem);
                        break;
                    case 403:
                        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: mensagem });
                        console.log(mensagem);
                        break;
                    case 404:
                        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: mensagem });
                        console.log(mensagem);
                        break;
                    default:
                        break;
                }
            });
        }
        super.handleError(errorResponse);
    }

}