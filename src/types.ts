export type Language = 'pl' | 'en';
export type Currency = 'PLN' | 'EUR';

export interface TaxRate {
  rate: number;
  flag: string;
}

export interface TaxRates {
  [country: string]: TaxRate;
}

export interface CalculationResults {
  totalFuelCost: number;
  totalTollCost: number;
  totalServiceCost: number;
  totalOperationalCost: number;
  earningsBeforeTax: number;
  taxCost: number;
  suggestedPrice: number;
  totalRevenue: number;
  totalNetProfit: number;
  netProfitPerKm: number;
  km: number;
  fuelPrice: number;
  tollCostPerKm: number;
  serviceCostPerKm: number;
}

export interface TripInputs {
  distance: number | '';
  freightAmount: number | '';
  ratePerKm: number | '';
  isRatePerKmMode: boolean;
  customFuelPrice: number;
  customTollCost: number;
  customServiceCost: number;
  taxResidency: string;
  isEuroMode: boolean;
  exchangeRate: number;
  fuelConsumption: number;
}

export interface SavedTrip {
  id: string;
  timestamp: number;
  date: string; // YYYY-MM-DD
  inputs: TripInputs;
  summary: {
    totalNetProfit: number;
    currency: string;
  };
}

export type Role = 'admin' | 'user';

export interface User {
  username: string;
  password?: string;
  role: Role;
}

export interface DictionaryEntry {
  headerTitle: string;
  headerSubtitle: string;
  currencySettingsTitle: string;
  euroModeToggle: string;
  refreshRateTitle: string;
  currentRateLabel: string;
  distanceLabel: string;
  distancePlaceholder: string;
  calcModeToggle: string;
  freightAmountLabel: (currency: string) => string;
  freightAmountPlaceholder: string;
  ratePerKmLabel: (currency: string) => string;
  ratePerKmPlaceholder: string;
  customCostsTitle: string;
  customCostsHint: string;
  taxResidencyLabel: string;
  fuelPriceLabel: string;
  fuelConsumptionLabel: string;
  tollCostLabel: string;
  serviceCostLabel: string;
  citOverheadLabel: string;
  resultsTitlePln: string;
  resultsTitleEur: string;
  totalRevenueTitle: string;
  distanceDisplayLabel: string;
  costsSectionTitle: string;
  totalOpCostTitle: string;
  profitBeforeTaxTitle: string;
  earningsBeforeTaxTitle: string;
  taxCostTitle: (rate: string) => string;
  profitSectionTitle: string;
  totalNetProfitTitle: string;
  netProfitPerKmTitle: string;
  suggestedPriceTitle: string;
  costFuel: (rate: string, consumption: number) => string;
  costToll: (rate: string) => string;
  costService: (rate: string) => string;
  rateFetchError: (rate: string) => string;
  languageButton: string;
  tripDateLabel: string;
  saveTripButton: string;
  historyTitle: string;
  loadButton: string;
  deleteButton: string;
  noHistory: string;
  savedDateLabel: string;
  filterDateFrom: string;
  filterDateTo: string;
  periodSummaryTitle: string;
  allHistorySummaryTitle: string;
  periodTotalProfit: string;
  periodTotalDistance: string;
  clearFilters: string;
  loginTitle: string;
  usernameLabel: string;
  passwordLabel: string;
  loginButton: string;
  loginError: string;
  welcomeUser: (name: string) => string;
  logoutButton: string;
  adminPanelButton: string;
  backToCalculator: string;
  manageUsersTitle: string;
  addUserTitle: string;
  roleLabel: string;
  createUserButton: string;
  deleteUserConfirm: string;
  userCreatedSuccess: string;
  fillAllFields: string;
}

export interface Dictionary {
  pl: DictionaryEntry;
  en: DictionaryEntry;
}