export type AlertType = 'warning' | 'success' | 'info';

export type Alert = {
  type: AlertType;
  message: string;
  id: string;

  timestamp?: number;
  duration?: number;
  timeOutID?: number;

};

export type Alerts = Array<Alert>;
