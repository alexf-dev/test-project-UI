/** Интерфейс структуры конфигурации — для типизации */
export interface AppConfig {
  enableTestButtons: boolean;
  enableDebugLogs: boolean;
  apiTimeout: number;
  featureFlags: {
    newDashboard: boolean;
    experimentalForms: boolean;
  };
}

/** Значения по умолчанию, если конфиг не загрузился */
export const DEFAULT_CONFIG: AppConfig = {
  enableTestButtons: false,
  enableDebugLogs: false,
  apiTimeout: 30000,
  featureFlags: {
    newDashboard: false,
    experimentalForms: false
  }
};
