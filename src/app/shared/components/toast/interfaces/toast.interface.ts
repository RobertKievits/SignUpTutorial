import { ToastEvents } from './toast-events.enum';

export interface Toast {
    message: string;
    title: string;
    type: ToastEvents;
}
