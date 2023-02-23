import { Injectable } from '@angular/core';
import { Dialog, DialogModel } from '@syncfusion/ej2-popups';

@Injectable()
export class DialogService {
	public dialogInstance!: Dialog;
	public dialogObj!: Dialog;
	constructor() { }

	createDialog: Function = (element: HTMLElement, model: DialogModel): Dialog => {
		if (!element.classList.contains('e-dialog')) {
			model.showCloseIcon = true;
			this.dialogObj = new Dialog(model, element);
		}
		return this.dialogObj
	};

	showDialog: Function = (elemnet: HTMLElement, model: DialogModel) => {
		this.dialogInstance = this.createDialog(elemnet, model);
		this.dialogInstance.show();
	}

	hideDialog: Function = () => {
		if (this.dialogInstance) {
			this.dialogInstance.hide();
		}
	}
}