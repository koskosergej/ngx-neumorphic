export type AlertType = 'warning' | 'success' | 'info';

export type Alert = {
  type: AlertType;
  message: string;
  id: string;
  duration?: number;
  timeOutID?: number;
};

export type Alerts = Array<Alert>;

export type AlertConfig = {
  timeout?: number;
};
