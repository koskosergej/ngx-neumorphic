import { AlertService } from './alert.service';
import { DEFAULT_ALERTS_CONFIG } from './constants';

describe('AlertService', () => {
  let alertService: AlertService;
  const mockAlertConfig = { timeout: 1000 };
  const successMessage = 'Success message';

  beforeEach(() => {
    alertService = new AlertService(mockAlertConfig);
  });

  it('should create', () => {
    expect(alertService).toBeTruthy();
  });

  it('should emit a success alert', () => {
    alertService.success(successMessage);

    expect(
      Object.keys(alertService['alertsMap']).length
    ).toEqual(1); // Assuming generateID() returns '1'
    expect(
      Object.values(alertService['alertsMap'])[0]
    ).toMatchObject({
      type: 'success',
      message: successMessage
    });
  });

  it('should emit a warning alert', () => {
    const warningMessage = 'Warning message';

    alertService.warning(warningMessage);

    expect(
      Object.keys(alertService['alertsMap']).length
    ).toEqual(1); // Assuming generateID() returns '1'
    expect(
      Object.values(alertService['alertsMap'])[0]
    ).toMatchObject({
      type: 'warning',
      message: warningMessage
    });
  });

  it('should emit an info alert', () => {
    const infoMessage = 'Info message';

    alertService.info(infoMessage);

    expect(
      Object.keys(alertService['alertsMap']).length
    ).toEqual(1); // Assuming generateID() returns '1'
    expect(
      Object.values(alertService['alertsMap'])[0]
    ).toMatchObject({
      type: 'info',
      message: infoMessage
    });
  });

  it('should destroy an alert', () => {
    const alertID = '1'; // Mocked alert ID
    alertService['alertsMap'][alertID] = {
      id: alertID,
      type: 'success',
      message: successMessage,
      timeOutID: setTimeout(
        () => {},
        500
      ) as unknown as number // Mocked timeout ID
    };
    const initialAlertsCount = Object.keys(
      alertService['alertsMap']
    ).length;

    alertService.destroy(alertID);

    expect(
      Object.keys(alertService['alertsMap']).length
    ).toBe(initialAlertsCount - 1);
  });

  it('should emit a message and destroy an alert after the timeout', () => {
    jest.useFakeTimers();
    alertService.emitMessage({
      type: 'success',
      message: successMessage
    });

    jest.advanceTimersByTime(
      DEFAULT_ALERTS_CONFIG.timeout + 1000
    );

    expect(
      Object.keys(alertService['alertsMap']).length
    ).toBe(0);
  });
});
